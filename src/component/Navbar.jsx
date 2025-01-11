import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useUser } from './UserContext';

import SearchBar from './SearchBar';

function Navbar({ onSearch, setQuery }) {
    const { user, logout } = useUser(); // Mengakses user dan fungsi logout

    const [showDropdown, setShowDropdown] = useState(false);

    // Tutup dropdown saat mengklik di luar form
    const handleBodyClick = () => {
      setShowDropdown(false);
    };

  return (
    <nav className="flex px-7 py-2 items-center bg-white border-b-slate-100 border-b-2 w-full fixed z-50">
        {/*kembali ke halaman utama (home) saat logo diklik */}
        <a href="/" className="logo-login">
            <img src="logo-final.png" alt="logo-ecommerce" className="max-h-20 max-w-full cursor-pointer hover:scale-110 transition-transform duration-500 ease-in-out"></img>
        </a>

        {/* Kategori barang, belum dapat digunakan (belum ada isinya)*/}
        <ul>
            <li className="relative group">
                <span className="cursor-pointer text-black hover:bg-slate-100 duration-200 active:bg-slate-200 rounded-md py-2 px-3">Kategori</span>
                <div className="absolute hidden group-hover:block bg-white text-black rounded shadow-lg mt-2">
                    <a href="/elektronik" className="block px-4 py-2 hover:bg-gray-100">Elektronik</a>
                    <a href="/kendaraan" className="block px-4 py-2 hover:bg-gray-100">Kendaraan</a>
                    <a href="/olahraga" className="block px-4 py-2 hover:bg-gray-100">Olahraga</a>
                </div>
            </li>
        </ul>

        {/*form search bar */}
        <div onClick={handleBodyClick} className="relative w-[50%] mx-3">
            <SearchBar setQuery={setQuery} showDropdown={showDropdown} setShowDropdown={setShowDropdown} onSearch={onSearch} />
        </div>

        {/*logo untuk menuju ke halaman keranjang */}
        <Link to="/keranjang">
            <img src="/shopping.png" alt="logo-trolly" className="cursor-pointer hover:bg-slate-100 duration-200 active:bg-slate-200 rounded-md py-2 px-1 max-h-10 max-w-full"/>
        </Link>

        {/*border kanan */}
        <div className="w-3 h-7 border-r border-slate-200"></div>
        

            {/* Menampilkan nama pengguna atau login/signup */}
            {user ? (
                <div className="flex ml-5 text-gray-600 items-center">
                    <span className="truncate max-w-xs sm:max-w-sm md:max-w-md">Halo, {user.name.length > 10 ? user.name.slice(0, 10) + "..." : user.name}</span>
                    <button
                        onClick={logout}
                        className="ml-3 py-1 px-4 font-bold bg-white border rounded-lg border-red-600 text-red-600 transform hover:-translate-y-1 transition duration-300 ease-in-out hover:drop-shadow-md"
                    >
                        Logout
                    </button>
                </div>
            ) : (
                <div className="flex items-center">
                    <Link to="/signin" className="py-1 px-4 font-bold bg-white border rounded-lg border-green-600 ml-5 transform hover:-translate-y-1 transition duration-300 ease-in-out hover:drop-shadow-md text-green-600 absolute">
                        Login
                    </Link>
                    <Link to="/signup" className="py-1 px-3 font-bold bg-green-600 border rounded-lg ml-28 transform hover:-translate-y-1 transition duration-300 ease-in-out hover:drop-shadow-md text-white absolute">
                        Daftar
                    </Link>
                </div>
            )}
    </nav>
  );
}

export default Navbar;