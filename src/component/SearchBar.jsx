import React, { useState, useRef, useEffect } from 'react';

function SearchBar({ setQuery, showDropdown, setShowDropdown, onSearch }) {
  // State lokal untuk menangani input dari pengguna
  const [input, setInput] = useState(''); 
  // Referensi untuk mendeteksi klik di luar komponen
  const searchRef = useRef(null);

  // Fungsi untuk mengubah input lokal dan mengirimkan query ke komponen parent
  const handleInputChange = (e) => {
    setInput(e.target.value); // Mengatur state input berdasarkan nilai yang dimasukkan pengguna
    setQuery(e.target.value); // Mengirim nilai input ke App.js melalui prop
  };

  // Fungsi untuk menangani pencarian saat ikon diklik
  const handleSearch = () => {
    setQuery(input); // Mengirim input ke komponen TampilanProduk
    setShowDropdown(false); // Menutup dropdown setelah klik ikon pencarian
  };

  // Fungsi untuk menangani pencarian ketika tombol Enter ditekan
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      setQuery(input); // Mengirimkan query ke komponen parent
    }
  };

  // Efek untuk menutup dropdown ketika pengguna mengklik di luar elemen input
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowDropdown(false); // Menutup dropdown
      }
    };
    // Menambahkan event listener untuk klik di luar elemen
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      // Membersihkan event listener saat komponen dilepas
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [setShowDropdown]);

  return (
    <div className="relative w-full" ref={searchRef}>
      {/* Input teks untuk pengguna mengetikkan pencarian */}
      <input
        type="text"
        value={input} // Mengikat nilai input dengan state lokal
        onChange={handleInputChange} // Memperbarui state saat nilai input berubah
        onClick={(e) => {
          e.stopPropagation(); // Mencegah event bubbling
          setShowDropdown(true); // Menampilkan dropdown pencarian
        }}
        onKeyDown={handleKeyPress} // Memeriksa jika tombol Enter ditekan
        placeholder="Cari produk..." // Placeholder untuk input
        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" // Gaya Tailwind
      />
      {/* Tombol untuk melakukan pencarian */}
      <button
        onClick={handleSearch} // Menjalankan pencarian saat tombol diklik
        className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 text-gray-600" // Posisi tombol menggunakan utilitas Tailwind
      >
        {/* Ikon pencarian */}
        <img src="./search.png" alt="search" className="h-6 w-auto" />
      </button>

      {/* Dropdown rekomendasi pencarian */}
      {showDropdown && input && (
        <div className="absolute z-10 w-full bg-white border border-gray-300 rounded-md shadow-lg mt-1">
          {/* Tempat untuk menambahkan daftar rekomendasi pencarian */}
        </div>
      )}
    </div>
  );
}

export default SearchBar;
