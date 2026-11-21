# Landing Page Kafe

Landing page satu halaman untuk kafe, dengan menu unggulan, cerita brand, testimoni, dan form kontak yang terhubung ke WhatsApp. Dibuat dengan HTML, CSS, dan JavaScript murni, tanpa framework dan tanpa proses build.

> **Catatan:** "Kopi Senja" beserta menu, harga, testimoni, alamat, dan nomor kontaknya adalah **data fiktif** untuk contoh tampilan. Ganti dengan data kafe sebenarnya sebelum dipakai.

## Tampilan

<!-- Tambahkan screenshot setelah diunggah, contoh:
![Halaman beranda](docs/screenshot-home.png)
-->

## Isi halaman

| Bagian | Isi |
|---|---|
| Hero | Judul utama, ajakan bertindak, dan foto suasana kafe |
| Keunggulan | Tiga nilai utama kafe dalam bentuk kartu |
| Menu | Enam menu favorit lengkap dengan foto dan harga |
| Tentang | Cerita kafe dan foto interior |
| Testimoni | Tiga ulasan pelanggan |
| Kontak | Form pesan ke WhatsApp, alamat, jam buka, dan tautan chat |
| Footer | Media sosial dan tautan kembali ke atas |

## Fitur

- Desain responsif dengan menu navigasi untuk layar kecil
- Animasi muncul saat halaman di-scroll, dengan tampilan cadangan bila JavaScript mati
- Form kontak yang menyiapkan pesan ke WhatsApp
- Gambar menu dimuat bertahap (lazy loading)
- Aksesibilitas dasar: label ARIA, teks alternatif gambar, dan pengumuman status form
- Tag SEO dan Open Graph
- Font Playfair Display dan Inter dari Google Fonts

## Struktur folder

```
landing-page-kafe/
├── index.html
├── assets/
│   ├── css/style.css     Semua gaya tampilan
│   ├── js/main.js        Menu mobile, animasi scroll, form WhatsApp
│   └── img/              hero.jpg, about.jpg, dan foto menu (menu-*.jpg)
├── .gitignore
└── README.md
```

## Cara menjalankan

Buka `index.html` langsung di browser, atau jalankan server lokal:

```
python -m http.server 8000
```

Lalu buka http://localhost:8000

Koneksi internet dibutuhkan untuk memuat font dari Google Fonts.

## Cara menyesuaikan

Cari komentar `GANTI` di `index.html`. Komentar itu menandai bagian yang harus diisi dengan data sebenarnya:

- **Domain**: `canonical`, `og:url`, dan `og:image`
- **Menu dan harga**: nama, deskripsi, dan harga di bagian Menu
- **Alamat dan jam buka**: di bagian Kontak
- **Media sosial**: tautan Instagram, TikTok, dan Facebook di footer
- **Nama kafe**: judul halaman, logo, dan teks hak cipta
- **Testimoni**: pakai ulasan pelanggan asli yang sudah memberi izin

### Nomor WhatsApp

Ubah nomor di `index.html` pada tautan `https://wa.me/...`, dan cek juga `assets/js/main.js` bila nomor dipakai di sana untuk form kontak. Gunakan format internasional tanpa tanda plus, contoh `6281234567890`.

### Foto

Ganti file di `assets/img/` dengan foto kafemu, dengan nama yang sama: `hero.jpg`, `about.jpg`, `menu-kopi.jpg`, `menu-latte.jpg`, `menu-manual.jpg`, `menu-matcha.jpg`, `menu-pastry.jpg`, dan `menu-cake.jpg`. Foto menu berukuran 800 x 600 piksel paling pas.

## Deploy gratis

**GitHub Pages**
1. Buka Settings pada repo ini, lalu pilih Pages.
2. Pada Source, pilih branch `main` dan folder `/ (root)`, lalu Save.
3. Situs online di `https://USERNAME.github.io/landing-page-kafe/`.

**Netlify**: seret folder proyek ke https://app.netlify.com/drop

## Teknologi

HTML5 · CSS3 · JavaScript (ES6)

## Lisensi

Belum ditentukan. Tambahkan file `LICENSE` bila template ini ingin dibagikan untuk dipakai orang lain.
