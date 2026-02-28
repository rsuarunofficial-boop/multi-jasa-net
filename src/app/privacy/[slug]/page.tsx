import React from 'react';

// 1. Objek Data untuk menampung semua kebijakan privasi aplikasi Anda
const privacyData: Record<string, { 
  title: string; 
  date: string; 
  category: string; 
  content: React.ReactNode 
}> = {
  "privacy-tesbutawarna": {
    title: "Privacy Policy – Tes Buta Warna",
    date: "27 Februari 2026",
    category: "Aplikasi Android",
    content: (
      <div className="space-y-12">
        <section>
          <p className="font-normal text-slate-700 text-lg leading-relaxed">
            Tes Buta Warna is a color vision screening application designed for informational purposes only.
          </p>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 font-normal text-slate-600">
          <section className="space-y-4">
            <h2 className="text-xl font-bold text-slate-900">1. Information We Collect</h2>
            <p>The application does not collect personal information directly.</p>
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
              <p className="mb-3 font-medium text-slate-700">However, third-party services such as Google AdMob may collect certain information automatically, including:</p>
              <ul className="list-disc ml-6 space-y-2 text-sm">
                <li>Device information</li>
                <li>Advertising ID</li>
                <li>IP address</li>
                <li>Usage data</li>
              </ul>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-bold text-slate-900">2. Advertising</h2>
            <p>This app uses Google AdMob to display advertisements.</p>
            <p>AdMob may use cookies and similar technologies to provide personalized ads. You can learn more about how Google uses data here:</p>
            <a 
              href="https://policies.google.com/technologies/ads" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold text-sm transition-colors break-all"
            >
              Google AdMob Policy
            </a>
          </section>
        </div>

        <section className="space-y-4 font-normal text-slate-600">
          <h2 className="text-xl font-bold text-slate-900">3. Data Usage</h2>
          <p>We do not sell, trade, or share personal information with third parties.</p>
        </section>

        <section className="bg-red-50 p-8 md:p-10 rounded-3xl border border-red-100 space-y-4 shadow-inner">
          <h2 className="text-xl font-extrabold text-red-700 flex items-center gap-3">
             Medical Disclaimer
          </h2>
          <div className="font-normal text-red-900 space-y-3 leading-relaxed">
            <p className="italic">This application is not a medical diagnostic tool.</p>
            <p>The results provided are for screening purposes only.</p>
            <p className="font-medium">Please consult a qualified medical professional for proper diagnosis.</p>
          </div>
        </section>
      </div>
    )
  },
  "privacy-quickqrscanner": {
    title: "Privacy Policy – Quick QR Scanner",
    date: "28 Februari 2026",
    category: "Aplikasi Android",
    content: (
      <div className="space-y-10 font-normal text-slate-600">
        <section>
          <p className="text-lg text-slate-700 leading-relaxed">
            Quick QR Scanner respects your privacy. This Privacy Policy explains how our application handles information when you use the app.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-bold text-slate-900">1. Information We Collect</h2>
          <p>The application does not collect, store, or share personal information from users.</p>
          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 space-y-4">
            <div>
              <h3 className="font-semibold text-slate-800">Camera Permission</h3>
              <p className="text-sm">The camera is used only for scanning QR codes. Images are processed in real time and are not stored or transmitted to any server.</p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-800">Scan Results</h3>
              <p className="text-sm">Results may be stored locally on your device for scan history. This information is not shared externally.</p>
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-bold text-slate-900">2. Advertising & Third-Party</h2>
          <p>This app uses Google AdMob. They may collect device identifiers to provide ads. Learn more:</p>
          <a href="https://policies.google.com/privacy" target="_blank" className="text-blue-600 hover:underline text-sm break-all font-medium">
            https://policies.google.com/privacy
          </a>
        </section>

        <section className="bg-blue-50 p-8 rounded-3xl border border-blue-100">
          <h2 className="text-xl font-bold text-blue-900 mb-3">Security & Children's Privacy</h2>
          <p>We do not knowingly collect data from children under 13. Since most data remains on your device, you maintain control over your information.</p>
        </section>
      </div>
    )
  }
};

// 2. Fungsi Utama Page (Next.js 15+ Async Params)
export default async function PrivacyDetailPage({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}) {
  const { slug } = await params;
  const data = privacyData[slug];

  // Jika slug tidak terdaftar
  if (!data) {
    return (
      <main className="min-h-screen bg-slate-50 flex items-center justify-center p-6 text-center">
        <div className="bg-white p-12 rounded-3xl shadow-sm border border-slate-100 max-w-md">
            <h1 className="text-2xl font-bold text-slate-900 mb-2">Privacy Policy Not Found</h1>
            <p className="text-slate-600 font-normal">Halaman kebijakan privasi untuk "{slug}" belum tersedia.</p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-50 py-16 px-6 md:py-24">
      <div className="max-w-4xl mx-auto space-y-10">
        
        {/* ELEGAN CARD UNTUK HEADER */}
        <header className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-3xl font-extrabold text-slate-950 mb-1">
                {data.title}
              </h1>
              <p className="text-slate-500 font-normal text-sm">
                Effective Date: {data.date}
              </p>
            </div>
            <div className="bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-xs font-semibold self-start md:self-center">
              {data.category}
            </div>
          </div>
        </header>

        {/* ELEGAN CARD UNTUK KONTEN UTAMA */}
        <article className="bg-white p-10 md:p-12 rounded-3xl shadow-sm border border-slate-100 space-y-12">
          {data.content}

          {/* Contact Section - Selalu muncul di setiap halaman privasi */}
          <section className="bg-slate-950 p-10 rounded-3xl text-slate-200 mt-12">
            <h2 className="text-xl font-bold text-white mb-5">Contact Us</h2>
            <p className="mb-1 font-normal text-slate-300">If you have any questions, contact us at:</p>
            <a href="mailto:azwar.pnl@gmail.com" className="text-blue-400 font-medium hover:underline text-lg">
                azwar.pnl@gmail.com
            </a>
          </section>
        </article>

        {/* Footer / Branding */}
        <footer className="text-center py-8 text-sm text-slate-400 font-normal">
          <p>© 2026 Multi Jasa Net. Seluruh hak dilindungi.</p>
          <p className="text-xs mt-1">Lhokseumawe, Aceh Utara</p>
        </footer>
      </div>
    </main>
  );
}