import { Star, Quote } from 'lucide-react';
import React from 'react';

// Definisi tipe data untuk props agar aman secara TypeScript
interface TestimonialData {
  name: string;
  role: string;
  content: string;
}

export default function Testimonials() {
  // Data testimoni yang mencerminkan kualitas layanan Multi Jasa Net
  const reviews: TestimonialData[] = [
    {
      name: "Pelanggan Lhokseumawe",
      role: "Rumah Tangga",
      content: "Pemasangan WiFi sangat rapi dan sinyal stabil di seluruh ruangan. Sangat merekomendasikan Multi Jasa Net untuk warga Aceh Utara."
    },
    {
      name: "Pemilik Cafe",
      role: "Bisnis Lokal",
      content: "Layanan IT support yang sangat responsif. Masalah jaringan di cafe langsung tuntas dalam waktu singkat. Rating 5 bintang layak diberikan!"
    },
    {
      name: "Admin Perkantoran",
      role: "Instansi",
      content: "Teknisi berpengalaman dan profesional. CCTV online bisa dipantau dari HP dengan jernih. Membantu sekali untuk keamanan kantor."
    }
  ];

  return (
    <section className="py-24 bg-white px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header Section dengan integrasi Rating 5.0 */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">
            Apa Kata Pelanggan Kami
          </h2>
          <div className="flex justify-center items-center gap-1 mb-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
          <p className="text-slate-500 font-normal">
            Dipercaya dengan rating sempurna 5.0 oleh pelanggan kami
          </p>
        </div>

        {/* Grid Testimonial */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div 
              key={index} 
              className="p-8 rounded-2xl bg-slate-50 border border-slate-100 relative transition-all hover:shadow-md"
            >
              <Quote className="absolute top-4 right-4 text-slate-200 w-8 h-8" />
              
              {/* Teks testimoni menggunakan font-normal agar minimalis */}
              <p className="text-slate-700 leading-relaxed mb-6 font-normal italic">
                "{review.content}"
              </p>
              
              <div>
                <p className="font-bold text-slate-900">{review.name}</p>
                <p className="text-sm text-slate-500 font-normal">{review.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}