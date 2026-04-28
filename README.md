# Combro Fishing Website

Website profil **Combro Fishing** (pemancingan ikan) berbasis HTML, CSS, dan JavaScript vanilla.

## 📌 Tentang Proyek

Repo ini berisi website statis untuk menampilkan informasi utama Combro Fishing, seperti:

- Beranda dan profil singkat tempat pemancingan.
- Daftar harga paket harian, mingguan, bulanan, dan kompetisi.
- Halaman kontak lengkap dengan alamat, WhatsApp, email, peta lokasi, dan form pesan.

Website ini cocok untuk landing page bisnis lokal yang ingin online dengan setup sederhana tanpa framework.

## 🧩 Struktur Halaman

- `index.html` → Halaman utama/beranda.
- `harga.html` → Halaman daftar harga paket.
- `kontak.html` → Halaman kontak dan form pesan.

## 📁 Struktur Folder

```bash
.
├── index.html
├── harga.html
├── kontak.html
└── assets
    ├── css
    │   ├── style.css
    │   ├── harga.css
    │   └── kontak.css
    ├── js
    │   └── script.js
    └── img
        └── (aset gambar website)
```

## ⚙️ Fitur Utama

- Navigasi responsif dengan sidebar menu (mobile friendly).
- Animasi elemen saat scroll menggunakan `IntersectionObserver`.
- Efek navbar berubah saat halaman di-scroll.
- Tombol kontak langsung ke WhatsApp.
- Form kontak yang memvalidasi input, lalu meneruskan pesan ke WhatsApp.
- Embed Google Maps untuk menampilkan lokasi Combro Fishing.

## 🚀 Cara Menjalankan Secara Lokal

Karena ini website statis, kamu bisa menjalankannya langsung atau lewat local server.

### Opsi 1: Buka langsung file HTML

Cukup buka `index.html` di browser.

### Opsi 2 (disarankan): Jalankan local server

```bash
# dari root repo
python3 -m http.server 8080
```

Lalu buka:

- `http://localhost:8080/index.html`

## 🛠️ Teknologi

- HTML5
- CSS3
- JavaScript (Vanilla)

## 📞 Informasi Kontak (sesuai konten website)

- WhatsApp: `+62 857-1587-9337`
- Email: `combro.fishing@gmail.com`
- Lokasi: Jl. Kb. Kopi, RT.04/RW.11, Pabuaran, Kec. Cibinong, Kabupaten Bogor, Jawa Barat 16916

## 📝 Catatan

- Pastikan semua aset di folder `assets/` tetap pada path yang sama agar gambar, CSS, dan JavaScript termuat dengan benar.
- Jika ingin deploy, bisa gunakan GitHub Pages, Netlify, Vercel, atau shared hosting biasa.

---

Dibuat untuk kebutuhan profil bisnis Combro Fishing.
