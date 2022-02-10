/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';

export default function List({ products, searchField }) {
    console.log(products);

    if (products.length === 0) {
        return (
            <Body>
                <Text>Nenhum resultado encontrado para &quot;{searchField}&quot;</Text>
            </Body>
        );
    }

    return (
        <Body>
            <Text>Encontramos {products.length} {products.length === 1 ? 'produto' : 'produtos'}</Text>
            {products && products.map(p => {
                <h2 key={p.id}>{p.name}</h2>;
            })}
        </Body>
    );
}

const Body = styled.div`
    width: 80%;
    margin: 140px auto;
`;

const Text = styled.h1`
    font-size: 40px;
    font-weight: 700;
    color: #787E87;
`;