import { CloudUpload, Bolt, Rocket } from 'lucide-react';

export default function NewUpload() {
  const targets = [
    { name: 'YouTube', icon: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAIJSMimg0j7m9Rfk4jmK7_S9Qpjii2cr7AlkX4NiRI9KYfEb4PPEUZXBe1V0DPjTh_hn-myjiSSyn0t70B3WPQg1OT9p7wg8u1ZHN65TmIQdo-56t_G751NkY18nJM8VRo-3KPKHGNSNZt2Vhz3doXWRq09FggP7mefeYyTxMO_KpJyABscjv9AfGSVHtvMA5HXJZgNa5MF8ezGPiPPbX3bYxkvEhZYQ6hdfXuoSvQ1EQlpnMqWKQpDRNQk5hShY5VYXKHBCC5UWU', checked: true },
    { name: 'TikTok', icon: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDvxgkE8ljT-PMDXAxWH3FdoWUabYrx9ckjr1kG8nkFQu2f8EiiR07Fb6GayrF5auId-Wa13sr_5OXBrJ-t90ITAOx3ITOJpXgy2cCO5VdbcbaGQzcozxLEtFMAvE69vVd9VRFWmC4-rlJ99Dxq6uf2c3tv_gMRQXkjQJOqFWKTMyybVIP9Nq7GIwZn5oRXgBwIYmJ5DWRsA8I3xUU3djkahHqzbkIpCqtyb4SYbUQutS3-hZnESHDndBMY_uyaDs4xeNRzMnMfAVc', checked: false },
    { name: 'Instagram', icon: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAcQG_ahKv5VTe-LRg6mPEY8q9AdXYXh48jyy1fPJFymYoQBgG1lXUju15MOfiYU3EHuRH934dAi7ZOs3zx7HCi7HbwiKCqANRQ_rTdSuKzHfSbwmoOE5hRjFzY0txBcpJTaJIZIeKMT8JOCaKEcNVuKo_G_Pgi77Bf6vvo_54UwnpFFjOeaay_jPlpDkKl5rNsTObXEIX7-jCsiglEmjxAL7feduoKIMQOAJD1hMYnYoAQ6DNDBQCbgOC29kqbrqA-fXFG6NEZ6YQ', checked: true },
    { name: 'LinkedIn', icon: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCb_BME7ZE40kz6KPGgI-ANcAB_mh2cnXq12cFe_jQlFsSNIC7PeyYfNSuU5GBcxkl8JdPEbQf5Ay9mz78_9K7acyseehrbujcZV1atHoIRIBcM1Ur2nsUhja4fpdDSVX1RYKXM3PstBS125kGLm5yuOjrJqIVE9fYtBLMQXOPxWnA6FoE5Pk1fYrmxGkXHRr2ycTeaX9NXzFsh6DRMOsZzRMjUGV30jQGz8Ys4Cw7-GFTKPZ3rUk_eo83amnj3zP_9ioyl_lTjLuo', checked: false },
  ];

  return (
    <div className="p-12 bg-slate-50 min-h-[calc(100vh-72px)]">
      <div className="max-w-5xl mx-auto space-y-12">
        <div className="space-y-2">
          <h1 className="font-headline text-4xl font-extrabold tracking-tight text-on-surface">New Auto-Upload</h1>
          <p className="text-on-surface-variant font-body">Initialize a new multi-channel content distribution workflow.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white h-96 rounded-xl flex flex-col items-center justify-center gap-6 p-8 group cursor-pointer border-2 border-dashed border-slate-200 hover:border-primary transition-all duration-300">
              <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(164,193,255,0.4)]">
                <CloudUpload className="text-primary w-10 h-10" />
              </div>
              <div className="text-center space-y-2">
                <p className="font-headline text-xl font-bold text-on-surface">Click or drag file to upload</p>
                <p className="text-on-surface-variant text-sm max-w-xs">Supports .MP4, .MOV, and .WEBM formats. Max file size: 2GB per upload.</p>
              </div>
              <button className="px-6 py-3 bg-slate-100 rounded-full text-primary font-semibold text-sm group-hover:bg-primary group-hover:text-white transition-all">
                Browse Local Files
              </button>
            </div>
          </div>

          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="font-headline text-lg font-bold text-on-surface-variant flex items-center gap-2">
                <Bolt className="text-secondary w-5 h-5" />
                Select Target Websites
              </h2>
              <div className="grid grid-cols-2 gap-4">
                {targets.map((target, idx) => (
                  <div key={idx} className="bg-white p-4 rounded-xl border-l-2 border-transparent hover:border-primary transition-all flex flex-col gap-4 relative shadow-sm">
                    <input
                      defaultChecked={target.checked}
                      className="absolute top-4 right-4 rounded text-primary focus:ring-primary h-5 w-5 border-slate-200"
                      type="checkbox"
                    />
                    <img
                      alt={target.name}
                      className="w-10 h-10 rounded-lg object-cover"
                      src={target.icon}
                      referrerPolicy="no-referrer"
                    />
                    <span className="font-sans text-sm font-bold">{target.name}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-blue-50 p-6 rounded-xl space-y-4">
              <p className="text-xs text-blue-700 font-medium uppercase tracking-widest">Summary</p>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-on-surface-variant">Selected Channels</span>
                  <span className="font-bold">2</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-on-surface-variant">Estimated Time</span>
                  <span className="font-bold">4.2 mins</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-end pt-8 border-t border-slate-200">
          <button className="bg-gradient-to-br from-primary to-primary-container text-white px-10 py-4 rounded-xl font-headline font-bold text-lg shadow-lg hover:shadow-primary/20 transition-all active:scale-95 flex items-center gap-3">
            Start Auto-Upload
            <Rocket className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
