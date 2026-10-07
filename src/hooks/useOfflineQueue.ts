import { useState, useEffect, useRef, useCallback } from 'react';
import { QueueItem, QueueLogEntry, ActionStats, ActionType } from '../types';

/**
 * IndexedDB storage helper with complete try/catch wrapping
 * and in-memory fallback if IndexedDB is blocked or unsupported.
 */
const DB_NAME = 'nisha_portfolio_offline_db';
const STORE_NAME = 'offline_actions_queue';
const DB_VERSION = 1;

let inMemoryFallbackQueue: QueueItem[] = [];

const openIndexedDB = (): Promise<IDBDatabase | null> => {
  return new Promise((resolve) => {
    try {
      if (typeof window === 'undefined' || !window.indexedDB) {
        resolve(null);
        return;
      }
      const request = window.indexedDB.open(DB_NAME, DB_VERSION);

      request.onupgradeneeded = () => {
        try {
          const db = request.result;
          if (!db.objectStoreNames.contains(STORE_NAME)) {
            db.createObjectStore(STORE_NAME, { keyPath: 'id' });
          }
        } catch {
          // Ignore upgrade errors
        }
      };

      request.onsuccess = () => {
        resolve(request.result);
      };

      request.onerror = () => {
        resolve(null);
      };
    } catch {
      resolve(null);
    }
  });
};

const loadQueueFromStorage = async (): Promise<QueueItem[]> => {
  try {
    const db = await openIndexedDB();
    if (!db) {
      return [...inMemoryFallbackQueue];
    }
    return new Promise((resolve) => {
      try {
        const tx = db.transaction(STORE_NAME, 'readonly');
        const store = tx.objectStore(STORE_NAME);
        const req = store.getAll();

        req.onsuccess = () => {
          const items: QueueItem[] = req.result || [];
          resolve(items.sort((a, b) => a.timestamp - b.timestamp));
        };

        req.onerror = () => {
          resolve([...inMemoryFallbackQueue]);
        };
      } catch {
        resolve([...inMemoryFallbackQueue]);
      }
    });
  } catch {
    return [...inMemoryFallbackQueue];
  }
};

const saveQueueToStorage = async (items: QueueItem[]): Promise<void> => {
  inMemoryFallbackQueue = [...items];
  try {
    const db = await openIndexedDB();
    if (!db) return;

    const tx = db.transaction(STORE_NAME, 'readwrite');
    const store = tx.objectStore(STORE_NAME);
    store.clear();
    items.forEach((item) => store.put(item));
  } catch (err) {
    console.warn('Storage sync warning:', err);
  }
};

/**
 * Custom hook managing the offline-first action queue
 */
export function useOfflineQueue() {
  const [isOnline, setIsOnline] = useState<boolean>(true);
  const [queue, setQueue] = useState<QueueItem[]>([]);
  const [logs, setLogs] = useState<QueueLogEntry[]>([
    {
      id: 'init-1',
      timestamp: Date.now() - 5000,
      message: 'Worker initialized. Offline sync engine ready.',
      type: 'info',
    },
  ]);
  const [isSyncing, setIsSyncing] = useState<boolean>(false);
  const [syncProgress, setSyncProgress] = useState<number>(100);
  const [stats, setStats] = useState<ActionStats>({
    treats: 0,
    pets: 0,
    pings: 0,
    syncedTotal: 0,
  });

  const isSyncingRef = useRef<boolean>(false);

  const addLog = useCallback((message: string, type: QueueLogEntry['type'] = 'info') => {
    setLogs((prev) => [
      ...prev.slice(-49), // retain last 50 entries
      {
        id: `log-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
        timestamp: Date.now(),
        message,
        type,
      },
    ]);
  }, []);

  // Initialize queue from IndexedDB on mount
  useEffect(() => {
    loadQueueFromStorage().then((stored) => {
      if (stored.length > 0) {
        setQueue(stored);
        addLog(`Loaded ${stored.length} persisted queue item(s) from local storage.`, 'queued');
      }
    });
  }, [addLog]);

  // Keep storage in sync when queue changes
  useEffect(() => {
    saveQueueToStorage(queue);
  }, [queue]);

  /**
   * Sequential sync worker triggered when online
   */
  const triggerSyncWorker = useCallback(async () => {
    if (isSyncingRef.current) return;

    // Filter pending items
    const pendingItems = queue.filter((i) => i.status === 'pending');
    if (pendingItems.length === 0) {
      setSyncProgress(100);
      return;
    }

    isSyncingRef.current = true;
    setIsSyncing(true);
    addLog(`Network available. Starting batch sync for ${pendingItems.length} queued action(s)...`, 'sync');

    const totalToSync = pendingItems.length;
    let completedCount = 0;

    for (const item of pendingItems) {
      // Step 1: Mark syncing
      setQueue((prev) =>
        prev.map((q) => (q.id === item.id ? { ...q, status: 'syncing' } : q))
      );
      addLog(`Syncing [${item.id.slice(0, 8)}] ${item.actionLabel}...`, 'sync');

      // Step 2: Realistic simulated delay for network roundtrip (350ms - 500ms)
      await new Promise((resolve) => setTimeout(resolve, 400));

      // Step 3: Mark synced
      setQueue((prev) =>
        prev.map((q) => (q.id === item.id ? { ...q, status: 'synced' } : q))
      );

      // Step 4: Update counters
      setStats((prev) => ({
        ...prev,
        [item.action === 'treat' ? 'treats' : item.action === 'pets' ? 'pets' : 'pings']:
          prev[item.action === 'treat' ? 'treats' : item.action === 'pets' ? 'pets' : 'pings'] + 1,
        syncedTotal: prev.syncedTotal + 1,
      }));

      completedCount += 1;
      setSyncProgress(Math.round((completedCount / totalToSync) * 100));
      addLog(`Synced ✓ [${item.id.slice(0, 8)}] ${item.actionLabel} acknowledged by server.`, 'success');
    }

    isSyncingRef.current = false;
    setIsSyncing(false);
    addLog(`All ${totalToSync} actions synchronized successfully.`, 'success');
  }, [queue, addLog]);

  // Trigger sync automatically when online changes or when online has pending items
  useEffect(() => {
    if (isOnline) {
      const hasPending = queue.some((i) => i.status === 'pending');
      if (hasPending && !isSyncingRef.current) {
        triggerSyncWorker();
      }
    }
  }, [isOnline, queue, triggerSyncWorker]);

  /**
   * Action trigger (treat, pets, ping)
   */
  const performAction = useCallback(
    (action: ActionType) => {
      const actionLabels: Record<ActionType, string> = {
        treat: 'Give treat (salmon crunchie)',
        pets: 'Give pets (ear scratch)',
        ping: 'Send telemetry ping',
      };
      const label = actionLabels[action];
      const newItemId = `act-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 6)}`;

      if (isOnline) {
        // Immediate online execution
        const newItem: QueueItem = {
          id: newItemId,
          action,
          actionLabel: label,
          timestamp: Date.now(),
          status: 'synced',
        };
        setQueue((prev) => [newItem, ...prev.slice(0, 19)]); // keep recent 20
        setStats((prev) => ({
          ...prev,
          [action === 'treat' ? 'treats' : action === 'pets' ? 'pets' : 'pings']:
            prev[action === 'treat' ? 'treats' : action === 'pets' ? 'pets' : 'pings'] + 1,
          syncedTotal: prev.syncedTotal + 1,
        }));
        addLog(`Direct online dispatch: ${label} [${newItemId.slice(0, 8)}]`, 'success');
      } else {
        // Offline: enqueue
        const newItem: QueueItem = {
          id: newItemId,
          action,
          actionLabel: label,
          timestamp: Date.now(),
          status: 'pending',
        };
        setQueue((prev) => [...prev, newItem]);
        addLog(`Offline mode: Queued [${newItemId.slice(0, 8)}] "${label}" locally.`, 'queued');
      }
    },
    [isOnline, addLog]
  );

  const toggleConnection = useCallback(() => {
    setIsOnline((prev) => {
      const next = !prev;
      addLog(
        next
          ? 'Network interface switched to ONLINE.'
          : 'Network interface switched to OFFLINE. New actions will queue in IndexedDB.',
        next ? 'info' : 'queued'
      );
      return next;
    });
  }, [addLog]);

  const clearLog = useCallback(() => {
    setLogs([
      {
        id: `clear-${Date.now()}`,
        timestamp: Date.now(),
        message: 'Log cleared by user.',
        type: 'info',
      },
    ]);
  }, []);

  const clearQueue = useCallback(async () => {
    setQueue([]);
    inMemoryFallbackQueue = [];
    try {
      const db = await openIndexedDB();
      if (db) {
        const tx = db.transaction(STORE_NAME, 'readwrite');
        tx.objectStore(STORE_NAME).clear();
      }
    } catch (err) {
      console.warn('Failed clearing queue store:', err);
    }
    addLog('Action queue cleared.', 'info');
  }, [addLog]);

  const pendingCount = queue.filter((i) => i.status === 'pending').length;

  return {
    isOnline,
    toggleConnection,
    queue,
    logs,
    isSyncing,
    syncProgress,
    stats,
    pendingCount,
    performAction,
    clearLog,
    clearQueue,
  };
}
