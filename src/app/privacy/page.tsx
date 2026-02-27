import Link from 'next/link';

export default function PrivacyMainPage() {
  const appList = [
    { name: "Tes Buta Warna", slug: "privacy-tesbutawarna" },
    // Tambahkan aplikasi lain di sini nanti
  ];

  return (
    <main className="max-w-4xl mx-auto py-20 px-6">
      <h1 className="text-3xl font-bold mb-8">Daftar Kebijakan Privasi</h1>
      <ul className="space-y-4">
        {appList.map((app) => (
          <li key={app.slug}>
            <Link 
              href={`/privacy/${app.slug}`}
              className="text-blue-600 hover:underline font-normal"
            >
              Kebijakan Privasi {app.name}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}