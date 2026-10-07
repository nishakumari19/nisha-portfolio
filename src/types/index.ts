export type ActionType = 'treat' | 'pets' | 'ping';

export type QueueItemStatus = 'pending' | 'syncing' | 'synced' | 'failed';

export interface QueueItem {
  id: string;
  action: ActionType;
  actionLabel: string;
  timestamp: number;
  status: QueueItemStatus;
}

export interface QueueLogEntry {
  id: string;
  timestamp: number;
  message: string;
  type: 'info' | 'sync' | 'queued' | 'success';
}

export interface ActionStats {
  treats: number;
  pets: number;
  pings: number;
  syncedTotal: number;
}
