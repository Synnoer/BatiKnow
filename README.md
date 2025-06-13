# BatiKnow
Batiknow merupakan aplikasi pengenal motif batik yang bersifat interaktif dan menarik, dengan dukungan teknologi Convolutional Neural Network (CNN). Pengguna hanya perlu mengambil foto motif batik yang ingin dikenali, dan Batiknow akan secara otomatis mengidentifikasinya serta menyajikan informasi informatif mengenai makna filosofis, daerah asal, hingga berbagai potensi pemanfaatannya. Kami berharap aplikasi ini dapat menumbuhkan minat generasi muda untuk lebih mengenal, menghargai, dan melestarikan warisan budaya batik Indonesia melalui pendekatan yang modern dan menyenangkan.

## Team : CC25-CF002
- MC222D5Y1277 - Ade Ripaldi Nuralim - UIN SGD Bandung - [Aktif]
- MC222D5Y1278 - Dimas Arya Nurhakim - UIN SGD Bandung - [Aktif]
- MC222D5Y1279 - Adi Purnama - UIN SGD Bandung - [Aktif]
- FC222D5Y1701 - Denis Firmansyah - UIN SGD Bandung - [Aktif]
- FC222D5Y1324 - Devi Mulyana - UIN SGD Bandung - [Aktif]


## 🤖 Machine Learning
Dalam proyek ini, Model dibangun dengan transfer learning EfficientNet menambahkan custom head untuk klasifikasi, model ini mampu melakukan pengenalan motif batik secara lebih efisien dan akurat, meskipun dengan jumlah data pelatihan yang relatif terbatas.

![image](https://raw.githubusercontent.com/Synnoer/BatiKnow/refs/heads/main/assets/Cuplikan%20layar%202025-06-12%20201226.png)

![image](https://raw.githubusercontent.com/Synnoer/BatiKnow/refs/heads/main/assets/Cuplikan%20layar%202025-06-12%20201358.png)
![image](https://raw.githubusercontent.com/Synnoer/BatiKnow/refs/heads/main/assets/Cuplikan%20layar%202025-06-12%20201337.png)


## 🌐 Web Development
### 🔐 Authentication
#### Login Page

Halaman login memungkinkan pengguna masuk menggunakan kredensial yang telah terdaftar.


![image](https://raw.githubusercontent.com/Synnoer/BatiKnow/refs/heads/main/assets/Cuplikan%20layar%202025-06-12%20183709.png)

#### Register Page
Pengguna baru dapat mendaftarkan akun melalui halaman register untuk mulai menggunakan fitur aplikasi.



![image](https://raw.githubusercontent.com/Synnoer/BatiKnow/refs/heads/main/assets/Cuplikan%20layar%202025-06-12%20183918.png)

#### Home Page

Menampilkan beranda utama secara default, dengan akses cepat ke fitur pemindaian dan daftar data.


![image](http://raw.githubusercontent.com/Synnoer/BatiKnow/refs/heads/main/assets/Cuplikan%20layar%202025-06-12%20183349.png)

#### Scan Page

Fitur pemindaian motif batik menggunakan kamera atau gambar yang diunggah dengan bantuan Machine Learning.




![image](https://raw.githubusercontent.com/Synnoer/BatiKnow/refs/heads/main/assets/Cuplikan%20layar%202025-06-12%20183408.png)

#### List Page
Menampilkan daftar hasil identifikasi motif batik beserta informasi lengkapnya.



![image](https://raw.githubusercontent.com/Synnoer/BatiKnow/refs/heads/main/assets/Cuplikan%20layar%202025-06-12%20183420.png)


## App Demo

[🎥 Demo JejakBatik - YouTube](https://www.youtube.com/watch?v=_JdJLD_nqCY)

![Demo JejakBatik](https://github.com/Synnoer/BatiKnow/raw/main/assets/demo.gif)


## Result

Model klasifikasi citra yang dibangun menunjukkan performa yang sangat baik pada data validasi dan data uji. Pada data validasi, model mencapai akurasi sebesar 90,03% dengan nilai loss sebesar 0,552, sedangkan pada data uji (test set), akurasi yang dicapai adalah 90,87% dengan nilai loss sebesar 0,419. Hasil ini mengindikasikan bahwa model mampu melakukan generalisasi dengan baik terhadap data yang belum pernah dilihat sebelumnya, tanpa mengalami overfitting. Akurasi pada data pelatihan juga cukup tinggi, yakni sebesar 89,40% dengan nilai loss 0,6208, yang relatif seimbang dengan akurasi pada data validasi dan uji. Perbedaan yang kecil antara akurasi pada data pelatihan, validasi, dan uji menunjukkan bahwa model terlatih dengan stabil dan memiliki kemampuan klasifikasi yang kuat. Dengan kata lain, kombinasi arsitektur EfficientNetB0 sebagai backbone dan lapisan klasifikasi tambahan berhasil memberikan hasil yang optimal untuk tugas klasifikasi ini.

## Untuk melihat secara langsung bagaimana sistem ini bekerja, Anda dapat mencoba aplikasinya melalui website resmi kami: https://batiknow.site/.
