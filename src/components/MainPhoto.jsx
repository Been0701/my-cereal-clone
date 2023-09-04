import React from 'react';
import styled from 'styled-components';

const MainPhotoWrapper = styled.div`
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    height: 780px;
    width : 1150.75px;
`;

export default function MainPhoto({background}) {

    return (
      <>
          <MainPhotoWrapper style={{backgroundImage : background || 'url(https://www.readcereal.com/wp-content/uploads/2020/12/Patagonia12-1250x833.jpg)'}}>

          </MainPhotoWrapper>
      </>
    );
  }