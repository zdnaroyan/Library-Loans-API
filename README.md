# Library Loans REST API 📚

REST API untuk layanan pencatatan peminjaman buku perpustakaan yang dibangun menggunakan **Node.js**, **Express.js**, dan **Supabase**.

## 📌 Deskripsi & Tujuan Proyek
Proyek ini bertujuan untuk menyediakan layanan backend berbasis RESTful API dalam mengelola data peminjaman buku perpustakaan oleh anggota, mencakup operasi CRUD lengkap serta fitur pemfilteran data berdasarkan status peminjaman.

---

## 🗄️ Struktur Data / Skema Database (`loans`)
| Kolom | Tipe Data | Keterangan |
| :--- | :--- | :--- |
| `id` | `uuid` (Primary Key) | ID unik data peminjaman |
| `book_title` | `text` | Judul buku yang dipinjam |
| `borrower_name` | `text` | Nama anggota peminjam |
| `borrow_date` | `date` | Tanggal peminjaman |
| `return_date` | `date` | Tanggal pengembalian |
| `status` | `text` | Status (contoh: 'Dipinjam', 'Kembali', 'Terlambat') |

---

## 🚀 Endpoint API

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