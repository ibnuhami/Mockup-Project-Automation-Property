import { LayoutDashboard, CloudUpload, History, Plus } from 'lucide-react';

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function Sidebar({ activeTab, setActiveTab }: SidebarProps) {
  return (
    <aside className="bg-slate-900 h-screen w-64 fixed left-0 top-0 overflow-y-auto flex flex-col p-6 justify-between shadow-xl z-50">
      <div className="space-y-8">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-primary-container flex items-center justify-center">
            <CloudUpload className="text-white w-5 h-5" />
          </div>
          <div>
            <h1 className="text-2xl font-bold tracking-tighter text-white">
              <span className="tracking-[-1.2px]">PropertyBot</span>
            </h1>
            <p className="font-headline text-xs font-medium tracking-wide text-slate-400">Automation Studio</p>
          </div>
        </div>
        <nav className="space-y-2">
          <button
            onClick={() => setActiveTab('dashboard')}
            className={`w-full px-4 py-2 flex items-center gap-3 font-headline text-sm font-medium tracking-wide transition-all duration-200 rounded-lg ${
              activeTab === 'dashboard' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-white hover:bg-slate-800'
            }`}
          >
            <LayoutDashboard className="w-5 h-5" />
            Dashboard
          </button>
          <button
            onClick={() => setActiveTab('new-upload')}
            className={`w-full px-4 py-2 flex items-center gap-3 font-headline text-sm font-medium tracking-wide transition-all duration-200 rounded-lg ${
              activeTab === 'new-upload' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-white hover:bg-slate-800'
            }`}
          >
            <CloudUpload className="w-5 h-5" />
            New Upload
          </button>
          <button
            onClick={() => setActiveTab('task-history')}
            className={`w-full px-4 py-2 flex items-center gap-3 font-headline text-sm font-medium tracking-wide transition-all duration-200 rounded-lg ${
              activeTab === 'task-history' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-white hover:bg-slate-800'
            }`}
          >
            <History className="w-5 h-5" />
            Task History
          </button>
        </nav>
      </div>
      <div className="space-y-4">
        <button className="w-full bg-gradient-to-br from-primary to-primary-container text-white py-3 px-4 rounded-lg font-semibold text-sm shadow-lg shadow-primary/20 flex items-center justify-center gap-2 transition-transform active:scale-95">
          <Plus className="w-4 h-4" />
          New Automation
        </button>
        <div className="flex items-center gap-3 p-2 bg-slate-800/50 rounded-xl">
          <img
            alt="User Profile"
            className="w-10 h-10 rounded-full object-cover grayscale opacity-80"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAsT-1a3_LJdvbhtrhDBm2IgY8OJT0HPj1C7ceO0QUL_VcSLpHgk0Rny5CletFvQfWF_HPlEtL69VJLuBshotrEfXiaCwMrZS_S0VDEK_y7vLKdnBFBHFbsN6c4i2oh2k_6Xo8G-QrHYznK7iFR3jlypgTFhWgBlTdf34-FdHfAiyOax-Md18zAB1TSHCWww56FHFdQq6OJnjjw6DXHGo8pQMTe92XGwXScKBJ8oySosp2BfIlP6BdRuWIgbnMpT-0iAE5CTJfKO6o"
            referrerPolicy="no-referrer"
          />
          <div className="overflow-hidden text-left">
            <p className="text-white text-sm font-medium truncate">Alex Architect</p>
            <p className="text-slate-500 text-xs truncate">Pro Workspace</p>
          </div>
        </div>
      </div>
    </aside>
  );
}
