import { Layers, CheckCircle, AlertCircle, TrendingUp, FileText, Image as ImageIcon, Code, Film, MoreVertical } from 'lucide-react';

export default function Dashboard() {
  const recentUploads = [
    { name: 'annual_report_v4.pdf', target: 'Corporate-Portal.com', status: 'SUCCESS', date: 'Oct 24, 2023 • 14:22', icon: FileText },
    { name: 'hero_banner_winter.png', target: 'Main-Store-CDN', status: 'PROCESSING', date: 'Oct 24, 2023 • 15:05', icon: ImageIcon },
    { name: 'deployment_manifest.json', target: 'Staging-API-01', status: 'FAILED', date: 'Oct 24, 2023 • 15:10', icon: Code },
    { name: 'marketing_reel_final.mp4', target: 'Social-Hub', status: 'SUCCESS', date: 'Oct 23, 2023 • 09:45', icon: Film },
  ];

  return (
    <div className="p-10 max-w-7xl mx-auto space-y-10">
      <section>
        <h2 className="font-headline text-3xl font-extrabold tracking-tight text-on-surface">Dashboard Overview</h2>
        <p className="text-on-surface-variant mt-1 font-body">Manage your automated deployment workflows and track performance.</p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-xl shadow-slate-200/50 flex flex-col justify-between h-40 border-l-2 border-slate-200">
          <div className="flex justify-between items-start">
            <span className="text-on-surface-variant text-sm font-medium">Total Tasks</span>
            <Layers className="text-slate-400 w-5 h-5" />
          </div>
          <div>
            <p className="font-headline text-4xl font-extrabold text-on-surface">1,284</p>
            <p className="text-xs text-slate-500 mt-1 flex items-center gap-1">
              <TrendingUp className="w-3 h-3" />
              +12% from last month
            </p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-xl shadow-slate-200/50 flex flex-col justify-between h-40 border-l-2 border-primary">
          <div className="flex justify-between items-start">
            <span className="text-on-surface-variant text-sm font-medium">Successful Uploads</span>
            <div className="w-2 h-2 bg-primary rounded-full shadow-[0_0_0_4px_rgba(0,89,187,0.2)]"></div>
          </div>
          <div>
            <p className="font-headline text-4xl font-extrabold text-primary">1,242</p>
            <p className="text-xs text-primary/70 mt-1 flex items-center gap-1">
              <CheckCircle className="w-3 h-3 fill-primary/20" />
              96.7% success rate
            </p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-xl shadow-slate-200/50 flex flex-col justify-between h-40 border-l-2 border-error">
          <div className="flex justify-between items-start">
            <span className="text-on-surface-variant text-sm font-medium">Failed Tasks</span>
            <AlertCircle className="text-error w-5 h-5" />
          </div>
          <div>
            <p className="font-headline text-4xl font-extrabold text-error">42</p>
            <p className="text-xs text-error/70 mt-1 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" />
              Needs attention
            </p>
          </div>
        </div>
      </div>

      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <h3 className="font-headline text-xl font-bold text-on-surface-variant">Recent Uploads</h3>
          <button className="text-primary text-sm font-semibold hover:underline">View All History</button>
        </div>
        <div className="bg-white rounded-xl shadow-xl shadow-slate-200/40 overflow-hidden">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50">
                <th className="px-6 py-4 text-xs font-bold uppercase tracking-widest text-slate-500">File Name</th>
                <th className="px-6 py-4 text-xs font-bold uppercase tracking-widest text-slate-500">Target Website</th>
                <th className="px-6 py-4 text-xs font-bold uppercase tracking-widest text-slate-500">Status</th>
                <th className="px-6 py-4 text-xs font-bold uppercase tracking-widest text-slate-500">Date</th>
                <th className="px-6 py-4"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {recentUploads.map((upload, idx) => (
                <tr key={idx} className="hover:bg-slate-50 transition-colors">
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-3">
                      <upload.icon className="text-slate-400 w-5 h-5" />
                      <span className="font-medium text-on-surface">{upload.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-5 text-on-surface-variant">{upload.target}</td>
                  <td className="px-6 py-5">
                    <span className={`inline-flex items-center gap-1.5 py-1 px-2.5 rounded-full text-[11px] font-bold ${
                      upload.status === 'SUCCESS' ? 'bg-blue-50 text-primary' :
                      upload.status === 'PROCESSING' ? 'bg-amber-50 text-amber-600' :
                      'bg-red-50 text-error'
                    }`}>
                      <span className={`w-1.5 h-1.5 rounded-full ${
                        upload.status === 'SUCCESS' ? 'bg-primary' :
                        upload.status === 'PROCESSING' ? 'bg-amber-600 animate-pulse' :
                        'bg-error'
                      }`}></span>
                      {upload.status}
                    </span>
                  </td>
                  <td className="px-6 py-5 text-on-surface-variant text-sm">{upload.date}</td>
                  <td className="px-6 py-5 text-right">
                    <button className="text-slate-400 hover:text-primary transition-colors">
                      <MoreVertical className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-slate-50 rounded-xl p-8 flex flex-col md:row items-center gap-8 border border-slate-200">
          <div className="flex-shrink-0 relative">
            <div className="w-32 h-32 rounded-full border-4 border-primary/20 flex items-center justify-center">
              <div className="w-24 h-24 rounded-full border-4 border-primary flex items-center justify-center">
                <span className="font-headline text-2xl font-extrabold text-primary">88%</span>
              </div>
            </div>
          </div>
          <div className="space-y-3">
            <h4 className="font-headline text-lg font-bold">Workspace Health</h4>
            <p className="text-sm text-on-surface-variant max-w-md leading-relaxed">
              Your automation cluster is performing at high efficiency. 3 background tasks are currently scheduled for tonight. 
              <span className="font-bold text-primary ml-1">No critical bottlenecks detected.</span>
            </p>
            <div className="flex gap-4 pt-2">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary"></div>
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">Node Alpha: Active</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary"></div>
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">Node Beta: Active</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-slate-900 rounded-xl p-6 text-white flex flex-col justify-between">
          <div>
            <h4 className="font-headline text-lg font-bold mb-2">Architect Tip</h4>
            <p className="text-sm text-slate-300">Set up webhook notifications to track upload failures in real-time via Slack or Email.</p>
          </div>
          <button className="w-full mt-6 py-2 border border-slate-600 rounded-lg text-xs font-bold uppercase tracking-widest hover:bg-slate-800 transition-colors">
            Configure Webhooks
          </button>
        </div>
      </div>
    </div>
  );
}
