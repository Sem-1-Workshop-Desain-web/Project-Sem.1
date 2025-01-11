// Komponen Footer untuk menampilkan informasi kontak dan akun sosial
const Footer = () => {
    return (
        <div className="text-white px-20 pt-12 pb-10 bg-emerald-500 w-full h-fit">
            {/* Grid utama footer dengan 3 kolom di layar besar */}
            <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 mb-8">
                
                {/* Bagian kontak pembuat */}
                <div className="col-span-1 grid gap-1">
                    <h2 className="text-4xl font-bold">Contact Me</h2>
                    <div className="pl-5 mt-3">
                        {/* Informasi kontak pribadi */}
                        <p>+62 8573 0540 210</p>
                        <h4 className="text-xl font-semibold mt-2">Private Email:</h4>
                        <p className="ml-4">rizalmaulanaairlanggad4itb2024@gmail.com</p>
                        {/* Informasi kontak universitas */}
                        <h4 className="text-xl font-semibold mt-1">University Email:</h4>
                        <p className="ml-4">arizali@it.student.pens.ac.id</p>
                    </div>
                </div>

                {/* Bagian akun sosial */}
                <div className="xl:col-span-2 col-span-1">
                    <h2 className="text-4xl font-bold">Social</h2>
                    <div className="flex w-[70%] max-h-7 pl-5 mt-3 gap-4">
                        {/* Akun Instagram */}
                        <div className="flex w-fit">
                            <img src="./Footer/instagram.png" alt="instagram" className="rounded-lg mr-2" />
                            <p>instagram</p>
                        </div>
                        {/* Akun Twitter */}
                        <div className="flex w-fit">
                            <img src="./Footer/twitter.jpg" alt="twitter" className="rounded-lg mr-2" />
                            <p>twitter</p>
                        </div>
                        {/* Akun LinkedIn */}
                        <div className="flex w-fit">
                            <img src="./Footer/linkedin.webp" alt="linkedin" className="rounded-lg mr-2" />
                            <p>linkedin</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Hak cipta di bagian bawah */}
            <p className="text-xs float-right">IT-B COMMERCE @2024 Designed by Rizal Maulana Airlangga</p>
        </div>
    );
};

export default Footer;
