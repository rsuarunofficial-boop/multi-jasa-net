import React from 'react';
import { ShieldCheck, Mail, Activity, ArrowLeft, Database, Utensils, Camera } from 'lucide-react';
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
            Multi Jasa Net built the Speed Test WiFi app as a free app.
          </p>
        </section>
        <section className="space-y-4">
          <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-blue-600" /> Information Collection and Use
          </h2>
          <p>The app does use third-party services that may collect information used to identify you.</p>
          <ul className="list-disc ml-6 space-y-2 text-blue-600 text-sm">
            <li><a href="https://www.google.com/policies/privacy/" target="_blank" className="hover:underline">Google Play Services</a></li>
            <li><a href="https://support.google.com/admob/answer/6128543?hl=en" target="_blank" className="hover:underline">AdMob</a></li>
          </ul>
        </section>
      </div>
    )
  },
  // ENTRI BARU UNTUK RESEP MASAKAN INDONESIA
  "privacy-resepmasakanindonesia": {
    title: "Kebijakan Privasi – Resep Masakan Indonesia",
    date: "04 Maret 2026",
    content: (
      <div className="space-y-10 font-normal text-slate-600">
        <section>
          <p className="text-lg text-slate-700 leading-relaxed">
            Selamat datang di aplikasi Resep Masakan Indonesia. Kami sangat menghargai privasi Anda.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-blue-600" /> 1. Informasi yang Kami Kumpulkan
          </h2>
          <p>Aplikasi ini dirancang tanpa mengharuskan pendaftaran akun. Namun, data teknis berikut mungkin dikumpulkan secara otomatis:</p>
          <ul className="list-disc ml-6 space-y-2 text-sm">
            <li><strong>Data Penggunaan:</strong> Informasi resep yang paling sering dilihat.</li>
            <li><strong>Data Perangkat:</strong> Model perangkat dan versi sistem operasi.</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
            <Database className="w-5 h-5 text-blue-600" /> 2. Layanan Pihak Ketiga
          </h2>
          <p>Kami menggunakan layanan berikut untuk fungsionalitas aplikasi:</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-5 border border-slate-100 rounded-2xl">
              <span className="text-slate-900 font-bold text-sm block mb-1">Supabase</span>
              <p className="text-xs">Database untuk menyajikan data resep secara dinamis.</p>
            </div>
            <div className="p-5 border border-slate-100 rounded-2xl">
              <span className="text-slate-900 font-bold text-sm block mb-1">Google AdMob</span>
              <p className="text-xs">Menampilkan iklan relevan menggunakan pengidentifikasi iklan perangkat.</p>
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
            <Activity className="w-5 h-5 text-blue-600" /> 3. Izin Aplikasi (Permissions)
          </h2>
          <div className="space-y-2 text-sm">
            <p><strong>INTERNET:</strong> Diperlukan untuk mengambil data resep dari database Supabase.</p>
            <p><strong>ACCESS_NETWORK_STATE:</strong> Diperlukan untuk mengecek koneksi internet perangkat.</p>
          </div>
        </section>

        <section className="bg-slate-950 p-10 rounded-3xl text-slate-200">
          <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <Mail className="w-5 h-5 text-blue-400" /> 4. Hubungi Kami
          </h2>
          <p className="text-blue-400 font-medium text-lg">azwar.pnl@gmail.com</p>
          <p className="text-slate-400 text-sm mt-1 font-normal">multi-jasa-net.vercel.app</p>
        </section>
      </div>
    )
  },
  // ENTRI BARU UNTUK BUBBLE LEVEL PRO
  "privacy-bubble-level-pro": {
    title: "Privacy Policy – Bubble Level Pro",
    date: "08 Maret 2026",
    content: (
      <div className="space-y-8 font-normal text-slate-600">
        <p className="text-lg text-slate-700 leading-relaxed">
          Bubble Level Pro ("we", "our", or "us") respects your privacy. This Privacy Policy explains how our mobile application handles information when you use the app.
        </p>

        <section className="space-y-4">
          <h2 className="text-xl font-bold text-slate-900">1. Information We Do Not Collect</h2>
          <p>
            Bubble Level Pro does <strong>not collect, store, or share any personal information</strong> from users.
          </p>
          <p>
            We do not require users to create accounts, log in, or provide personal data such as name, email address, phone number, or location.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
            <Activity className="w-5 h-5 text-blue-600" /> 2. Sensor Data
          </h2>
          <p>
            The application uses the device <strong>accelerometer sensor</strong> to detect device tilt in order to provide the bubble level functionality.
          </p>
          <p>This sensor data:</p>
          <ul className="list-disc ml-6 space-y-2 text-sm">
            <li>is processed <strong>locally on your device</strong></li>
            <li>is <strong>not stored</strong></li>
            <li>is <strong>not transmitted to any server</strong></li>
            <li>is used only while the app is running</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
            <Camera className="w-5 h-5 text-blue-600" /> 3. Camera Usage (AR Feature)
          </h2>
          <p>
            Bubble Level Pro may use your device camera to enable an <strong>Augmented Reality (AR) leveling feature</strong>.
          </p>
          <p>
            The camera is used only to display the real-world surface through the device camera so that the bubble level measurement can be overlaid on the screen.
          </p>
          <p>Important information about camera usage:</p>
          <ul className="list-disc ml-6 space-y-2 text-sm">
            <li>The camera is used <strong>only while the AR feature is active</strong>.</li>
            <li>The app <strong>does not record photos or videos</strong>.</li>
            <li>The app <strong>does not store camera images</strong>.</li>
            <li>The app <strong>does not transmit camera data to any server</strong>.</li>
            <li>All camera processing occurs <strong>locally on your device</strong>.</li>
          </ul>
          <p>
            The camera permission is required solely to provide the AR measurement experience.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-bold text-slate-900">4. Advertising</h2>
          <p>Bubble Level Pro uses <strong>Google AdMob</strong> to display advertisements.</p>
          <p>AdMob may collect certain information automatically in order to provide personalized or non-personalized ads, including:</p>
          <ul className="list-disc ml-6 space-y-2 text-sm">
            <li>Device information</li>
            <li>Advertising identifiers</li>
            <li>Interaction with advertisements</li>
          </ul>
          <p>This data collection is handled directly by Google.</p>
          <p>
            You can learn more about how Google handles data here: <a href="https://policies.google.com/privacy" target="_blank" className="text-blue-600 hover:underline">https://policies.google.com/privacy</a>
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-bold text-slate-900">5. Third-Party Services</h2>
          <p>The app may use third-party services that may collect information used to identify you.</p>
          <p>Third-party services used:</p>
          <ul className="list-disc ml-6 space-y-2 text-sm">
            <li>Google AdMob (advertising)</li>
          </ul>
          <p>These services have their own privacy policies and data practices.</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-bold text-slate-900">6. Children's Privacy</h2>
          <p>Bubble Level Pro is <strong>not directed to children under the age of 13</strong>.</p>
          <p>We do not knowingly collect personal information from children.</p>
          <p>If you believe that a child has provided personal information through the app, please contact us and we will promptly remove such information.</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-blue-600" /> 7. Data Security
          </h2>
          <p>Since Bubble Level Pro does not collect or store personal information, there is no user data stored on our servers.</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-bold text-slate-900">8. Changes to This Privacy Policy</h2>
          <p>We may update this Privacy Policy from time to time.</p>
          <p>Any changes will be posted on this page with an updated revision date.</p>
          <p>Users are advised to review this Privacy Policy periodically.</p>
        </section>

        <section className="bg-slate-950 p-10 rounded-3xl text-slate-200">
          <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <Mail className="w-5 h-5 text-blue-400" /> 9. Contact Us
          </h2>
          <p>If you have any questions about this Privacy Policy, you can contact us:</p>
          <p className="text-blue-400 font-medium text-lg mt-2">azwar.pnl@gmail.com</p>
        </section>
      </div>
    )
  }
};

// 1.5. Generate Static Params (Optimasi SSG)
// Karena data privacyData statis, kita generate params-nya saat build time.
export async function generateStaticParams() {
  return Object.keys(privacyData).map((slug) => ({
    slug: slug,
  }));
}

// 2. FUNGSI UTAMA (EXPORT DEFAULT)
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
          <p className="text-slate-500 font-normal text-sm italic">Terakhir diperbarui: {data.date}</p>
        </header>

        {/* CARD CONTENT */}
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