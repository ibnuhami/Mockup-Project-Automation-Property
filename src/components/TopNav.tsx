import { Search, Bell, HelpCircle } from 'lucide-react';

export default function TopNav() {
  return (
    <header className="sticky top-0 w-full z-40 bg-white/80 backdrop-blur-md shadow-sm shadow-blue-900/5 flex items-center justify-between px-8 py-4">
      <div className="flex items-center gap-4 flex-1">
        <div className="relative w-full max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
          <input
            className="w-full bg-surface-container-low border-none rounded-full py-2 pl-10 pr-4 text-sm focus:ring-2 focus:ring-primary/20 transition-all placeholder:text-slate-400"
            placeholder="Search tasks or files..."
            type="text"
          />
        </div>
      </div>
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-4">
          <button className="text-slate-500 hover:text-blue-500 transition-colors opacity-80 active:opacity-100">
            <Bell className="w-5 h-5" />
          </button>
          <button className="text-slate-500 hover:text-blue-500 transition-colors opacity-80 active:opacity-100">
            <HelpCircle className="w-5 h-5" />
          </button>
        </div>
        <div className="h-6 w-px bg-outline-variant/30"></div>
        <div className="flex items-center gap-3">
          <div className="text-right">
            <p className="text-xs font-semibold text-primary">Main Cluster</p>
            <p className="text-[10px] text-slate-400 uppercase tracking-widest">Active Studio</p>
          </div>
          <img
            alt="User Workspace Avatar"
            className="w-8 h-8 rounded-lg"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCsEcq8MtHEOS7ji4cuahIyJ3hnUBzAblZ6m3jfztGRapAb5WFnFjVaZUdbAls3JUKpgHTBXx5pENxG5QExjwYMI6wMxwZ0cCczFrxQk8cTtWY5z1GWHuZfAhvkcgopPEk9Uhh5b2v8U5mwly0x_9yQ94HSwXxM6xknGED7UZRyBm1NxH_AkkvpmYvJIw3Bt2QqvNGaX3mZKImoLHUU-H_-hyIgffd1m3u16T4d7LXBfGvXK-YyoZjHHAK05F-z7CxIk_k_F54XL_0"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>
    </header>
  );
}
