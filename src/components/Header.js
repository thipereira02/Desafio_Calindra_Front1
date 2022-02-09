import React, { useState } from 'react';
import styled from 'styled-components';
import { DebounceInput } from 'react-debounce-input';
import { AiOutlineUser, AiOutlineHeart, AiOutlineShoppingCart } from 'react-icons/ai';

import logo from '../assets/logo.png';

export default function Header(){
    const [searchField, setSearchField] = useState('');
    console.log(searchField);

    return (
        <Body>
            <img src={logo} alt="logo" />
            <div>
                <DebounceSearchField
                    searching={searchField.length > 0}
                    value={searchField}
                    minLength={3}
                    debounceTimeout={300}
                    type="text"
                    placeholder="busque aqui seu produto"
                    onChange={(e) => setSearchField(e.target.value)}
                />
            </div>
            <Icons>
                <AiOutlineUser size="30px" color="#787E87" cursor="pointer" />
                <AiOutlineHeart size="30px" color="#787E87" cursor="pointer" />
                <AiOutlineShoppingCart size="30px" color="#787E87" cursor="pointer" />
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
    padding: 0 70px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    img{
        width: 180px;
    }
`;

const DebounceSearchField = styled(DebounceInput)`
    width: 600px;
    height: 45px;
    padding-left: 20px;
    font-size: 19px;
    border-top-right-radius: 8px;
    border-top-left-radius: 8px;
    border-bottom-right-radius: ${(props) => (props.searching ? '0px' : '8px')};
    border-bottom-left-radius: ${(props) => (props.searching ? '0px' : '8px')};
    background: #FFF;
    border: none;
    box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.15);
`;

const Icons = styled.div`
    width: 180px;
    display: flex;
    justify-content: space-around;
`;