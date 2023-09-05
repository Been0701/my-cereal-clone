import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const MainPhotoWrapper = styled.div`
  display: flex;
  align-items: end;
  a {
    text-decoration : none;
  }
`

const Photo = styled.div`
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    height: 780px;
    width : 1150.75px;
    background-image: ${({ background }) => (background ? `${background}` : 'url(https://www.readcereal.com/wp-content/uploads/2020/12/Patagonia12-1250x833.jpg)')};
`;

const Caption = styled.div`
  writing-mode : vertical-rl;
  margin : 0 0 5px 20px;
  font-size : 10px;
  color: #999999;
`;

export default function MainPhoto({background,caption,url}) {
    const [imageLoaded, setImageLoaded] = useState(false);

    useEffect(() => {
      const image = new Image();
      image.src = background;
      
      image.onload = () => {
        setImageLoaded(true);
      };
      
      // 이미지 로드 중 에러 처리
      image.onerror = () => {
        setImageLoaded(true); // 에러 발생 시에도 로드 상태를 변경하여 빈 이미지를 표시하지 않도록 함
      };
    }, [background]);

    return (
      <>
        {imageLoaded && (
          <>
          <MainPhotoWrapper>
            <a href={`/${(url).toLowerCase()}`}>
              <Photo background={background}>
              </Photo>
            </a>
            <a href={`/${(url).toLowerCase()}`}>
              <Caption>{caption}</Caption>
            </a>
          </MainPhotoWrapper>
          </>
        )}
      </>
    );
  }