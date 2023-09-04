import React from 'react';
import styled from 'styled-components';

const MainPhoto = styled.div`
    background-image: url('https://www.readcereal.com/wp-content/uploads/2020/12/Patagonia12-1250x833.jpg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    height: 600px;
`

const Category = styled.div`
    
`

export default function MenuSection() {
  
  return (
    <>
        <MainPhoto/>
        <Category/>
    </>
  );
}