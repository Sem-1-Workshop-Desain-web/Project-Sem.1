import React from 'react';

import { TampilanProduk } from './Tampilan-produk';
import Footer from './Footer';

//mengatur tampilan website
const Home = ({ addToCart, query}) => {

    return(
        <div>
            <div className="px-10">
                <TampilanProduk addToCart={addToCart} query={query}/>;
            </div>
            <Footer/>
        </div>

    );
};

export default Home;