import Link from 'next/link';
import { ShieldCheck, ChevronRight } from 'lucide-react';

export default function PrivacyMainPage() {
  const appList = [
    { 
      name: "Tes Buta Warna", 
      slug: "privacy-tesbutawarna", 
      desc: "Aplikasi screening penglihatan warna untuk tujuan informasional." 
    },
    { 
      name: "Quick QR Scanner", 
      slug: "privacy-quickqrscanner", 
      desc: "Pemindai kode QR dan barcode yang cepat dan aman." 
    },
    { 
      name: "RT RW Net SpeedTest", 
      slug: "privacy-rtrwnet-speedtest", 
      desc: "Alat uji kecepatan jaringan internet untuk rumah dan kantor." 
    },
  ];

  return (
    <main className="min-h-screen bg-slate-50 py-16 px-6 md:py-24">
      <div className="max-w-4xl mx-auto space-y-10">
        
        {/* HEADER SECTION */}
        <header className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100">
          <div className="flex items-center gap-4 mb-2">
            <ShieldCheck className="text-blue-600 w-8 h-8" />
            <h1 className="text-3xl font-extrabold text-slate-950">
              Pusat Privasi
            </h1>
          </div>
          <p className="text-slate-500 font-normal">
            Daftar kebijakan privasi untuk aplikasi resmi yang dikembangkan oleh Multi Jasa Net.
          </p>
        </header>

        {/* LIST SECTION DENGAN CARD PUTIH */}
        <div className="grid grid-cols-1 gap-4">
          {appList.map((app) => (
            <Link 
              key={app.slug} 
              href={`/privacy/${app.slug}`}
              className="group"
            >
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex items-center justify-between transition-all hover:border-blue-200 hover:shadow-md">
                <div className="space-y-1">
                  <h2 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                    Kebijakan Privasi {app.name}
                  </h2>
                  <p className="text-slate-500 font-normal text-sm">
                    {app.desc}
                  </p>
                </div>
                <ChevronRight className="text-slate-300 group-hover:text-blue-600 transition-all group-hover:translate-x-1" />
              </div>
            </Link>
          ))}
        </div>

        {/* FOOTER */}
        <footer className="text-center py-8 text-sm text-slate-400 font-normal">
          <p>© 2026 Multi Jasa Net. Seluruh hak dilindungi.</p>
        </footer>
      </div>
    </main>
  );
}