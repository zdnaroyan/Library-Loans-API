## Deskripsi & Tujuan Proyek
Proyek ini bertujuan untuk menyediakan layanan backend berbasis RESTful API dalam mengelola data peminjaman buku perpustakaan oleh anggota, mencakup operasi CRUD lengkap serta fitur pemfilteran data berdasarkan status peminjaman.

---

## Struktur Data / Skema Database (`loans`)
| Kolom | Tipe Data | Keterangan |
| :--- | :--- | :--- |
| `id` | `uuid` (Primary Key) | ID unik data peminjaman |
| `book_title` | `text` | Judul buku yang dipinjam |
| `borrower_name` | `text` | Nama anggota peminjam |
| `borrow_date` | `date` | Tanggal peminjaman |
| `return_date` | `date` | Tanggal pengembalian |
| `status` | `text` | Status (contoh: 'Dipinjam', 'Kembali', 'Terlambat') |

---

## Contoh request dan response

### 1. Tambah Data Peminjaman (Create)
- **Method:** `POST`
- **URL:** `/loans`
- **Request Body:**
  ```json
  {
    "book_title": "Clean Code",
    "borrower_name": "Zaidan Ali Arroyan",
    "borrow_date": "2026-10-07",
    "return_date": "2026-10-14",
    "status": "Dipinjam"
  }

### 2. Response (201 Created)
  {
    "id": "4042ed3d-21a1-4ad8-ae77-0dc207b4bd32",
    "book_title": "Clean Code",
    "borrower_name": "Zaidan Ali Arroyan",
    "borrow_date": "2026-10-07",
    "return_date": null,
    "status": "Dipinjam"
  }

---

## Panduan Instalasi & Cara Menjalankan Lokal

Ikuti langkah-langkah di bawah ini untuk menjalankan proyek ini di perangkat lokal:

### 1. Clone Repositori
Clone repositori ke komputer lokal dan masuk ke direktori proyek:
```bash
git clone [https://github.com/zdnaroyan/Library-Loans-API.git]
cd Library-Loans-API

### 2. Pasang Dependensi
Pasang semua dependensi yang diperlukan dengan menjalankan:
npm install

### 3. Konfigurasi Environment Variables
Buat file baru bernama .env pada root direktori proyek, lalu isi dengan konfigurasi berikut:
SUPABASE_URL=[https://nruobajhimhsrjkzfexb.supabase.co]
SUPABASE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5ydW9iYWpoaW1oc3Jqa3pmZXhiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTEyNzI3MjMsImV4cCI6MjEwNjg0ODcyM30.7iI_ZQ6PPCKNZYWJGal3q5sEiiA-fIHAb30o7lmDEv4
PORT=3000

### 4. Jalankan Server
Untuk menjalankan server dalam mode pengembangan (development menggunakan Nodemon):
npm run dev

### 5. Akses API Secara Lokal
Setelah server aktif di port 3000, Anda dapat mengakses endpoint melalui browser atau Postman:
Base URL: http://localhost:3000
Endpoint Data Peminjaman: http://localhost:3000/loans
Endpoint Filter Status: http://localhost:3000/loans?status=Terlambat

---

## Link hasil deployment Vercel
Production Base URL: https://library-loans-api-rho.vercel.app
Endpoint Data Peminjaman: https://library-loans-api-rho.vercel.app/loans
Endpoint Filter Query Contoh: https://library-loans-api-rho.vercel.app/loans?status=Terlambat