import Image from 'next/image';
import { Wifi, ShieldCheck, Wrench, Info, CheckCircle2 } from 'lucide-react';
import React from 'react';
import Testimonials from '../components/Testimonials'; // Pastikan path ini sesuai

// 1. Definisi Tipe Data (Interface) untuk Props
interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  desc: string;
}

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      
      {/* 1. HERO SECTION - LCP Optimized */}
      <section className="relative bg-slate-900 text-white py-20 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
              Solusi IT & Jaringan Profesional di <span className="text-blue-500">Lhokseumawe</span>
            </h1>
            <p className="text-lg text-slate-300 font-normal">
              Multi Jasa Net hadir memberikan layanan instalasi WiFi, CCTV, dan maintenance perangkat IT dengan standar kualitas tinggi untuk Aceh Utara dan sekitarnya.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://wa.me/6282167500469" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-bold transition-all"
              >
                Konsultasi Gratis
              </a>
            </div>
          </div>
          <div className="flex-1 relative w-full h-[300px] md:h-[400px]">
            {/* Prioritas muat gambar untuk skor LCP 100 */}
            <Image 
              src="/images/foto-teknisi.webp" 
              alt="Teknisi Multi Jasa Net sedang melakukan instalasi"
              fill
              priority
              className="object-cover rounded-2xl border-4 border-slate-800"
            />
          </div>
        </div>
      </section>

      {/* 2. LAYANAN (SERVICES) SECTION */}
      <section className="py-24 px-6 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Layanan Unggulan Kami</h2>
          <div className="h-1 w-20 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ServiceCard 
            icon={<Wifi className="w-8 h-8 text-blue-600" />}
            title="Instalasi WiFi & Jaringan"
            desc="Pemasangan Access Point, Router, dan Fiber Optic untuk rumah, cafe, maupun kantor."
          />
          <ServiceCard 
            icon={<ShieldCheck className="w-8 h-8 text-blue-600" />}
            title="CCTV Online"
            desc="Sistem keamanan kamera yang dapat dipantau langsung dari smartphone Anda di mana saja."
          />
          <ServiceCard 
            icon={<Wrench className="w-8 h-8 text-blue-600" />}
            title="Maintenance & Support"
            desc="Perawatan berkala hardware dan software untuk memastikan bisnis tetap berjalan lancar."
          />
        </div>
      </section>

      {/* 3. TESTIMONIAL SECTION */}
      <Testimonials />

      {/* 4. TENTANG KAMI (ABOUT US) SECTION */}
      <section className="bg-slate-50 py-24 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16 items-center">
          <div className="flex-1">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
              <Info className="text-blue-600" /> Tentang Multi Jasa Net
            </h2>
            <div className="space-y-4 text-slate-700 leading-relaxed text-lg font-normal">
              <p>
                Multi Jasa Net lahir dari semangat untuk menjawab kebutuhan masyarakat <strong>Lhokseumawe dan Aceh Utara</strong> akan layanan IT yang kredibel.
              </p>
              <p>
                Kami bukan sekadar penyedia jasa teknis; kami adalah mitra digital Anda yang berkomitmen memastikan setiap koneksi berjalan tanpa hambatan dengan transparansi biaya dan pelayanan responsif.
              </p>
              <ul className="space-y-2 pt-4">
                {['Rating Bintang 5 di Google', 'Teknisi Berpengalaman', 'Layanan 24 Jam', 'Harga Kompetitif'].map((item) => (
                  <li key={item} className="flex items-center gap-2 font-normal text-slate-800">
                    <CheckCircle2 className="text-green-500 w-5 h-5" /> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="flex-1 bg-white p-8 rounded-2xl shadow-xl border border-slate-100 w-full text-center">
             <h3 className="text-xl font-bold mb-4">Lokasi Workshop</h3>
             <p className="text-slate-600 mb-6 font-normal">Jl. Line Pipa, Alue Lim, Kec. Blang Mangat, Kota Lhokseumawe</p>
             <div className="aspect-video bg-slate-200 rounded-lg overflow-hidden flex items-center justify-center">
                {/* Ganti link src di bawah dengan link embed dari Google Maps Anda */}
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3973.5532585483244!2d97.1515!3d5.1411!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNcKwMDgnMjguMCJOIDk3wrAwOScwNS40IkU!5e0!3m2!1sid!2sid!4v1700000000000!5m2!1sid!2sid"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
             </div>
          </div>
        </div>
      </section>

      {/* 5. FOOTER */}
      <footer className="py-12 border-t border-slate-100 text-center">
        <p className="text-slate-500 font-normal">© 2026 Multi Jasa Net Lhokseumawe. Semua hak dilindungi.</p>
      </footer>

    </main>
  );
}

// Sub-komponen dengan Type Safety
function ServiceCard({ icon, title, desc }: ServiceCardProps) {
  return (
    <div className="p-8 bg-white border border-slate-100 rounded-2xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
      <div className="mb-6">{icon}</div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-slate-600 leading-relaxed font-normal">{desc}</p>
    </div>
  );
}