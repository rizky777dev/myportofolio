/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // WAJIB untuk GitHub Pages: Pages cuma serve file statis, tidak ada Node
  // server untuk jalanin API Routes atau Image Optimization on-demand.
  // 'export' membuat `next build` menghasilkan HTML/CSS/JS statis murni di
  // folder out/, siap di-upload ke Pages tanpa server apapun.
  output: "export",
  images: {
    // Image Optimization API next/image butuh server -> tidak tersedia di
    // static export. unoptimized:true membuat <Image> tetap dipakai (fill,
    // lazy-load, dsb jalan normal di browser) tapi tanpa resize/convert
    // otomatis di server.
    unoptimized: true,
  },
  // Supaya setiap route menghasilkan folder/index.html (about/index.html,
  // bukan about.html) -> paling kompatibel dengan static hosting seperti
  // GitHub Pages. Untuk situs single-page ini efeknya minimal, tapi aman
  // untuk masa depan kalau nanti ditambah halaman baru.
  trailingSlash: true,
};

export default nextConfig;
