import { Building2 } from 'lucide-react';

interface LoginProps {
  onLogin: () => void;
}

export default function Login({ onLogin }: LoginProps) {
  return (
    <div className="h-full flex items-center justify-center p-6 relative min-h-screen">
      <div className="fixed inset-0 -z-10 bg-surface">
        <div 
          className="absolute inset-0 opacity-10 pointer-events-none bg-cover bg-center" 
          style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAnQnxIbEsfL9hELvCCXWT_RB0Jeo76Hq25zMpvMVPOzOI3dfOLoX_b6r9P6biXswKoh6eUHG0AL7LjZ4vbi5AoR_U1wdElNs9sKC9OiftF9JVhsXe1b6pglQR-7Kj2jz1KXNC8xMEM6bvvmFesQGDAT5TWDTrx500anhu-tmNVk8qb2cp-uR4FlzBnNxIBmbxSwQnBzJ2eTvocXOsoNVh8--inRcHfrfcRSVfqHxffaXkhvIlhaGAlpH99IoTh7RXgaLgP7I1wpec')" }}
        >
        </div>
      </div>

      <main className="w-full max-w-md">
        <div className="bg-white shadow-[0px_12px_32px_rgba(25,28,29,0.06)] rounded-xl p-10 flex flex-col items-center">
          <div className="mb-10 text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary-container rounded-xl flex items-center justify-center text-white">
                <Building2 className="w-8 h-8 fill-white/20" />
              </div>
              <span className="font-headline font-extrabold text-2xl tracking-tight text-on-surface">PropertyBot</span>
            </div>
            <h1 className="font-headline font-bold text-xl text-on-surface-variant">Sign in to your account</h1>
          </div>

          <form 
            className="w-full space-y-6"
            onSubmit={(e) => {
              e.preventDefault();
              onLogin();
            }}
          >
            <div className="space-y-1.5">
              <label className="block text-xs font-semibold uppercase tracking-wider text-on-surface-variant" htmlFor="email">Email Address</label>
              <div className="relative">
                <input 
                  className="w-full py-3 px-0 border-b border-slate-200 focus:border-primary focus:ring-0 transition-all outline-none bg-transparent placeholder:text-slate-300 font-sans text-on-surface" 
                  id="email" 
                  name="email" 
                  placeholder="admin@company.com" 
                  required 
                  type="email" 
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <div className="flex justify-between items-center">
                <label className="block text-xs font-semibold uppercase tracking-wider text-on-surface-variant" htmlFor="password">Password</label>
              </div>
              <div className="relative">
                <input 
                  className="w-full py-3 px-0 border-b border-slate-200 focus:border-primary focus:ring-0 transition-all outline-none bg-transparent placeholder:text-slate-300 font-sans text-on-surface" 
                  id="password" 
                  name="password" 
                  placeholder="••••••••" 
                  required 
                  type="password" 
                />
              </div>
            </div>

            <div className="pt-4">
              <button 
                className="w-full bg-gradient-to-br from-primary to-primary-container text-white font-headline font-bold py-4 rounded-xl shadow-lg hover:opacity-90 active:scale-[0.98] transition-all duration-200" 
                type="submit"
              >
                Sign In
              </button>
            </div>
          </form>

          <div className="mt-10 text-center">
            <p className="text-xs text-slate-400 leading-relaxed max-w-[240px] mx-auto">
              Contact system administrator for account access.
            </p>
          </div>
        </div>

        <div className="mt-8 flex justify-center items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
          <span className="text-[10px] font-medium uppercase tracking-[0.1em] text-on-surface-variant/60">PropertyBot Secure Enterprise Gateway</span>
        </div>
      </main>
    </div>
  );
}
