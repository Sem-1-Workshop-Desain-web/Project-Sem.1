import React, { useState } from "react";
import DaftarBarang from "./Daftar-barang"; // Impor daftar barang dari file eksternal

// Komponen untuk menampilkan daftar produk
export const TampilanProduk = ({ addToCart, query }) => {
  const [selectedProduct, setSelectedProduct] = useState(null); // State untuk menyimpan produk yang dipilih

  // Fungsi untuk menangani klik pada produk tertentu
  const handleProductClick = (product) => {
    setSelectedProduct(product); // Set produk yang terpilih
  };

  // Fungsi untuk kembali ke tampilan daftar produk
  const handleBack = () => {
    setSelectedProduct(null); // Reset state produk terpilih
  };

  // Filter produk berdasarkan query (pencarian)
  const filteredProducts = DaftarBarang.Home_produk.filter((product) =>
    (query && product.nama.toLowerCase().includes(query.toLowerCase())) || query === ''
  );

  return (
    <div className="pt-32">
      {selectedProduct ? (
        // Jika ada produk terpilih, tampilkan rincian produk
        <RincianProduk product={selectedProduct} onBack={handleBack} addToCart={addToCart} />
      ) : (
        // Jika tidak ada produk terpilih, tampilkan daftar produk
        <div>
          <div className="p-5 z-0">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
              {filteredProducts.length > 0 ? (
                filteredProducts.map((item) => (
                  <div
                    key={item.id}
                    className="bg-white border rounded-lg shadow-md w-full h-fit overflow-hidden cursor-pointer hover:shadow-xl hover:h-full transform transition ease-in-out duration-400"
                    onClick={() => handleProductClick(item)} // Klik untuk memilih produk
                  >
                    <div className="h-36 flex items-center justify-center">
                      <img
                        src={item.image}
                        alt={item.nama}
                        className="max-w-full max-h-full object-cover"
                      />
                    </div>
                    <div className="px-4 grid gap-1 pb-11 mt-3">
                      <h2 className="text-xs">{item.nama}</h2>
                      <h3 className="text-lg font-semibold mt-1">{item.harga}</h3>
                      <div className="flex items-center h-4">
                        <img src="/map.png" alt="lokasi" className="h-full mr-2" />
                        <h2 className="text-xs text-slate-600">{item.lokasi}</h2>
                      </div>
                      <div className="flex items-center h-4">
                        <img src="/star.png" alt="rate" className="h-full mr-2" />
                        <h2 className="text-xs text-slate-600">{item.rate}</h2>
                        <div className="w-3 h-4 border-r border-slate-400"></div>
                        <h2 className="text-xs ml-2 text-slate-600">{item.terjual} terjual</h2>
                      </div>
                      <p className="text-sm text-gray-700 overflow-hidden text-ellipsis line-clamp-3">
                        {item.jumlah}
                      </p>
                    </div>
                  </div>
                ))
              ) : (
                // Pesan jika tidak ada produk yang ditemukan
                <p>No products found</p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// Komponen untuk menampilkan rincian produk
export const RincianProduk = ({ product, onBack, addToCart }) => {
  const [selectedVariant, setSelectedVariant] = useState(product.variants[0] || null); // State untuk varian produk
  const [quantity, setQuantity] = useState(1); // State untuk jumlah produk

  // Fungsi untuk mengganti varian yang dipilih
  const handleVariantChange = (variant) => {
    setSelectedVariant(variant);
    setQuantity(1); // Reset jumlah produk saat varian berubah
  };

  // Hitung total harga berdasarkan varian dan jumlah produk
  const totalPrice = selectedVariant ? quantity * parseFloat(selectedVariant.harga.replace(/[^0-9,]+/g, "")) : 0;

  // Fungsi untuk menambahkan produk ke keranjang
  const handleAddToCart = () => {
    addToCart({ ...product, selectedVariant }, quantity);
  };

  return (
    <div className="p-5">
      <button onClick={onBack} className="text-blue-500 mb-4">
        &larr; Kembali
      </button>
      <div className="bg-white shadow-lg rounded-lg p-7">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          {/* Bagian Gambar Produk */}
          <div className="col-span-4">
            <img
              src={selectedVariant.image}
              alt="Gambar Produk"
              className="w-full h-64 object-cover rounded-lg"
            />
          </div>

          {/* Bagian Detail Produk */}
          <div className="grid gap-2 col-span-5">
            <h1 className="text-2xl font-bold">{product.nama} : {selectedVariant.color}</h1>
            <div className="flex items-center h-4">
              <p className="text-sm">
                Terjual <span className="text-slate-500">{product.terjual}</span>
              </p>
              <div className="w-3 h-4 border-r border-slate-400 mx-2"></div>
              <img src="/star.png" alt="Rate" className="h-full mr-2" />
              <p className="text-sm">
                {product.rate} <span className="text-slate-500">({product.total_rate})</span>
              </p>
            </div>
            <h2 className="text-3xl font-bold my-3">{selectedVariant.harga}</h2>
            <p className="text-sm">Stok: {selectedVariant.stock}</p>

            {/* Pilihan Varian Produk */}
            <div className="flex gap-2 mt-4">
              {product.variants.map((variant, idx) => (
                <button
                  key={idx}
                  onClick={() => handleVariantChange(variant)}
                  className={`px-4 py-2 border rounded-xl hover:border-green-600 ${
                    variant.color === selectedVariant.color
                      ? "bg-green-100 text-green-700 border-green-700"
                      : "bg-white text-gray-500"
                  }`}
                >
                  {variant.color}
                </button>
              ))}
            </div>
            <hr className="my-3" />
            <div>
              <p className="text-sm">Lokasi: {product.lokasi}</p>
            </div>
          </div>

          {/* Bagian Penambahan ke Keranjang */}
          <div className="col-span-3 grid gap-3 border border-slate-300 rounded-lg p-3 w-full h-fit">
            <h2 className="text-base font-bold">Atur jumlah produk</h2>
            <div className="flex h-10 items-center gap-2">
              <img src={selectedVariant.image} alt="gambar produk" className="h-full rounded-md" />
              <p>{selectedVariant.color}</p>
            </div>
            <hr />
            <div className="flex gap-1 items-center">
              <input
                type="number"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                min="1"
                max={selectedVariant.stock}
                className="w-20 h-8 border border-slate-300 rounded-lg py-1 pl-3 text-center"
              />
              <p className="text-sm">Stok: {selectedVariant.stock}</p>
            </div>
            <div className="flex justify-between gap-2">
              <p>Subtotal</p>
              <h3 className="text-lg font-semibold">Rp. {totalPrice.toLocaleString("id-ID", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</h3>
            </div>
            <div className="p-5 justify-self-center">
              <button
                onClick={handleAddToCart}
                className="bg-blue-500 transition ease-in-out duration-300 hover:bg-blue-600 active:bg-blue-700 text-white px-4 py-2 rounded-xl"
              >
                Tambah ke Keranjang
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
