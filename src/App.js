import './App.css';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { UserProvider } from './component/UserContext';

// Komponen yang diimpor dari folder "component"
import Navbar from './component/Navbar';
import LoginPages from './component/Login-pages';
import Home from './component/Home';
import Keranjang from './component/Keranjang';
import SearchBar from './component/SearchBar';
import { TampilanProduk, RincianProduk } from './component/Tampilan-produk';

console.log({ TampilanProduk, RincianProduk });

// Komponen utama aplikasi
function App() {
    // Mendapatkan lokasi path saat ini
    const location = useLocation();

    // Menentukan apakah navbar perlu disembunyikan pada halaman tertentu
    const hideNavbar = ['/signin', '/signup', '/forgot-password'].includes(location.pathname);

    // State untuk menyimpan item keranjang belanja
    const [cartItems, setCartItems] = useState([]);

    // Fungsi untuk menambahkan produk ke keranjang belanja
    const addToCart = (product, quantity) => {
        // Mengecek apakah produk dengan varian yang sama sudah ada di keranjang
        const existingItem = cartItems.find(item => item.id === product.id && item.selectedVariant.color === product.selectedVariant.color);
        let updatedCartItems;

        // Menghitung total harga berdasarkan jumlah yang dipilih
        const totalPrice = parseFloat(product.selectedVariant.harga.replace(/[^0-9,]+/g, "")) * quantity;

        if (existingItem) {
            // Jika produk sudah ada, tambahkan jumlah dan total harga
            updatedCartItems = cartItems.map(item => 
                item.id === product.id && item.selectedVariant.color === product.selectedVariant.color
                    ? { ...existingItem, quantity: existingItem.quantity + quantity, totalPrice: existingItem.totalPrice + totalPrice }
                    : item
            );
        } else {
            // Jika produk belum ada, tambahkan produk baru ke keranjang
            updatedCartItems = [...cartItems, { 
                ...product, 
                quantity, 
                selectedVariant: product.selectedVariant,
                totalPrice // Menyimpan total harga
            }];
        }

        setCartItems(updatedCartItems);
        localStorage.setItem('cartItems', JSON.stringify(updatedCartItems)); // Simpan ke localStorage
    };

    // Mengambil data keranjang dari localStorage saat komponen dimuat
    useEffect(() => {
        const savedCartItems = JSON.parse(localStorage.getItem('cartItems'));
        if (savedCartItems) {
            setCartItems(savedCartItems);
        }
    }, []);

    // Fungsi untuk menghapus item dari keranjang
    const removeFromCart = (index) => {
        const newCartItems = cartItems.filter((_, i) => i !== index);
        setCartItems(newCartItems);

        // Perbarui data keranjang di localStorage
        localStorage.setItem('cartItems', JSON.stringify(newCartItems));
    };

    // State untuk menyimpan query pencarian
    const [searchQuery, setSearchQuery] = useState('');

    // Fungsi untuk menangani pencarian dari Navbar atau SearchBar
    const handleSearch = (query) => {
        setSearchQuery(query); // Perbarui state pencarian
    };

    return (
        <UserProvider>
            {/* Navbar hanya ditampilkan jika tidak dalam halaman tertentu */}
            {(!hideNavbar && <Navbar onSearch={handleSearch} setQuery={setSearchQuery} />)}
            <Routes>
                {/* Rute untuk halaman utama */}
                <Route path="/" element={<Home addToCart={addToCart} query={searchQuery} />} />
                {/* Rute untuk halaman autentikasi */}
                <Route path="/signin" element={<LoginPages formType="signin" />} />
                <Route path="/signup" element={<LoginPages formType="signup" />} />
                <Route path="/forgot-password" element={<LoginPages formType="forgot-password" />} />
                {/* Rute untuk halaman pencarian */}
                <Route path="/search" element={<SearchBar />} />
                {/* Rute untuk halaman keranjang */}
                <Route path="/keranjang" element={<Keranjang items={cartItems} onRemove={removeFromCart} />} />
                {/* Rute untuk halaman rincian produk */}
                <Route path="/rincian-produk/:id" element={<RincianProduk />} />
            </Routes>
        </UserProvider>
    );
}

// Komponen pembungkus untuk mengaktifkan Router
export default function RootApp() {
    return (
        <Router>
            <App />
        </Router>
    );
}