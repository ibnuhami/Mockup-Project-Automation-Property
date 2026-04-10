import { Filter, ChevronDown, Download, FileText, ImageIcon, AlertTriangle, FolderArchive, Table2, Info, RefreshCw, X, ChevronLeft, ChevronRight, Gauge, Signal, RotateCcw } from 'lucide-react';

export default function TaskHistory() {
  const tasks = [
    { id: 'TX-90421', file: 'product_catalog_v2.zip', target: 'e-commerce-portal.com', status: 'Success', duration: '1m 42s', icon: FileText },
    { id: 'TX-90422', file: 'hero_assets_2024.tar.gz', target: 'digital-archive.net', status: 'Processing', duration: '--', icon: ImageIcon },
    { id: 'TX-90419', file: 'user_analytics_july.csv', target: 'bi-dashboard.internal', status: 'Failed', duration: '0m 12s', icon: AlertTriangle },
    { id: 'TX-90423', file: 'marketing_assets.zip', target: 'asset-manager.com', status: 'Pending', duration: '--', icon: FolderArchive },
    { id: 'TX-90418', file: 'inventory_master_list.xlsx', target: 'warehouse-system.net', status: 'Success', duration: '4m 05s', icon: Table2 },
  ];

  return (
    <div className="p-10 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
        <div>
          <h2 className="text-4xl font-extrabold text-on-surface font-headline tracking-tight mb-2">Task History & Queue</h2>
          <p className="text-on-surface-variant max-w-2xl">Monitor real-time automation progress, review past uploads, and manage failed tasks from a centralized workspace.</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="bg-slate-100 px-4 py-2 rounded-xl flex items-center gap-4">
            <div className="flex flex-col">
              <span className="text-[10px] uppercase font-bold text-slate-400 tracking-tighter">Active Tasks</span>
              <span className="text-lg font-bold text-primary">12</span>
            </div>
            <div className="w-[1px] h-8 bg-slate-200"></div>
            <div className="flex flex-col">
              <span className="text-[10px] uppercase font-bold text-slate-400 tracking-tighter">Daily Success</span>
              <span className="text-lg font-bold text-secondary">98.4%</span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
        <div className="flex items-center gap-4 flex-1">
          <div className="relative flex-1 max-w-sm">
            <Filter className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
            <input
              className="w-full bg-white border-none shadow-sm rounded-xl py-3 pl-12 pr-4 focus:ring-2 focus:ring-primary transition-all"
              placeholder="Quick search ID or File..."
              type="text"
            />
          </div>
          <div className="relative">
            <select className="appearance-none bg-white border-none shadow-sm rounded-xl py-3 pl-5 pr-12 text-sm font-medium focus:ring-2 focus:ring-primary cursor-pointer min-w-[180px]">
              <option>Filter by Status: All</option>
              <option>Pending</option>
              <option>Processing</option>
              <option>Success</option>
              <option>Failed</option>
            </select>
            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400 w-4 h-4" />
          </div>
        </div>
        <button className="bg-slate-200 hover:bg-slate-300 text-on-surface px-5 py-3 rounded-xl text-sm font-semibold transition-all flex items-center gap-2">
          <Download className="w-4 h-4" />
          Export CSV
        </button>
      </div>

      <div className="bg-white rounded-2xl shadow-xl shadow-slate-200/50 overflow-hidden border border-slate-100">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50/50">
              <th className="px-6 py-5 text-xs font-bold text-on-surface-variant uppercase tracking-wider">Task ID</th>
              <th className="px-6 py-5 text-xs font-bold text-on-surface-variant uppercase tracking-wider">File Name</th>
              <th className="px-6 py-5 text-xs font-bold text-on-surface-variant uppercase tracking-wider">Target Website</th>
              <th className="px-6 py-5 text-xs font-bold text-on-surface-variant uppercase tracking-wider">Status</th>
              <th className="px-6 py-5 text-xs font-bold text-on-surface-variant uppercase tracking-wider">Duration</th>
              <th className="px-6 py-5 text-xs font-bold text-on-surface-variant uppercase tracking-wider text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {tasks.map((task, idx) => (
              <tr key={idx} className={`hover:bg-slate-50 transition-colors ${task.status === 'Failed' ? 'bg-red-50/30' : ''}`}>
                <td className={`px-6 py-5 ${task.status === 'Failed' ? 'border-l-4 border-error' : ''}`}>
                  <span className="font-mono text-xs font-semibold text-primary">{task.id}</span>
                </td>
                <td className="px-6 py-5">
                  <div className="flex items-center gap-3">
                    <task.icon className={`w-5 h-5 ${task.status === 'Failed' ? 'text-error' : task.status === 'Processing' ? 'text-blue-500' : 'text-slate-400'}`} />
                    <span className="text-sm font-medium text-on-surface">{task.file}</span>
                  </div>
                </td>
                <td className="px-6 py-5">
                  <span className="text-sm text-on-surface-variant">{task.target}</span>
                </td>
                <td className="px-6 py-5">
                  <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold ${
                    task.status === 'Success' ? 'bg-blue-50 text-primary' :
                    task.status === 'Processing' ? 'bg-amber-50 text-amber-600' :
                    task.status === 'Failed' ? 'bg-red-50 text-error' :
                    'bg-slate-100 text-slate-500'
                  }`}>
                    <span className={`w-1.5 h-1.5 rounded-full ${
                      task.status === 'Success' ? 'bg-primary' :
                      task.status === 'Processing' ? 'bg-amber-600 animate-pulse' :
                      task.status === 'Failed' ? 'bg-error' :
                      'bg-slate-400'
                    }`}></span>
                    {task.status}
                  </span>
                </td>
                <td className="px-6 py-5 text-sm text-on-surface-variant">{task.duration}</td>
                <td className="px-6 py-5 text-right">
                  <div className="flex items-center justify-end gap-2">
                    {task.status === 'Failed' ? (
                      <>
                        <button className="p-2 bg-red-100 hover:bg-red-200 rounded-lg text-error transition-all" title="View Error Log">
                          <FileText className="w-4 h-4" />
                        </button>
                        <button className="p-2 bg-blue-600 text-white rounded-lg shadow-sm hover:shadow-md transition-all" title="Retry Task">
                          <RefreshCw className="w-4 h-4" />
                        </button>
                      </>
                    ) : (
                      <>
                        <button className="p-2 hover:bg-slate-100 rounded-lg text-slate-400 hover:text-primary transition-all">
                          <Info className="w-4 h-4" />
                        </button>
                        <button className={`p-2 hover:bg-slate-100 rounded-lg text-slate-400 hover:text-primary transition-all ${task.status === 'Processing' ? 'opacity-30 cursor-not-allowed' : ''}`}>
                          {task.status === 'Pending' ? <X className="w-4 h-4" /> : <RefreshCw className="w-4 h-4" />}
                        </button>
                      </>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="px-6 py-4 bg-slate-50/30 border-t border-slate-100 flex items-center justify-between">
          <span className="text-xs font-medium text-on-surface-variant">Showing 1 to 5 of 124 tasks</span>
          <div className="flex items-center gap-1">
            <button className="p-2 hover:bg-slate-200 rounded-lg text-slate-400">
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-lg bg-primary text-white text-xs font-bold">1</button>
            <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-slate-200 text-on-surface text-xs font-medium">2</button>
            <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-slate-200 text-on-surface text-xs font-medium">3</button>
            <span className="px-2 text-slate-400">...</span>
            <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-slate-200 text-on-surface text-xs font-medium">25</button>
            <button className="p-2 hover:bg-slate-200 rounded-lg text-slate-400">
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-start justify-between">
          <div>
            <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-1">Queue Status</p>
            <h4 className="text-2xl font-extrabold font-headline">Healthy</h4>
            <p className="text-xs text-on-surface-variant mt-2">Avg. wait time &lt; 14s</p>
          </div>
          <div className="p-3 bg-blue-50 rounded-xl">
            <Gauge className="text-secondary w-6 h-6" />
          </div>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-start justify-between">
          <div>
            <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-1">Bandwidth Usage</p>
            <h4 className="text-2xl font-extrabold font-headline">2.4 GB/hr</h4>
            <div className="w-32 h-1.5 bg-slate-100 rounded-full mt-3 overflow-hidden">
              <div className="w-2/3 h-full bg-primary rounded-full"></div>
            </div>
          </div>
          <div className="p-3 bg-blue-50 rounded-xl">
            <Signal className="text-primary w-6 h-6" />
          </div>
        </div>
        <div className="bg-slate-900 p-6 rounded-2xl shadow-lg flex items-start justify-between">
          <div>
            <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-1">Auto-Retry System</p>
            <h4 className="text-2xl font-extrabold font-headline text-white">Active</h4>
            <p className="text-xs text-slate-400 mt-2">3 failed tasks resolved today</p>
          </div>
          <div className="p-3 bg-white/10 rounded-xl">
            <RotateCcw className="text-white w-6 h-6" />
          </div>
        </div>
      </div>
    </div>
  );
}
