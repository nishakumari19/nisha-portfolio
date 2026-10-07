import { Wifi, WifiOff, RefreshCw, CheckCircle2, Clock, Terminal, Fish, Heart, Radio, Trash2 } from 'lucide-react';
import { useOfflineQueue } from '../hooks/useOfflineQueue';

export const LiveDemo = () => {
  const {
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
  } = useOfflineQueue();

  return (
    <section id="live-demo" className="py-20 lg:py-28 border-t border-[#efe7dd] dark:border-[#3e3732] bg-[#fcf2ec]/40 dark:bg-[#1e1b18]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 text-xs font-mono font-semibold text-[#e8833a] mb-2 uppercase tracking-wide">
            <span>🐾 Try it: the offline queue</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-[#1f1b18] dark:text-[#f3efea] tracking-tight">
            Try it: the offline queue
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#554338] dark:text-[#a39b93] max-w-3xl leading-relaxed">
            This is a small, browser-only demo of the idea behind the tracker&apos;s sync. Go offline, click a few buttons, and watch the actions wait in the queue until you&apos;re back online.
          </p>
        </div>

        {/* Interactive Console Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Network Toggle & Action Pad (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Network Control & State Box */}
            <div className="p-6 rounded-2xl bg-white dark:bg-[#2a2522] border border-[#efe7dd] dark:border-[#3e3732] shadow-sm space-y-5">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-base font-bold text-[#1f1b18] dark:text-[#f3efea]">
                    Connection status
                  </h3>
                  <p className="text-xs text-[#554338] dark:text-[#a39b93]">
                    Switch between online and offline
                  </p>
                </div>

                {/* Status Badge */}
                <div
                  className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-semibold ${
                    isOnline
                      ? 'bg-[#c5e7d6]/60 text-[#466557] dark:bg-[#466557]/40 dark:text-[#a5d6be]'
                      : 'bg-[#ffdad6]/80 text-[#93000a] dark:bg-[#ba1a1a]/40 dark:text-[#ffdad6]'
                  }`}
                >
                  <span className="relative flex h-2 w-2">
                    {isOnline && (
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#466557] opacity-75"></span>
                    )}
                    <span
                      className={`relative inline-flex rounded-full h-2 w-2 ${
                        isOnline ? 'bg-[#466557]' : 'bg-[#ba1a1a]'
                      }`}
                    ></span>
                  </span>
                  <span>{isOnline ? 'ONLINE' : 'OFFLINE'}</span>
                </div>
              </div>

              {/* Online/Offline Toggle Button */}
              <button
                onClick={toggleConnection}
                className={`w-full py-3 px-4 rounded-xl font-medium text-sm flex items-center justify-center gap-2 transition-all shadow-sm focus-visible:ring-2 focus-visible:ring-[#e8833a] ${
                  isOnline
                    ? 'bg-[#efe7dd]/70 hover:bg-[#efe7dd] text-[#1f1b18] dark:bg-[#352f2c] dark:hover:bg-[#3e3732] dark:text-[#f3efea]'
                    : 'bg-[#e8833a] hover:bg-[#d67228] text-white shadow-md'
                }`}
              >
                {isOnline ? (
                  <>
                    <WifiOff className="w-4 h-4 text-[#ba1a1a]" />
                    <span>Go offline</span>
                  </>
                ) : (
                  <>
                    <Wifi className="w-4 h-4 text-white animate-pulse" />
                    <span>Reconnect and sync</span>
                  </>
                )}
              </button>

              {/* Action Counters Row */}
              <div className="grid grid-cols-4 gap-2 pt-2 border-t border-[#efe7dd] dark:border-[#3e3732] text-center">
                <div className="p-2 rounded-lg bg-[#fff8f5] dark:bg-[#1e1b18]">
                  <div className="text-lg font-bold font-mono text-[#e8833a]">
                    {stats.treats}
                  </div>
                  <div className="text-[11px] font-medium text-[#554338] dark:text-[#a39b93]">
                    Treats
                  </div>
                </div>
                <div className="p-2 rounded-lg bg-[#fff8f5] dark:bg-[#1e1b18]">
                  <div className="text-lg font-bold font-mono text-[#7a9a8b]">
                    {stats.pets}
                  </div>
                  <div className="text-[11px] font-medium text-[#554338] dark:text-[#a39b93]">
                    Pets
                  </div>
                </div>
                <div className="p-2 rounded-lg bg-[#fff8f5] dark:bg-[#1e1b18]">
                  <div className="text-lg font-bold font-mono text-[#9a8eb8]">
                    {stats.pings}
                  </div>
                  <div className="text-[11px] font-medium text-[#554338] dark:text-[#a39b93]">
                    Pings
                  </div>
                </div>
                <div className="p-2 rounded-lg bg-[#fff8f5] dark:bg-[#1e1b18] border border-[#e8833a]/30">
                  <div className="text-lg font-bold font-mono text-[#974800] dark:text-[#ffb689]">
                    {pendingCount}
                  </div>
                  <div className="text-[11px] font-medium text-[#974800] dark:text-[#ffb689]">
                    Pending
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons Box */}
            <div className="p-6 rounded-2xl bg-white dark:bg-[#2a2522] border border-[#efe7dd] dark:border-[#3e3732] shadow-sm space-y-4">
              <div>
                <h3 className="text-base font-bold text-[#1f1b18] dark:text-[#f3efea]">
                  Send actions
                </h3>
                <p className="text-xs text-[#554338] dark:text-[#a39b93]">
                  {isOnline
                    ? 'Online: sends right away.'
                    : 'Offline: saves to the local IndexedDB queue.'}
                </p>
              </div>

              <div className="space-y-2.5">
                {/* Give Treat */}
                <button
                  onClick={() => performAction('treat')}
                  className="w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-semibold text-[#1f1b18] dark:text-[#f3efea] bg-[#fff8f5] dark:bg-[#1e1b18] hover:bg-[#efe7dd]/70 dark:hover:bg-[#352f2c] border border-[#efe7dd] dark:border-[#3e3732] transition-colors focus-visible:ring-2 focus-visible:ring-[#e8833a]"
                >
                  <div className="flex items-center gap-2.5">
                    <Fish className="w-4 h-4 text-[#e8833a]" />
                    <span>Give treat</span>
                  </div>
                  <span className="text-xs font-mono text-[#554338] dark:text-[#a39b93]">
                    salmon crunchie
                  </span>
                </button>

                {/* Give Pets */}
                <button
                  onClick={() => performAction('pets')}
                  className="w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-semibold text-[#1f1b18] dark:text-[#f3efea] bg-[#fff8f5] dark:bg-[#1e1b18] hover:bg-[#efe7dd]/70 dark:hover:bg-[#352f2c] border border-[#efe7dd] dark:border-[#3e3732] transition-colors focus-visible:ring-2 focus-visible:ring-[#e8833a]"
                >
                  <div className="flex items-center gap-2.5">
                    <Heart className="w-4 h-4 text-[#7a9a8b]" />
                    <span>Give pets</span>
                  </div>
                  <span className="text-xs font-mono text-[#554338] dark:text-[#a39b93]">
                    ear scratch
                  </span>
                </button>

                {/* Send Ping */}
                <button
                  onClick={() => performAction('ping')}
                  className="w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-semibold text-[#1f1b18] dark:text-[#f3efea] bg-[#fff8f5] dark:bg-[#1e1b18] hover:bg-[#efe7dd]/70 dark:hover:bg-[#352f2c] border border-[#efe7dd] dark:border-[#3e3732] transition-colors focus-visible:ring-2 focus-visible:ring-[#e8833a]"
                >
                  <div className="flex items-center gap-2.5">
                    <Radio className="w-4 h-4 text-[#9a8eb8]" />
                    <span>Send ping</span>
                  </div>
                  <span className="text-xs font-mono text-[#554338] dark:text-[#a39b93]">
                    status check
                  </span>
                </button>
              </div>

              {queue.length > 0 && (
                <div className="pt-2">
                  <button
                    onClick={clearQueue}
                    className="w-full py-1.5 text-xs font-mono text-[#554338] dark:text-[#a39b93] hover:text-[#93000a] transition-colors text-center"
                  >
                    Clear local queue
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Right Column: Queue Inspector & Terminal Log (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            {/* Live Queue Table Box */}
            <div className="p-6 rounded-2xl bg-white dark:bg-[#2a2522] border border-[#efe7dd] dark:border-[#3e3732] shadow-sm space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-base font-bold text-[#1f1b18] dark:text-[#f3efea] flex items-center gap-2">
                    <span>Queued actions</span>
                    <span className="text-xs font-mono font-normal text-[#554338] dark:text-[#a39b93]">
                      (IndexedDB)
                    </span>
                  </h3>
                  <p className="text-xs text-[#554338] dark:text-[#a39b93]">
                    {queue.length === 0
                      ? 'Queue is empty.'
                      : `${queue.length} item(s) in queue. Saved across page reloads.`}
                  </p>
                </div>

                {isSyncing && (
                  <div className="flex items-center gap-2 text-xs font-mono text-[#e8833a] font-semibold animate-pulse">
                    <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                    <span>Syncing... {syncProgress}%</span>
                  </div>
                )}
              </div>

              {/* Progress Bar (Visible during batch sync) */}
              {isSyncing && (
                <div className="w-full h-1.5 bg-[#efe7dd] dark:bg-[#3e3732] rounded-full overflow-hidden">
                  <div
                    className="h-full bg-[#e8833a] transition-all duration-300"
                    style={{ width: `${syncProgress}%` }}
                  />
                </div>
              )}

              {/* Queue Items Container */}
              <div className="max-h-56 overflow-y-auto space-y-2 custom-scrollbar pr-1">
                {queue.length === 0 ? (
                  <div className="text-center py-8 text-xs font-mono text-[#554338] dark:text-[#a39b93] border border-dashed border-[#efe7dd] dark:border-[#3e3732] rounded-xl p-4">
                    <span>No queued items. Go offline and click &quot;Give treat&quot; or &quot;Give pets&quot; to queue actions.</span>
                  </div>
                ) : (
                  queue.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-center justify-between p-2.5 rounded-xl bg-[#fff8f5] dark:bg-[#1e1b18] border border-[#efe7dd] dark:border-[#3e3732] text-xs font-mono"
                    >
                      <div className="flex items-center gap-2 truncate">
                        <span className="shrink-0 text-[#e8833a]">
                          {item.action === 'treat' ? (
                            <Fish className="w-4 h-4 inline" />
                          ) : item.action === 'pets' ? (
                            <Heart className="w-4 h-4 inline text-[#7a9a8b]" />
                          ) : (
                            <Radio className="w-4 h-4 inline text-[#9a8eb8]" />
                          )}
                        </span>
                        <div className="truncate">
                          <span className="font-semibold text-[#1f1b18] dark:text-[#f3efea]">
                            {item.id.slice(0, 10)}
                          </span>
                          <span className="text-[#554338] dark:text-[#a39b93] ml-2">
                            {item.actionLabel}
                          </span>
                        </div>
                      </div>

                      {/* Status indicator */}
                      <div className="flex items-center gap-2 shrink-0 ml-2">
                        {item.status === 'pending' && (
                          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-semibold bg-[#ffdbc7] text-[#974800] dark:bg-[#e8833a]/20 dark:text-[#ffb689]">
                            <Clock className="w-3 h-3" />
                            <span>pending</span>
                          </span>
                        )}
                        {item.status === 'syncing' && (
                          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-semibold bg-[#e0f2fe] text-[#0369a1] dark:bg-[#0369a1]/20 dark:text-[#7dd3fc]">
                            <RefreshCw className="w-3 h-3 animate-spin" />
                            <span>syncing</span>
                          </span>
                        )}
                        {item.status === 'synced' && (
                          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-semibold bg-[#c5e7d6] text-[#466557] dark:bg-[#466557]/20 dark:text-[#a5d6be]">
                            <CheckCircle2 className="w-3 h-3" />
                            <span>synced</span>
                          </span>
                        )}
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>

            {/* Terminal-Style Activity Log */}
            <div className="rounded-2xl bg-[#1e1b18] text-[#f3efea] border border-[#3e3732] shadow-md overflow-hidden">
              {/* Terminal Title Bar */}
              <div className="flex items-center justify-between px-4 py-2.5 bg-[#25211e] border-b border-[#3e3732]">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#e8833a]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#7a9a8b]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#efe7dd]/40" />
                  </div>
                  <div className="flex items-center gap-1.5 ml-2 text-xs font-mono text-[#a39b93]">
                    <Terminal className="w-3 h-3" />
                    <span>sync-worker.log</span>
                  </div>
                </div>

                <button
                  onClick={clearLog}
                  className="flex items-center gap-1 text-[11px] font-mono text-[#a39b93] hover:text-[#f3efea] transition-colors"
                  title="Clear terminal log"
                >
                  <Trash2 className="w-3 h-3" />
                  <span>Clear log</span>
                </button>
              </div>

              {/* Terminal Logs Content */}
              <div className="p-4 font-mono text-xs space-y-1.5 h-48 overflow-y-auto custom-scrollbar">
                {logs.map((log) => (
                  <div key={log.id} className="flex items-start gap-2 leading-relaxed">
                    <span className="text-[#a39b93] shrink-0 select-none">
                      {new Date(log.timestamp).toLocaleTimeString([], {
                        hour: '2-digit',
                        minute: '2-digit',
                        second: '2-digit',
                      })}
                    </span>
                    <span
                      className={
                        log.type === 'success'
                          ? 'text-[#34d399]'
                          : log.type === 'sync'
                          ? 'text-[#38bdf8]'
                          : log.type === 'queued'
                          ? 'text-[#fbbf24]'
                          : 'text-[#d5ccc4]'
                      }
                    >
                      {log.message}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
