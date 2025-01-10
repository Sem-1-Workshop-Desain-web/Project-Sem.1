// Data barang lagi tren (namun tidak jadi digunakan)
const Lagi_tren = [
    {
        id: 1,
        image : '/Lagi-tren/cbr.jpeg', 
        nama: 'Honda CBR', 
        jumlah: '32 Produk' 
    },
    { 
        id: 2,
        image : '/Lagi-tren/gym.jfif', 
        nama: 'Alat Olahraga', 
        jumlah: '103 Produk' 

    },
    { 
        id: 3,
        image : '/Lagi-tren/headphone.webp', 
        nama: 'Headphone', 
        jumlah: '58 Produk' 

    },
    {
        id: 4,
        image : '/Lagi-tren/kamera.jpg',
        nama: 'Kamera Digital',
        jumlah: '23 Produk'
    },
    {
        id: 5,
        image : '/Lagi-tren/labubu.jpg',
        nama: 'Labubu',
        jumlah: '49 Produk'
    },
    {
        id: 6,
        image : '/Lagi-tren/Lenovo-ThinkPad-T460p-4.jpg',
        nama: 'Lenovo ThinkPad',
        jumlah: '15 Produk'
    },
    {
        id: 7,
        image : '/Lagi-tren/pc gaming.jpg',
        nama: 'PC Gaming',
        jumlah: '20 Produk'
    },
    {
        id: 8,
        image: '/Lagi-tren/samsung-galaxy-fold-square-1-1536x1536.webp',
        nama: 'HP Samsung',
        jumlah: '10 Produk'
    }
];

//Data barang untuk ditampilkan di home 
const Home_produk = [
    {
        id: 1,
        image: '/Lagi-tren/macbook marble.jpg',
        nama: 'Macbook Pro Marble edition',
        harga: 'Rp. 118.875.000,00',
        lokasi: 'Amerika Serikat',
        rate: '5.0',
        total_rate: '(154 rating)',
        terjual: '100+',
        variants: [
            {
                color: 'White',
                stock: '1',
                harga: 'Rp. 118.875.000,00',
                image: '/Lagi-tren/macbook marble.jpg'
            },
            {
                color: 'Black',
                stock: '2',
                harga: 'Rp. 118.500.000,00',
                image: '/Home/macbook marble black.webp'
            },
        ],
    },
    {
        id: 2,
        image: '/Lagi-tren/ROG-Mothership_GZ700GX-750x485.jpg',
        nama: 'Asus ROG Mothership GZ700 Series',
        harga: 'Rp. 130.000.000,00',
        lokasi: 'Taiwan',
        rate: '5.0',
        total_rate: '(250 rating)',
        terjual: '231+',
        variants: [
            {
                color: 'Black',
                stock: '1',
                harga: 'Rp. 130.000.000,00',
                image: '/Lagi-tren/ROG-Mothership_GZ700GX-750x485.jpg'
            },
            {
                color: 'Silver',
                stock: '2',
                harga: 'Rp. 129.500.000,00',
                image: '/Home/Asus ROG Mothership GZ700 Series silver.jpg'
            },
        ],
    },
    {
        id: 3,
        image: '/Home/luvaglio.jfif',
        nama: 'Luvaglio',
        harga: 'Rp. 4.000.000. 000,00',
        lokasi: 'Italia',
        rate: '5.0',
        total_rate: '(32 rating)',
        terjual: '10+',
        variants: [
            {
                color: 'Wood',
                stock: '1',
                harga: 'Rp. 4.000.000. 000,00',
                image: '/Home/luvaglio.jfif'
            },
            {
                color: 'Green',
                stock: '3',
                harga: 'Rp. 3.990.000.000,00',
                image: '/Home/Luvaglio-green.jfif',
            },
            {
                color: 'Pink',
                stock: '2',
                harga: 'Rp. 3.990.000.000,00',
                image: '/Home/Luvaglio-pink.jfif',
            },
            {
                color: 'Brown',
                stock: '1',
                harga: 'Rp. 4.000.000.000,00',
                image: '/Home/Luvaglio-brown.jfif',
            }
        ]
    },
    {
        id: 4,
        image: '/Home/mac-pro.jpg',
        nama: 'Mac Pro',
        harga: 'Rp. 740.000.000,00',
        lokasi: 'Amerika Serikat',
        rate: '5.0',
        total_rate: '(100 rating)',
        terjual: '80+',
        variants: [
            {
                color: 'Silver',
                stock: '3',
                harga: 'Rp. 740.000.000,00',
                image: '/Home/mac-pro.jpg',
            }
        ]
    },
    {
        id: 5,
        image: '/Home/orion.jpg',
        nama: '8Pack OrionX2',
        harga: 'Rp. 600.000.000,00',
        lokasi: 'Inggris',
        rate: '5.0',
        total_rate: '(84 rating)',
        terjual: '50+ terjual',
        variants: [
            {
                color: 'Black',
                stock: '2',
                harga: 'Rp. 600.000.000,00',
                image: '/Home/orion.jpg',
            }
        ]
    },
    {
        id: 6,
        image: '/Home/aurum.png',
        nama: 'Yoyotech XDNA Aurum 24K',
        harga: 'Rp. 182.000.000,00',
        lokasi: 'Inggris',
        rate: '5.0',
        total_rate: '(98 rating)',
        terjual: '100+',
        variants: [
            {
                color: 'Black',
                stock: '5',
                harga: 'Rp. 182.000.000,00',
                image: '/Home/aurum.png',
            }
        ]
    },
    {
        id: 7,
        image: '/Home/Neiman.avif',
        nama: 'Neiman Marcus Limited Edition Fighter',
        harga: 'Rp. 179.300.000. 000,00',
        lokasi: 'Amerika Serikat',
        rate: '5.0',
        total_rate: '(15 rating)',
        terjual: '13+',
        variants: [
            {
                color: 'Silver',
                stock: '2',
                harga: 'Rp. 179.300.000.000,00',
                image: '/Home/Neiman.avif',
            },
            {
                color: 'Black',
                stock: '1',
                harga: 'Rp. 179.300.000.000,00',
                image: '/Home/Neiman-black.jpg',
            }
        ]
    },
    {
        id: 8,
        image: '/Home/AJS.webp',
        nama: '1949 E90 AJS Porcupine',
        harga: 'Rp. 114.100.000. 000,00',
        lokasi: 'Inggris',
        rate: '5.0',
        total_rate: '(1 rating)',
        terjual: '1+',
        variants: [
            {
                color: 'Silver',
                stock: '1',
                harga: 'Rp. 114.100.000.000,00',
                image: '/Home/AJS.webp',
            },
            {
                color: 'Black',
                stock: '1',
                harga: 'Rp. 114.100.000.000,00',
                image: '/Home/AJS-black.webp',
            }
        ]
    },
    {
        id: 9,
        image: '/Home/The Beverly.jpg',
        nama: 'The Beverly Hills Edition',
        harga: 'Rp. 15.000.000. 000,00',
        lokasi: 'Amerika Serikat',
        rate: '5.0',
        total_rate: '(3 rating)',
        terjual: '4+',
        variants: [
            {
                color: 'Gold',
                stock: '2',
                harga: 'Rp. 15.000.000.000,00',
                image: '/Home/The Beverly.jpg',
            }
        ]
    },
    {
        id: 10,
        image: '/Home/Trek-Butterfly.jpg',
        nama: 'Trek Butterfly Madone',
        harga: 'Rp. 7.400.000. 000,00',
        lokasi: 'Amerika Serikat',
        rate: '5.0',
        total_rate: '(15 rating)',
        terjual: '13+',
        variants: [
            {
                color: 'Pink and White',
                stock: '3',
                harga: 'Rp. 7.400.000.000,00',
                image: '/Home/Trek-Butterfly.jpg',
            }
        ]
    },
    {
        id: 11,
        image: '/Home/Trek Yoshimoto.jpg',
        nama: 'Trek Yoshimoto Nara Speed Concept',
        harga: 'Rp. 3.000.000. 000,00',
        lokasi: 'Jepang',
        rate: '5.0',
        total_rate: '(18 rating)',
        terjual: '21+',
        variants: [
            {
                color: 'Yellow',
                stock: '5',
                harga: 'Rp. 3.000.000.000,00',
                image: '/Home/Trek Yoshimoto.jpg',
            }
        ]
    },
    {
        id: 12,
        image: '/Home/Victor Lamborghini.jfif',
        nama: 'Victor Lamborghini Hypernano Epic Limited',
        harga: 'Rp. 19.998.000,00',
        lokasi: 'Italia',
        rate: '5.0',
        total_rate: '(53 rating)',
        terjual: '52+',
        variants: [
            {
                color: 'Green',
                stock: '20',
                harga: 'Rp. 19.998.000,00',
                image: '/Home/Victor Lamborghini.jfif',
            },
            {
                color: 'Orange',
                stock: '15',
                harga: 'Rp. 19.998.000,00',
                image: '/Home/Victor Lamborghini-orange.jfif',
            }
        ]
    }
]
  
//jadikan satu terlebih dahulu dua komponen data barang
const produkData = {
    Lagi_tren,
    Home_produk
};

//baru kemudian export variabelnya
export default produkData;