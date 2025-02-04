# Analisis Hasil Pengujian K6

Dokumen ini menjelaskan hasil pengujian kinerja API menggunakan **k6**. Setiap metrik yang ditampilkan memberikan informasi terkait performa dan efisiensi server dalam menangani permintaan HTTP.

## **Metrik yang Dihasilkan**

### **1. data_received**

- **Deskripsi:** Total data yang diterima oleh klien selama pengujian.
- **Nilai:** `854 B 722 B/s`
- **Penjelasan:** Klien menerima **854 byte** data dengan kecepatan rata-rata **722 byte per detik**.

### **2. data_sent**

- **Deskripsi:** Total data yang dikirim oleh klien ke server.
- **Nilai:** `89 B 75 B/s`
- **Penjelasan:** Klien mengirim **89 byte** data ke server dengan kecepatan rata-rata **75 byte per detik**.

### **3. http_req_blocked**

- **Deskripsi:** Waktu yang dihabiskan untuk memblokir permintaan HTTP sebelum dikirim.
- **Nilai:** `avg=16.04ms  min=16.04ms  max=16.04ms`
- **Penjelasan:** Rata-rata waktu blokir adalah **16.04 ms**, yang menunjukkan adanya kemungkinan antrean atau pembatasan sistem sebelum permintaan dikirim.

### **4. http_req_connecting**

- **Deskripsi:** Waktu yang dihabiskan untuk membuat koneksi TCP ke server.
- **Nilai:** `avg=0s  min=0s  max=0s`
- **Penjelasan:** Tidak ada waktu yang dihabiskan untuk membuat koneksi baru, kemungkinan karena koneksi sudah tersedia (keep-alive connection).

### **5. http_req_duration**

- **Deskripsi:** Total waktu yang dihabiskan untuk menyelesaikan satu permintaan HTTP.
- **Nilai:** `avg=160.84ms  min=160.84ms  max=160.84ms`
- **Penjelasan:** Waktu rata-rata yang dibutuhkan untuk menyelesaikan satu permintaan adalah **160.84 ms**, termasuk waktu koneksi, pengiriman, dan penerimaan data.

### **6. http_req_failed**

- **Deskripsi:** Persentase permintaan HTTP yang gagal.
- **Nilai:** `0.00% 0 out of 1`
- **Penjelasan:** Tidak ada permintaan yang gagal selama pengujian.

### **7. http_req_receiving**

- **Deskripsi:** Waktu yang dihabiskan untuk menerima respons dari server.
- **Nilai:** `avg=462.7µs  min=462.7µs  max=462.7µs`
- **Penjelasan:** Waktu rata-rata untuk menerima data dari server adalah **462.7 mikrodetik**.

### **8. http_req_sending**

- **Deskripsi:** Waktu yang dihabiskan untuk mengirim permintaan ke server.
- **Nilai:** `avg=0s  min=0s  max=0s`
- **Penjelasan:** Tidak ada waktu yang signifikan dihabiskan untuk pengiriman data, kemungkinan karena ukuran permintaan yang kecil.

### **9. http_req_tls_handshaking**

- **Deskripsi:** Waktu yang dihabiskan untuk melakukan TLS handshake (jika ada enkripsi).
- **Nilai:** `avg=0s  min=0s  max=0s`
- **Penjelasan:** Tidak ada TLS handshake yang terjadi karena koneksi tidak dienkripsi (HTTP biasa, bukan HTTPS).

### **10. http_req_waiting**

- **Deskripsi:** Waktu yang dihabiskan menunggu respons dari server setelah permintaan dikirim.
- **Nilai:** `avg=160.37ms  min=160.37ms  max=160.37ms`
- **Penjelasan:** Waktu tunggu sebelum respons diterima adalah **160.37 ms**, yang merepresentasikan waktu pemrosesan server.

### **11. http_reqs**

- **Deskripsi:** Jumlah total permintaan HTTP yang dikirim selama pengujian.
- **Nilai:** `1     0.845886/s`
- **Penjelasan:** Hanya satu permintaan HTTP yang dikirim dengan kecepatan **0.85 request per detik**.

### **12. iteration_duration**

- **Deskripsi:** Waktu rata-rata yang dibutuhkan untuk menyelesaikan satu iterasi uji beban.
- **Nilai:** `avg=1.18s  min=1.18s  max=1.18s`
- **Penjelasan:** Setiap iterasi uji beban membutuhkan waktu **1.18 detik**.

### **13. iterations**

- **Deskripsi:** Jumlah iterasi uji beban yang telah diselesaikan.
- **Nilai:** `1     0.845886/s`
- **Penjelasan:** Hanya satu iterasi yang dilakukan dengan kecepatan **0.85 iterasi per detik**.

### **14. vus (Virtual Users)**

- **Deskripsi:** Jumlah Virtual Users (VU) yang sedang aktif selama pengujian.
- **Nilai:** `1     min=1      max=1`
- **Penjelasan:** Pengujian hanya menggunakan **1 Virtual User**.

### **15. vus_max**

- **Deskripsi:** Jumlah maksimum Virtual Users selama pengujian.
- **Nilai:** `1     min=1      max=1`
- **Penjelasan:** Jumlah maksimum Virtual Users yang digunakan adalah **1**, sesuai dengan konfigurasi uji beban.

## **Kesimpulan**

- **Pengujian dilakukan dengan 1 Virtual User selama 1 iterasi.**
- **Tidak ada kegagalan dalam permintaan HTTP (0% error).**
- **Waktu rata-rata permintaan adalah 160.84ms, yang mencerminkan performa API dalam menangani permintaan.**
- **Tidak ada waktu yang dihabiskan untuk koneksi baru atau TLS handshake, menandakan penggunaan koneksi keep-alive atau HTTP non-TLS.**

Hasil ini menunjukkan bahwa API memiliki **respon yang cukup cepat**, dengan durasi sekitar **160ms per permintaan**. Namun, pengujian dengan lebih banyak Virtual Users diperlukan untuk mengetahui performa dalam kondisi beban yang lebih tinggi.

---

**Catatan:** Jika API mengalami lonjakan lalu lintas, sebaiknya dilakukan pengujian dengan lebih banyak Virtual Users (`vus`) dan durasi yang lebih lama untuk mendapatkan hasil yang lebih akurat.
