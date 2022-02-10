/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';

export default function List({ products, searchField }) {
    console.log(products);

    if (products.length === 0) {
        return (
            <Body>
                <Text size={products.length}>Nenhum resultado encontrado para &quot;{searchField}&quot;</Text>
            </Body>
        );
    }

    return (
        <Body>
            <Text size={products.length}>Encontramos {products.length} {products.length === 1 ? 'produto' : 'produtos'}</Text>
            <p>p.name</p>
            <p>p.name</p>
        </Body>
    );
}

const Body = styled.div`
    width: 80%;
    margin: 140px auto;

    p{  
        font-size: 25px;
        font-weight: 700;
        margin-bottom: 7px;
        color: #262626;
    }
`;

const Text = styled.h1`
    font-size: ${props => props.size === 0 ? '40px' : '20px'};
    font-weight: 700;
    color: #787E87;
    margin-bottom: 10px;
`;