import React, { useState } from 'react';

import Header from '../components/Header';
import CarouselCover from '../components/CarouselCover';
import List from '../components/List';

export default function Home() {
    const [products, setProducts] = useState('');
    const [searchField, setSearchField] = useState('');

    return (
        <>
            <Header
                searchField={searchField}
                setSearchField={setSearchField} 
                setProducts={setProducts} />
            {(typeof(products) === 'string') ?
                <CarouselCover />
                :
                <List products={products} />
            }
        </>
    );
}