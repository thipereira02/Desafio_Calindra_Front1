/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import styled from 'styled-components';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AiOutlineUser, AiOutlineHeart, AiOutlineShoppingCart, AiOutlineSearch } from 'react-icons/ai';

import logo from '../assets/logo.png';
import { getProducts } from '../services/server';

export default function Header({ searchField, setSearchField, setProducts }){
    const [loading, setLoading] = useState(false);

    function searchProduct(e) {
        e.preventDefault();
        setLoading(true);

        getProducts()
            .then(res => {
                setLoading(false);
                filterResult(res.data.products);
            });
    }

    function filterResult(arr) {
        const filteredArr = arr.filter(item => item.name.includes(searchField));
        setProducts(filteredArr);
    }
    
    function toHomePage() {
        setProducts('');
        setSearchField('');
    }

    return (
        <Body>
            <img src={logo} alt="logo" onClick={toHomePage}/>
            <form onSubmit={searchProduct}>
                <Input 
                    type="text" 
                    placeholder="busque aqui seu produto" 
                    value={searchField} 
                    onChange={e => setSearchField(e.target.value)}
                    onInvalid={e => e.target.setCustomValidity('Insira um palavra para realizar a busca.')} 
                    onInput={e => e.target.setCustomValidity('')}
                    required 
                />
                <Button type="submit" disabled={loading}>
                    <AiOutlineSearch size="20px" color="#787E87" />
                </Button>
            </form>
            <Icons>
                <AiOutlineUser onClick={() => toast.info('Em breve')} size="30px" color="#787E87" cursor="pointer" />
                <AiOutlineHeart onClick={() => toast.info('Em breve')} size="30px" color="#787E87" cursor="pointer" />
                <AiOutlineShoppingCart onClick={() => toast.info('Em breve')} size="30px" color="#787E87" cursor="pointer" />
            </Icons>
        </Body>
    );
}

const Body = styled.div`
    height: 100px;
    position: fixed;
    top: 0;
    right: 0;
    width: 100%;
    background: #FFF7EF;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.15);
    padding: 0 120px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    img{
        width: 180px;
        cursor: pointer;
    }

    form{
        display: flex;
    }
`;

const Input = styled.input`
    width: 530px;
    height: 45px;
    padding-left: 20px;
    font-size: 21px;
    border-radius: 8px;
    background: #FFF;
    border: none;
    box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.15);
`;

const Button = styled.button`
    background-color: #FDCFA5;
    margin-left: 3px;
    border-radius: 8px;
    color: #FFF;
    border: none;
    opacity: ${props => props.disabled ? '0.7' : '1'};
    cursor: ${props => props.disabled ? 'inherit': 'pointer'};
    height: 45px;
    width: 8%;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.15);
`;

const Icons = styled.div`
    width: 180px;
    display: flex;
    justify-content: space-around;
`;