import React, { useState } from "react";

const Keranjang = ({ items, onRemove }) => {
    // State untuk menyimpan jumlah produk di setiap item dalam keranjang
    const [quantities, setQuantities] = useState(items.map(item => item.quantity));

    // Mengubah jumlah produk yang dipilih di keranjang
    const handleQuantityChange = (index, value) => {
        const newQuantities = [...quantities];
        newQuantities[index] = value; // Update jumlah produk sesuai input
        setQuantities(newQuantities);
    };

    // Menghitung total harga seluruh item dalam keranjang
    const calculateTotalPrice = () => {
        return items.reduce((total, item, index) => {
            const quantity = quantities[index]; // Jumlah produk berdasarkan index
            // Harga total per produk
            return total + (parseFloat(item.selectedVariant.harga.replace(/[^0-9,]+/g, "")) * quantity);
        }, 0); // Inisialisasi total dengan 0
    };

    // Menghitung total jumlah produk di keranjang
    const calculateTotalQuantity = () => {
        return quantities.reduce((total, quantity) => total + parseInt(quantity), 0); // Menjumlahkan semua quantity
    };
    
    return (
        <div className="bg-slate-100 h-fit">
            <div className="py-32 w-[90%] mx-auto">
                <h1 className="text-2xl font-bold mb-4">Keranjang Belanja</h1>
                <div>
                    {/* Tampilkan pesan jika keranjang kosong */}
                    {items.length === 0 ? (
                        <p className="text-gray-500">Keranjang Anda kosong.</p>
                    ) : (
                        <div className="flex w-full h-fit gap-9">
                            <div className="grid w-full">
                                <div className="bg-white border rounded-2xl w-full py-5 px-7">
                                    {/* Render setiap item dalam keranjang */}
                                    {items.map((item, index) => (
                                        <div key={index}>
                                            {item.selectedVariant ? (
                                                <div className="flex flex-auto gap-4">
                                                    {/* Gambar produk */}
                                                    <img src={item.selectedVariant.image} alt={item.nama} className="h-24 w-24 object-cover rounded-lg" />
                                                    
                                                    <div className="grid w-full">
                                                        {/* Peringatan jika stok kurang dari 5 */}
                                                        {parseInt(item.selectedVariant.stock) < 5 && (
                                                            <p className="text-red-500 text-xs">Sisa {item.selectedVariant.stock}</p>
                                                        )}
                                                        <h3 className="text-lg font-semibold">{item.nama}</h3>
                                                        <p className="text-slate-500">{item.selectedVariant.color}</p>
                                                        {/* Tombol untuk menghapus item dari keranjang */}
                                                        <img 
                                                            src="/trash.png"
                                                            className="justify-self-end mt-2 w-6 cursor-pointer transition-transform duration-300 ease-in-out hover:-rotate-12"
                                                            onClick={() => onRemove(index)}
                                                            alt={item.nama}
                                                        />             
                                                    </div>

                                                    <div className="flex-none w-[26%] justify-items-end">
                                                        {/* Harga produk */}
                                                        <h3 className="text-lg font-bold">{item.selectedVariant.harga}</h3>
                                                        {/* Input untuk mengatur jumlah produk */}
                                                        <input
                                                            type="number"
                                                            value={quantities[index]}
                                                            onChange={(e) => handleQuantityChange(index, e.target.value)}
                                                            min="1"
                                                            max={item.selectedVariant.stock}
                                                            className="w-20 h-8 border border-slate-300 rounded-lg py-1 pl-3 text-center mt-5"
                                                        />
                                                    </div>
                                                </div>
                                            ) : (
                                                <p className="text-red-500">Informasi produk tidak tersedia.</p>
                                            )}
                                            {/* Garis horizontal sebagai pemisah antar item */}
                                            {index < items.length - 1 && items.length > 1 && <hr className="my-5 border-slate-300" />}
                                        </div>
                                    ))}
                                </div>
                            </div>
                            {/* Ringkasan belanja */}
                            <div className="grid bg-white border rounded-2xl w-[40%] h-full py-5 px-8">
                                <h2 className="text-lg font-bold">Ringkasan belanja</h2>
                                <div className="flex justify-between mt-5">
                                    <p>Total</p>
                                    {/* Tampilkan total harga dengan format mata uang */}
                                    <p className="text-lg font-semibold justify-self-end">Rp. {calculateTotalPrice().toLocaleString("id-ID", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
                                </div>
                                <hr className="my-5 border-slate-300"/>
                                {/* Tombol checkout dengan jumlah item */}
                                <button className="py-3 px-5 justify-items-center bg-green-500 rounded-2xl text-white font-bold hover:bg-green-600 active:bg-green-700 transition duration-300 ease-in-out">CheckOut ({calculateTotalQuantity()})</button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Keranjang;
