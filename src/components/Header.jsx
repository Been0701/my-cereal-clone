import React from 'react';
import styled from 'styled-components';
import { IoIosSearch } from "react-icons/io";
import { BsPerson } from "react-icons/bs";
import { HiOutlineMenuAlt4 } from "react-icons/hi";

const HeaderWrapper = styled.header`
    position : sticky;
    top : 0;
    z-index: 1000;
    height : 60px;
    padding : 8px 38px;
    margin-bottom : 8px;
    display: flex;
    justify-content: space-between;
`

const Title = styled.a`
    color: #333;
    text-decoration: none;
    text-indent : -99999px;
    background-image: url('https://www.readcereal.com/wp-content/themes/cereal/img/logo.svg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    display: inline-block;
    width : 120px;
    height: 50px;
`

const MenuIcons = styled.div`
    width : 160px;
    display : flex;
    justify-content: space-evenly;
    align-items: center;
    svg {
        width : 1.5rem;
        height : 1.5rem
    }
`

export default function Header() {

  return (
    <HeaderWrapper>
        <Title href='../App.js'>
            CEREAL
        </Title>
        <MenuIcons>
            <BsPerson/>
            <IoIosSearch />
            <HiOutlineMenuAlt4/>
        </MenuIcons>
    </HeaderWrapper>
  ) ;
}