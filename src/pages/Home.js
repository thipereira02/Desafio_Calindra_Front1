import React, { useEffect, useState } from 'react';

import Header from '../components/Header';

import { getProducts } from '../services/server';

export default function Home() {
    const [products, setProducts] = useState([]);
    console.log(products);

    useEffect(() => {
        getProducts().then(res => setProducts(res.data));
    }, []);

    return (
        <Header />
    );
}