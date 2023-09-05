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
  const [caption, setCaption] = useState('');
  const [url, setUrl] = useState('');
  
  return (
    <>
      <SectionWrapper>
        <MainPhoto background={mainPhotoBg} caption={caption} url={url}/>
        <Category onCategoryHover={setMainPhotoBg} onCategoryHoverTxt={setCaption} deliverCategory={setUrl}/>
      </SectionWrapper>
    </>
  );
}