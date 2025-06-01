import { PrismaClient, Prisma } from "../db/generated/prisma";

const prisma = new PrismaClient();

const userData: Prisma.UserCreateInput[] = [
    {
        name: "Devi Mulyana",
        username: "jangbe",
        password: "$2y$10$FMpsHjRpqEC8WU6690qdTefsJIy1kOY3cfEDI8fO/tQlXC33lGpKu",
    }
];
const batikData: Prisma.BatikCreateInput[] = [
    {
        "name": "Pintu Aceh",
        "originCity": "Aceh",
        "description": "Motif ini terinspirasi oleh arsitektur tradisional Aceh yang memiliki pintu yang pendek, tetapi bagian dalamnya cukup luas. Motif ini mewakili kepribadian orang Aceh yang selalu rendah hati dan sabar. Selain itu, motif ini juga menggambarkan bahwa orang Aceh tidak mudah terbuka kepada orang asing, konservatif, tetapi sangat baik kepada siapa pun yang mengenal mereka.",
        "reference": "iwarebatik.org"
    },
    {
        "name": "Barong",
        "originCity": "Bali",
        "description": "Barong merupakan hewan mitos yang memiliki kekuatan supernatural. Hewan ini merupakan gabungan dari macan atau singa (badan, kaki, dan matanya), elang, gajah, dan naga (mulut menyeringai dengan lidah panjang). Hewan ini seringkali ditemukan dalam karya seni Jawa dan Bali sebagai perlambang kekuatan, kebenaran, dan kejantanan. Barong juga merupakan lambang falsafah bahwa manusia memiliki dua sisi. Kita harus mengendalikan hasrat buruk dan menahan diri dari godaan agar dapat berkembang sempurna sebagai manusia yang dewasa dan bijak.",
        "reference": "iwarebatik.org"
    },
    {
        "name": "Merak Abyorhookokai",
        "originCity": "Bali",
        "description": "Batik bermotif merak ini menggambarkan keindahan burung tersebut sebagai titik fokus kain, dan gambar ini semakin diperindah dengan hiasan kelopak bunga yang lembut yang tampilannya mirip bunga kersen. Motif ini merupakan pengaruh dari budaya Jepang, dan menggambarkan semangat Bali sebagai Pulau Dewata.",
        "reference": "iwarebatik.org"
    },
    {
        "name": "Ondel-Ondel",
        "originCity": "DKI Jakarta",
        "description": "Boneka ondel-ondel merupakan salah satu lambang khas tradisional Betawi. Motif ini menggambarkan harapan agar pemakai berhasil mencapai hidup yang lebih makmur dan terlindungi dari nasib buruk dan bahaya. Batik Betawi diklasifikasikan sebagai batik daerah pesisir, yang banyak menggunakan warna-warni cerah untuk melambangkan kebahagiaan, semangat hidup, dan dinamisme.",
        "reference": "iwarebatik.org"
    },
    {
        "name": "Megamendung",
        "originCity": "Jawa Barat",
        "description": "Motif ini konon diciptakan oleh seorang Raja di masa Kerajaan Pajajaran (923-1428) yang mendapatkan ilham melalui meditasi untuk mendapatkan petunjuk Tuhan untuk mengatasi pergolakan. Kata “Mega” berarti sinar mentari, sementara “Mendung” merupakan awan yang menutupi terik matahari. Motif awan ini menyiratkan kemampuan untuk tetap tenang dalam segala situasi, dan kemampuan untuk menjadi pimpinan yang mengilhami dan berbudi tinggi yang melindungi warga dan memenuhi kebutuhannya.",
        "reference": "iwarebatik.org"
    },
    {
        "name": "Merak Lasem",
        "originCity": "Jawa Tengah",
        "description": "Merak dianggap sebagai raja para burung. Ia dianggap melambangkan keindahan, kekuatan, dan keanggunan dalam perilaku dan sikap sehari-hari. Motif yang kaya warna ini merupakan ciri khas batik yang diproduksi di daerah pesisir Utara Jawa.",
        "reference": "iwarebatik.org"
    },
    {
        "name": "Pring Sedapur",
        "originCity": "Jawa Timur",
        "description": "Motif ini memiliki filosofi yang sangat tinggi. Bambu biasa hidup bergerombol, membentuk satu kekuatan. Bambu jika bersatu akan menjadi sebuah kekuatan, jika diurai menjadi sebuah tali yang sangat erat.",
        "reference": "batiksejawat.com"
    },
    {
        "name": "Insang Ikan",
        "originCity": "Kalimantan Barat",
        "description": "Insang ikan merupakan motif yang sering dipergunakan oleh kaum Melayu yang tinggal di sepanjang tepian Sungai Kapuas. Ia melambangkan rasa syukur manusia kepada Tuhan. Insang merupakan bagian tubuh ikan yang paling penting, yang memungkinkan ikan untuk bernapas dan hidup.",
        "reference": "iwarebatik.org"
    },
    {
        "name": "Dayak",
        "originCity": "Kalimantan",
        "description": "Batik Dayak merupakan warisan budaya dari masyarakat Dayak di Kalimantan, dengan motif yang mencerminkan filosofi, spiritualitas, dan hubungan erat dengan alam. Salah satu motif yang terkenal adalah Benang Bintik, khas Kalimantan Tengah, yang menampilkan simbol-simbol seperti naga, senjata tradisional, dan Batang Garing—pohon kehidupan yang dipercaya berasal dari Tuhan Dayak Ngaju, Ranying Hatalla Langit.",
        "reference": "orami.co.id"
    },
    {
        "name": "Gajah",
        "originCity": "Lampung",
        "description": "Motifnya menggambarkan cagar alam Lampung, Way Kambas. Way Kambas adalah cagar alam yang dilindungi yang berfungsi sebagai pusat konservasi gajah. Untuk komunitas Hindu, gajah melambangkan Airlangga, yang merupakan dewa kebijaksanaan dan pengetahuan.",
        "reference": "iwarebatik.org"
    },
    {
        "name": "Mata Keteran",
        "originCity": "Madura",
        "description": "Motif batik yang memiliki makna simbolik yang mendalam, terutama dalam konteks kebudayaan Madura. Motif ini melambangkan mata burung perkutut, yang menjadi fokus utama dalam batik ini. Motif ini juga terkait dengan hubungan antara Madura dan Yogyakarta, khususnya dengan para Adipati di Madura yang memiliki hubungan darah dengan Raja-Raja Mataram di Yogyakarta.",
        "reference": "infobatik.com"
    },
    {
        "name": "Pala Salawaku",
        "originCity": "Maluku",
        "description": "Motif ini menggambarkan senjata tradisional yang unik dari wilayah Maluku, yang disebut Salawaku. Belati salawaku digunakan di banyak lingkungan sosial lokal, karena melambangkan identitas masyarakat Maluku seperti dalam tarian tradisional, ritual, dan pola tekstil. Sementara kata ‘Pala’ mengacu pada pala sebagai salah satu komoditas utama Maluku.",
        "reference": "iwarebatik.org"
    },
    {
        "name": "Bale Lumbung",
        "originCity": "Nusa Tenggara Barat",
        "description": "Motif ini menandakan kesejahteraan masyarakat Sasak kuno. Bale juga melambangkan bentuk rumah tradisional masyarakat Sembalun, Lombok Timur. Bale juga berfungsi sebagai lumbung makanan tradisional yang digunakan oleh masyarakat desa Lombok.",
        "reference": "iwarebatik.org"
    },
    {
        "name": "Songket",
        "originCity": "Palembang",
        "description": "Makna filosofis yang terkandung dalam Songket Palembang Bungo Cino salah satunya adalah keindahan dan keselarasan, mulai pada pola yang rumit dan simetris, Songket ini mengajarkan kita pentingnya menemukan keseimbangan dalam hidup. Setiap motif dan warna yang digunakan memiliki makna tersendiri, menunjukkan betapa kompleksnya kehidupan dan bagaimana kita harus menghargai setiap detailnya.",
        "reference": "kumparan.com"
    },
    {
        "name": "Asmat",
        "originCity": "Papua",
        "description": "Motif batik menggambarkan motif kesukuan suku Asmat yang pada umumnya ditemukan pada patung kayu. Batik Asmat biasanya dibuat menggunakan pewarna alami dari tanah terakota. Motif batik jenis ini umumnya diproduksi di banyak daerah di Papua, termasuk provinsi Papua Barat.",
        "reference": "iwarebatik.org"
    },
    {
        "name": "Burung Cendrawasih",
        "originCity": "Papua",
        "description": "Burung Cendrawasih merupakan motif yang menggambarkan burung endemik di tanah Papua. Cendrawasih adalah salah satu spesies burung langka, dilindungi oleh pemerintah Indonesia. Burung ini dipercaya sebagai burung surga yang menghubungkan kehidupan di bumi dengan surga. Motif ini juga dianggap sebagai motif sakral dan mewakili identitas masyarakat Papua, baik di provinsi Papua maupun Papua Barat.",
        "reference": "iwarebatik.org"
    },
    {
        "name": "Tifa",
        "originCity": "Papua",
        "description": "Motif ini berasal dari alat musik tradisional Papua, Tifa. Tifa adalah sejenis alat musik perkusi dari kayu berbentuk tabung. Satu sisi instrumen ditutup dengan kulit binatang kering. Bentuk dan fungsinya sekilas hampir sama dengan instrumen drum, tetapi suara yang dihasilkan terdengar lebih ringan. Tifa digunakan untuk mengiringi upacara tradisional dan tarian tradisional.",
        "reference": "iwarebatik.org"
    },
    {
        "name": "Parang",
        "originCity": "Solo",
        "description": "Dilansir dari laman Batik Tulis, garis-garis lengkung pada batik Parang sering diartikan sebagai ombak lautan yang menjadi pusat tenaga alam, dalam hal ini yang dimaksudkan adalah raja. Komposisi kemiringan pada motif parang juga melambangkan kewibawaan, kekuasaan, kebesaran, serta gerak cepat sehingga pemakainya diharapkan dapat bergerak cepat.",
        "reference": "tempo.co"
    },
    {
        "name": "Sidoluhur",
        "originCity": "Solo",
        "description": "Batik Sidoluhur disebut Batik Keraton karena dikembangkan di wilayah Keraton Ngayogyakarta dan Kasunanan Surakarta. Sesuai namanya, batik ini bermakna keluhuran. Dengan kata lain, orang Jawa dalam menjalani kehidupannya akan selalu mencari keluhuran, baik secara materi maupun nonmateri.",
        "reference": "bahankain.com"
    },
    {
        "name": "Sogan",
        "originCity": "Solo",
        "description": "Batik ini memiliki akar sejarah yang kuat dari daerah Yogyakarta dan Solo. Sejarah batik ini berkaitan erat dengan tradisi dan budaya masyarakat Jawa di dua kota tersebut masa itu. Batik ini awalnya dikenakan oleh kalangan bangsawan keraton sebagai simbol status sosial dan kekayaan. Nama “Sogan” sendiri berasal dari pohon soga, yang merupakan sumber pewarna alami untuk kain ini. Pewarna yang dihasilkan dari kulit pohon soga memberikan warna cokelat yang khas, serta memiliki daya tahan yang baik. Penggunaan pewarna alami menjadikan batik Sogan ramah lingkungan dan memberikan nuansa alami yang tidak bisa ditiru oleh pewarna sintetis.",
        "reference": "hassa.co.id"
    },
    {
        "name": "Truntum",
        "originCity": "Solo",
        "description": "Makna utamanya adalah cinta kasih yang tulus dari orang tua, karena pada saat acara perkawinan motif batik truntum digunakan oleh orang tua mempelai yang memberikan simbol cinta kasih orang tua kepada sang anak yang akan dilakukan juga oleh sang suami.",
        "reference": "batikprabuseno.com"
    },
    {
        "name": "Lontara",
        "originCity": "Sulawesi Selatan",
        "description": "Lontara terdiri dari huruf-huruf kuno yang diukir pada daun lontar, kemudian diwarnai dengan teknik batik. Motif-motif pada batik ini mencerminkan alam, fauna, flora, dan simbol-simbol kehidupan sehari-hari yang dianggap penting dalam budaya masyarakat Bugis-Makassar. Contohnya, burung Maleo yang merupakan simbol kesuburan dan keberuntungan, atau motif kapal Pinisi yang melambangkan ketangguhan, juga simbol huruf-huruf aksara Bugis.",
        "reference": "koransulsel.com"
    },
    {
        "name": "Rumah Minang",
        "originCity": "Sumatera Barat",
        "description": "Batik motif Rumah Gadang menggambarkan rumah adat Minangkabau dengan atap melengkung menyerupai tanduk kerbau, dikenal sebagai gonjong. Motif ini tidak hanya menampilkan bentuk fisik rumah, tetapi juga mengandung nilai-nilai budaya seperti kekuatan, keharmonisan, dan kejayaan. Ukiran-ukiran yang terdapat pada Rumah Gadang, seperti motif pucuak rabuang (tunas bambu) dan kaluak paku (pakis muda), sering diadaptasi ke dalam desain batik, melambangkan pertumbuhan, kesuburan, dan kebijaksanaan.",
        "reference": "rumahbatikbedjo.com"
    },
    {
        "name": "Boraspati",
        "originCity": "Sumatera Utara",
        "description": "Motif batik Boraspati, yang terinspirasi dari ukiran cicak pada rumah tradisional Batak 'ruma bolon', melambangkan kebijaksanaan dan kekayaan karena kemampuan cicak untuk beradaptasi dengan berbagai lingkungan. Filosofi ini mengajarkan masyarakat Batak agar dapat menyesuaikan diri di mana pun mereka berada, khususnya saat merantau, dan bergaul secara bijak dengan perbedaan di lingkungan sosial. Selain itu, kemunculan cicak juga dipercaya sebagai pertanda kesuburan tanaman bagi petani.",
        "reference": "travel.detik.com"
    },
    {
        "name": "Kawung",
        "originCity": "Yogyakarta",
        "description": "Motif Batik Kawung merupakan motif batik yang bentuknya berupa bulatan mirip buah kawung (sejenis kelapa atau kadang juga dianggap sebagai aren atau kolang-kaling) yang ditata rapi secara geometris. Motif kawung bermakna kesempurnaan, kemurnian dan kesucian. Pada awalnya motif ini muncul pada ukiran dinding di beberapa candi di Jawa seperti Prambanan. Dalam kaitannya dengan kata suwung yang berarti kosong, motif kawung menyimbolkan kekosongan nafsu dan hasrat duniawi, sehingga menghasilkan pengendalian diri yang sempurna. Kekosongan ini menjadikan seseorang netral, tidak berpihak, tidak ingin menonjolkan diri, mengikuti arus kehidupan, membiarkan segala yang ada disekitarnya berjalan sesuai kehendak alam.",
        "reference": "budaya.jogjaprov.go.id"
    },
    {
        "name": "Sidomukti",
        "originCity": "Yogyakarta",
        "description": "Motif batik Sidomukti sarat akan filosofi yang melambangkan harapan akan kebahagiaan dan kesejahteraan. Setiap elemennya memiliki makna mendalam: motif bunga menyimbolkan kehidupan, kecantikan, kesuburan, pertumbuhan, dan kemakmuran; motif kupu-kupu merepresentasikan metamorfosis dan perjalanan menuju pencerahan; sementara motif Garuda melambangkan kegagahan, kewibawaan, kemuliaan, dan kehormatan. Oleh karena itu, batik Sidomukti sering dipilih untuk acara penting seperti pernikahan, membawa doa dan harapan baik bagi pemakainya.",
        "reference": "hassa.co.id"
    }
]

export async function main() {
    for (const u of userData) {
        await prisma.user.create({ data: u });
    }

    for (const i in batikData) {
        await prisma.batik.create({ data: {...batikData[i], classId: i} })
    }
}

main();