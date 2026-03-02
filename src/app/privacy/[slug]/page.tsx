import React from 'react';
import { ShieldCheck, Mail, Activity, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

// 1. Objek Data untuk menampung semua konten kebijakan privasi
const privacyData: Record<string, { title: string; date: string; content: React.ReactNode }> = {
  "privacy-tesbutawarna": {
    title: "Privacy Policy – Tes Buta Warna",
    date: "27 Februari 2026",
    content: (
      <div className="space-y-8 font-normal text-slate-600">
        <p className="text-lg text-slate-700 leading-relaxed">
          Tes Buta Warna is a color vision screening application designed for informational purposes only.
        </p>
        <section className="space-y-4">
          <h2 className="text-xl font-bold text-slate-900">1. Information We Collect</h2>
          <p>The application does not collect personal information directly.</p>
        </section>
        <section className="bg-red-50 p-8 rounded-3xl border border-red-100">
          <h2 className="text-xl font-bold text-red-700 mb-3">Medical Disclaimer</h2>
          <p className="italic text-red-900">This application is not a medical diagnostic tool. Please consult a professional.</p>
        </section>
      </div>
    )
  },
  "privacy-rtrwnet-speedtest": {
    title: "Privacy Policy – Speed Test WiFi",
    date: "02 Maret 2026",
    content: (
      <div className="space-y-10 font-normal text-slate-600">
        <section className="space-y-4">
          <p className="text-lg text-slate-700 leading-relaxed">
            Multi Jasa Net built the Speed Test WiFi app as a free app. This SERVICE is provided at no cost and is intended for use as is.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-blue-600" /> Information Collection and Use
          </h2>
          <p>The app does use third-party services that may collect information used to identify you.</p>
          <ul className="list-disc ml-6 space-y-2 text-blue-600">
            <li><a href="https://www.google.com/policies/privacy/" target="_blank" className="hover:underline">Google Play Services</a></li>
            <li><a href="https://support.google.com/admob/answer/6128543?hl=id" target="_blank" className="hover:underline">AdMob</a></li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
            <Activity className="w-5 h-5 text-blue-600" /> Permissions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
              <span className="text-blue-600 font-bold text-xs block mb-1">INTERNET</span>
              <p className="text-sm">Required to perform speed tests and display ads.</p>
            </div>
            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
              <span className="text-blue-600 font-bold text-xs block mb-1">ACCESS_NETWORK_STATE</span>
              <p className="text-sm">Required to check connectivity before tests.</p>
            </div>
          </div>
        </section>

        <section className="bg-slate-950 p-10 rounded-3xl text-slate-200">
          <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <Mail className="w-5 h-5 text-blue-400" /> Contact Us
          </h2>
          <p className="text-blue-400 font-medium text-lg">azwar.pnl@gmail.com</p>
        </section>
      </div>
    )
  }
};

// 2. FUNGSI UTAMA (Harus ada EXPORT DEFAULT)
export default async function PrivacyDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const data = privacyData[slug];

  if (!data) {
    return (
      <main className="min-h-screen bg-slate-50 flex items-center justify-center p-6 text-center">
        <div className="bg-white p-12 rounded-3xl shadow-sm border border-slate-100 max-w-md">
          <h1 className="text-2xl font-bold text-slate-900 mb-2">Not Found</h1>
          <p className="text-slate-600 font-normal">Kebijakan privasi "{slug}" belum tersedia.</p>
          <Link href="/privacy" className="mt-6 inline-block text-blue-600 hover:underline">Kembali</Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-50 py-16 px-6 md:py-24">
      <div className="max-w-4xl mx-auto space-y-10">
        <Link href="/privacy" className="inline-flex items-center gap-2 text-slate-500 hover:text-blue-600 transition-colors">
          <ArrowLeft className="w-4 h-4" /> Kembali ke Daftar
        </Link>

        {/* CARD HEADER */}
        <header className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100">
          <h1 className="text-3xl font-extrabold text-slate-950 mb-2">{data.title}</h1>
          <p className="text-slate-500 font-normal text-sm italic">Last updated: {data.date}</p>
        </header>

        {/* CARD CONTENT UTAMA */}
        <article className="bg-white p-10 md:p-12 rounded-3xl shadow-sm border border-slate-100">
          {data.content}
        </article>

        <footer className="text-center py-8 text-sm text-slate-400 font-normal">
          <p>© 2026 Multi Jasa Net. Seluruh hak dilindungi.</p>
        </footer>
      </div>
    </main>
  );
}