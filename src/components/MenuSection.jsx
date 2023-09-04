import React, { useState } from 'react';
import MainPhoto from './MainPhoto';
import Category from './Category';
import styled from 'styled-components';


const SectionWrapper = styled.div`
  margin-left : 38px;
  margin-right : 53px;
  display : flex;
  justify-content : space-between;
`

export default function MenuSection() {
  const [mainPhotoBg, setMainPhotoBg] = useState('');
  
  return (
    <>
      <SectionWrapper>
        <MainPhoto background={mainPhotoBg}/>
        <Category onCategoryHover={setMainPhotoBg}/>
      </SectionWrapper>
    </>
  );
}