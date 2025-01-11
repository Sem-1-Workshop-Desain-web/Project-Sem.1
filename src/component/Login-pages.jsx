import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useUser } from './UserContext'; 


function LoginPages({ formType }) {
    // Mengatur bagian signup
    const [fullname, setFullname] = useState('');
    const navigate = useNavigate();

    const handleSignup = (e) => {
        e.preventDefault();
        // Simulasi pendaftaran
        login(fullname);  // Menyimpan nama pengguna
        navigate('/');  // Arahkan ke halaman utama setelah pendaftaran
    };

    // Mengatur bagian Signin
    const { login } = useUser();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        // Simulasi login
        login(email); // Menggunakan email sebagai nama pengguna (misalnya)
        navigate('/'); // Arahkan ke halaman utama setelah login
    };


    return(
        <div className="w-full h-screen flex justify-center relative">
            {/* Background Image */}
            <div className="absolute inset-0 -z-10 overflow-hidden">
                <img src="foto-login.jpeg" alt="foto kelas" className="w-full h-full object-cover filter blur-sm"/>
            </div>
            
            <div className="h-full relative z-10 items-center place-items-center place-content-center">
                {/* kembali ke halaman utama (home) bila mengklik logo */}
                <Link to="/" className="logo-login fixed top-3 left-1/2 transform -translate-x-1/2 z-20">
                    <img src="logo-final.png" alt="logo-ecommerce" className="justify-self-center h-20 cursor-pointer hover:scale-110 transition-transform duration-700 ease-in-out"></img>
                </Link>
                <div className="grid justify-center items-center mt-16">
                    <div className="grid col-span-1">
                        <div className="w-full h-full drop-shadow-2xl bg-white rounded-lg mx-auto py-4 px-6 relative">
                            <div>
                            {/*form login */}
                            {formType === "signin" && (
                                <div className="justify-items-center">
                                    <h1 className="text-3xl font-bold">KUY LOGIN!</h1>
                                    {/*menuju form daftar akun */}
                                    <span className="text-xs">Belum punya akun? <Link to="/signup" className="cursor-pointer text-blue-600 hover:underline">Gass, daftar!</Link></span>

                                    <div className="max-w-sm mx-auto mt-2">
                                        <button className="flex items-center justify-center w-full p-2 border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-100">
                                        <img src="google.png" alt="Google icon" className="w-5 h-5 mr-2"></img>
                                        <span>Login dengan Google</span>
                                        </button>
                                    </div>
                                    
                                    <div className="flex max-w-sm mx-auto items-end my-3">
                                        <div className="w-full h-3 border-t border-gray-300"></div>
                                        <span className="px-2 text-gray-500">atau</span>
                                        <div className="w-full h-3 border-t border-gray-300"></div>
                                    </div>                            
                                    
                                    {/* login manual */}
                                    <div className="max-w-sm mx-auto">
                                        <form onSubmit={handleLogin} className="space-y-6">
                                            {/*input email */}
                                            <div className="relative">
                                                <input
                                                    type="email"
                                                    id="email"
                                                    className="peer w-full border-2 rounded-lg border-gray-300 focus:outline-none focus:border-blue-500 p-2 placeholder-transparent"
                                                    placeholder="Email atau usernam"
                                                    value={email}
                                                    onChange={(e) => setEmail(e.target.value)}
                                                    required
                                                />
                                                <label
                                                    htmlFor="email"
                                                    className="absolute left-3 top-2.5 text-gray-500 bg-white px-2 transition-all transform -translate-y-6 scale-75 origin-left peer-placeholder-shown:top-8 peer-placeholder-shown:scale-100 peer-placeholder-shown:text-gray-400 peer-focus:top-2.5 peer-focus:scale-75 peer-focus:text-blue-500"
                                                >
                                                    Email
                                                </label>
                                            </div>

                                            {/*input password */}
                                            <div className="relative">
                                            <input
                                                type="password"
                                                id="password"
                                                className="peer w-full border-2 rounded-lg border-gray-300 focus:outline-none focus:border-blue-500 p-2 placeholder-transparent"
                                                placeholder="Password"
                                                value={password}
                                                onChange={(e) => setPassword(e.target.value)}
                                                required
                                            />
                                            <label
                                                htmlFor="password"
                                                className="absolute left-3 top-2.5 text-gray-500 bg-white px-2 transition-all transform -translate-y-6 scale-75 origin-left peer-placeholder-shown:top-8 peer-placeholder-shown:scale-100 peer-placeholder-shown:text-gray-400 peer-focus:top-2.5 peer-focus:scale-75 peer-focus:text-blue-500"
                                            >
                                                Password
                                            </label>
                                            </div>

                                            {/*submit */}
                                            <button
                                            type="submit"
                                            className="w-full py-2 px-4 bg-blue-400 text-white rounded-lg hover:bg-blue-500 duration-200 active:bg-blue-700"
                                            >
                                            Login
                                            </button>
                                            <span className="text-xs">Lupa password? Gimana sihh! <Link to="/forgot-password" className="cursor-pointer text-blue-600 hover:underline">Cepet restart, keburu dibobol</Link></span>
                                        </form>
                                    </div>
                                </div>
                                )}
                            </div>

                            <div>
                            {/*form daftar */}
                            {formType === "signup" && (
                                <div className="justify-items-center">
                                
                                    <div className="pb-4 text-center">
                                        <h3 className="text-3xl font-bold text-gray-800">DAFTAR, BIAR KAMI INGET</h3>
                                        <p className="text-xs text-gray-500">Spill data diri kamu lahh</p>
                                    </div>
                                    <div className="max-w-sm mx-auto">
                                        <form onSubmit={handleSignup} className="space-y-6">
                                            {/*nama lengkap */}
                                            <div className="relative">
                                                <input
                                                className="peer w-full border-2 rounded-lg border-gray-300 focus:outline-none focus:border-blue-500 p-2 placeholder-transparent"
                                                type="text"
                                                placeholder="Fullname"
                                                name="fullname"
                                                value={fullname}
                                                autoComplete="off"
                                                onChange={(e) => setFullname(e.target.value)}
                                                required
                                                />
                                                <label
                                                htmlFor="fullname"
                                                className="absolute left-3 top-2.5 text-gray-500 bg-white px-2 transition-all transform -translate-y-6 scale-75 origin-left peer-placeholder-shown:top-8 peer-placeholder-shown:scale-100 peer-placeholder-shown:text-gray-400 peer-focus:top-2.5 peer-focus:scale-75 peer-focus:text-blue-500"
                                            >
                                                Nama panjaaaannggg
                                                </label>
                                            </div>

                                            {/*email */}
                                            <div className="relative">
                                                <input
                                                className="peer w-full border-2 rounded-lg border-gray-300 focus:outline-none focus:border-blue-500 p-2 placeholder-transparent"
                                                type="email"
                                                placeholder="Email"
                                                name="email"
                                                autoComplete="off"
                                                />
                                                <label
                                                htmlFor="email"
                                                className="absolute left-3 top-2.5 text-gray-500 bg-white px-2 transition-all transform -translate-y-6 scale-75 origin-left peer-placeholder-shown:top-8 peer-placeholder-shown:scale-100 peer-placeholder-shown:text-gray-400 peer-focus:top-2.5 peer-focus:scale-75 peer-focus:text-blue-500"
                                            >
                                                Email
                                                </label>
                                            </div>

                                            {/*password */}
                                            <div className="relative">
                                                <input
                                                className="peer w-full border-2 rounded-lg border-gray-300 focus:outline-none focus:border-blue-500 p-2 placeholder-transparent"
                                                type="password"
                                                placeholder="Password"
                                                name="password"
                                                autoComplete="off"
                                                />
                                                <label
                                                htmlFor="password"
                                                className="absolute left-3 top-2.5 text-gray-500 bg-white px-2 transition-all transform -translate-y-6 scale-75 origin-left peer-placeholder-shown:top-8 peer-placeholder-shown:scale-100 peer-placeholder-shown:text-gray-400 peer-focus:top-2.5 peer-focus:scale-75 peer-focus:text-blue-500"
                                            >
                                                Password, yang susah yah
                                                </label>
                                            </div>

                                            {/*konfirmasi password */}
                                            <div className="relative">
                                                <input
                                                className="peer w-full border-2 rounded-lg border-gray-300 focus:outline-none focus:border-blue-500 p-2 placeholder-transparent"
                                                type="password"
                                                placeholder="Confirm password"
                                                name="cpassword"
                                                autoComplete="off"
                                                />
                                                <label
                                                htmlFor="cpassword"
                                                className="absolute left-3 top-2.5 text-gray-500 bg-white px-2 transition-all transform -translate-y-6 scale-75 origin-left peer-placeholder-shown:top-8 peer-placeholder-shown:scale-100 peer-placeholder-shown:text-gray-400 peer-focus:top-2.5 peer-focus:scale-75 peer-focus:text-blue-500"
                                            >
                                                Confirm Password, udah bener gak?
                                                </label>
                                            </div>

                                            {/* agree terms and condition */}
                                            <div className="relative">
                                                <div className="flex items-center">
                                                <input type="checkbox" name="agree" className="mr-2" />
                                                <span>Setujuin ajah udah, <a href="###" className="text-blue-600">terms and conditions</a>.</span>
                                                </div>
                                            </div>

                                            {/*submit */}
                                            <button
                                            type="submit"
                                            className="w-full py-2 px-4 bg-blue-400 text-white rounded-lg hover:bg-blue-500 duration-200 active:bg-blue-700"
                                            >
                                            Login
                                            </button>

                                        </form>

                                    </div>

                                    <span className="text-xs">Sudah punya akun? <Link to="/signin" className="cursor-pointer text-blue-600 hover:underline">Langsung login!!</Link></span>
                                </div>
                            )}
                            </div>

                            <div>
                                {/*form lupa password */}
                                {formType === "forgot-password" && (
                                <div className="justify-items-center">
                                    <h1 className="text-3xl font-bold">LUPA PASSWORD? KOKK BISAAA??!</h1>
                                    <p className="text-gray-500 font-medium text-lg">Sini, masukin emailmu buat direset passwordnya!</p>

                                    <div className="max-w-sm mx-auto">
                                        <form className="space-y-6" noValidate id="kt_login_forgot_form">

                                            {/*email */}
                                            <div className="relative mt-4">
                                                <input
                                                className="peer w-full border-2 rounded-lg border-gray-300 focus:outline-none focus:border-blue-500 p-2 placeholder-transparent"
                                                type="email"
                                                placeholder="Email"
                                                name="email"
                                                autoComplete="off"
                                                />
                                                <label
                                                    htmlFor="email"
                                                    className="absolute left-3 top-2.5 text-gray-500 bg-white px-2 transition-all transform -translate-y-6 scale-75 origin-left peer-placeholder-shown:top-8 peer-placeholder-shown:scale-100 peer-placeholder-shown:text-gray-400 peer-focus:top-2.5 peer-focus:scale-75 peer-focus:text-blue-500"
                                                >
                                                    Email
                                                </label>
                                            </div>

                                            {/*submit */}
                                            <div className="flex flex-wrap space-x-4">
                                                <button
                                                type="button"
                                                id="kt_login_forgot_submit"
                                                className="bg-blue-400 text-white font-semibold text-base px-6 py-3 rounded-md my-3 hover:bg-blue-500 duration-200 active:bg-blue-700"
                                                >
                                                Submit
                                                </button>
                                                <Link to="/signin"
                                                type="button"
                                                
                                                id="kt_login_forgot_cancel"
                                                className="btn bg-gray-100 text-blue-400 font-semibold text-base px-6 py-3 rounded-md my-3 hover:bg-gray-200 active:bg-gray-400 active:text-white"
                                                >
                                                Cancel
                                                </Link>
                                            </div>
                                        </form>
                                    </div>
                                    
                                </div>
                                    
                                )}
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default LoginPages