## Dokumentasi Arsitektur Antarmuka Pengguna (UI)

Pengembangan antarmuka pengguna pada proyek Finebank diimplementasikan menggunakan pendekatan metodologi **Atomic Design**. Paradigma ini diterapkan untuk memastikan skalabilitas, tingkat penggunaan ulang (_reusability_), dan modularitas kode yang sistematis. Struktur antarmuka diklasifikasikan ke dalam empat tingkat hierarki komponen sebagai berikut:

### 1. Elements

Merupakan unit struktural paling fundamental dan indivisible (tidak dapat dipecah lagi) yang menjadi blok pembangun utama antarmuka aplikasi.

- **`Button`**: Komponen tombol interaktif dengan dukungan variasi _state_.
- **`Input`**: Komponen _field_ untuk penerimaan data teks dari pengguna.
- **`Label`**: Komponen teks deskriptif yang terikat pada elemen _input_.
- **`LabeledInput`**: Komponen gabungan fundamental yang mengintegrasikan `Label` dan `Input`.
- **`CheckBox`**: Komponen elemen _toggle_ untuk pemilihan biner atau persetujuan syarat.
- **`Logo`**: Komponen representasi identitas visual entitas Finebank.IO.
- **`Icon`**: Entitas grafis vektor untuk navigasi dan aksi (_Overview_, _Transaction_, _Settings_, dll.).
- **`Card`**: Komponen dasar pembungkus konten terisolasi dengan dukungan kapabilitas _Dark Mode_ terintegrasi.
- **`AppSnackbar`**: Komponen transien untuk menampilkan umpan balik atau notifikasi sistem kepada pengguna.

### 2. Fragments

Merupakan entitas struktural gabungan (mewakili konsep _Molecules_ dan _Organisms_ pada _Atomic Design_) yang mengintegrasikan beberapa _Elements_ untuk membentuk satu kesatuan fungsionalitas UI yang spesifik dan independen.

- **`FormSignIn`**: Fragmen formulir autentikasi masuk, merangkum input kredensial pengguna dan tombol aksi.
- **`FormSignUp`**: Fragmen formulir registrasi entitas pengguna baru.
- **`CardBalance`**: Fragmen representasi visual akumulasi saldo pengguna.
- **`CardExpense`**: Fragmen indikator metrik ringkasan pengeluaran.
- **`CardExpenseBreakdown`**: Fragmen analitik yang merincikan kategorisasi pengeluaran finansial.
- **`CardGoal`**: Fragmen pemantauan progres target pencapaian finansial.
- **`CardRecentTransaction`**: Fragmen daftar log riwayat transaksi kronologis.
- **`CardStatistic`**: Fragmen representasi grafis komparatif untuk statistik transaksi mingguan.
- **`CardUpcomingBill`**: Fragmen daftar kewajiban tagihan terencana.

### 3. Layouts

Merupakan struktur kerangka spasial (_Templates_) yang mendikte tata letak dan penempatan _Fragments_ serta fungsionalitas penyedia konteks global.

- **`AuthLayout`**: Kerangka tata letak terpusat yang didedikasikan untuk proses autentikasi (meliputi halaman masuk dan registrasi). Tata letak ini mendukung sinkronisasi manajemen _state_ mode terang/gelap (_Dark Mode_).
- **`MainLayout`**: Kerangka tata letak operasional pasca-autentikasi. Mengelola tata ruang matriks dasbor, bilah navigasi samping (_Sidebar_), _Header_ profil pengguna, serta mendistribusikan _context_ tema warna dinamis dan _Dark Mode_ ke seluruh komponen turunan.

### 4. Pages

Merupakan hierarki tertinggi berupa instansiasi spesifik dari _Layouts_ yang telah diinjeksikan dengan representasi data konkret, dirancang untuk melayani rute (_routes_) navigasi spesifik pada aplikasi.

- **`SignIn`**: Halaman rute autentikasi awal bagi pengguna terdaftar.
- **`SignUp`**: Halaman rute pendaftaran identitas pengguna baru.
- **`Dashboard`** / **`Overview`**: Halaman antarmuka utama yang menyajikan agregasi data finansial secara holistik kepada pengguna pasca-autentikasi.
