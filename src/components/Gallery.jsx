import styled from 'styled-components';

const GalleryWrapper = styled.div`
  margin-left : 38px;
  margin-right : 53px;
  display: flex;
  flex-direction: column;
`;

const Row = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 30px;
`;

const ImageWrapper1 = styled.div`
    flex: ${(props) => (props.index === 1 ? 1 : 2)}; 
    margin-right: ${(props) => (props.index === 2 ? 0 : '40px')};
`;

const ImageWrapper2 = styled.div`
    flex: ${(props) => (props.index === 1 ? 2 : 0.94)};
    margin-right: ${(props) => (props.index === 3 ? 0 : '40px')};
`

const ImageWrapper3 = styled.div`
    flex: ${(props) => (props.index === 3 ? 2 : 0.94)};
    margin-right: ${(props) => (props.index === 3 ? 0 : '40px')};
`

const ImageWrapper4 = styled.div`
    flex: 1;
    margin-right: ${(props) => (props.index === 3 ? 0 : '40px')};
`

const Img = styled.img`
    width: 100%;
    height : 70vh;
`;

const Category = styled.div`
    font-family: 'VERLAG-BOOK';
    src: url('../styles/font/VERLAG-BOOK.OTF') format('opentype');
    font-size : 10px;
    color : #999999;
    margin-top : 6px;
`

const Title = styled.div`
    font-size: 14px;
    color : #808080;
    margin-top : 6px;
    margin-bottom : 12px;
`

const Description = styled.div`
    font-size : 12px;
    color : #404040;
`

export default function Gallery() {
    return (
        <>
            <GalleryWrapper>
                <Row>
                    <ImageWrapper1 index={1}>
                        <Img src='https://www.readcereal.com/wp-content/uploads/2023/04/spring23-website-696x963.jpg'/>
                        <Category>MUSIC  |  PLAYLIST</Category>
                        <Title>Spring Playlist 2023</Title>
                        <Description>A selection of songs for spring</Description>
                    </ImageWrapper1>
                    <ImageWrapper1 index={2}>
                        <Img src='https://www.readcereal.com/wp-content/uploads/2022/09/Schindler-3-1455x935.jpg'/>
                        <Category>DESIGN  |  ARCHITECTURE  |  LOS ANGELES</Category>
                        <Title>Spring Playlist 2023</Title>
                        <Description>A selection of songs for spring</Description>
                    </ImageWrapper1>
                </Row>
                <Row>
                    <ImageWrapper2 index={1}>
                        <Img src='https://www.readcereal.com/wp-content/uploads/2022/08/HARTUNGBERGMAN_01_final2-727x467.jpg'/>
                        <Category>MUSIC  |  PLAYLIST</Category>
                        <Title>Spring Playlist 2023</Title>
                        <Description>A selection of songs for spring</Description>
                    </ImageWrapper2>
                    <ImageWrapper2 index={2}>
                        <Img src='https://www.readcereal.com/wp-content/uploads/2022/07/TIWA1-348x481.jpg'/>
                        <Category>DESIGN  |  ARCHITECTURE  |  LOS ANGELES</Category>
                        <Title>Spring Playlist 2023</Title>
                        <Description>A selection of songs for spring</Description>
                    </ImageWrapper2>
                    <ImageWrapper2 index={3}>
                        <Img src='https://www.readcereal.com/wp-content/uploads/2022/07/HM6_home-696x963.jpg'/>
                        <Category>DESIGN  |  ARCHITECTURE  |  LOS ANGELES</Category>
                        <Title>Spring Playlist 2023</Title>
                        <Description>A selection of songs for spring</Description>
                    </ImageWrapper2>
                </Row>
                <Row>
                    <ImageWrapper3 index={1}>
                        <Img src='https://www.readcereal.com/wp-content/uploads/2022/06/Summer_2022-website-696x963.jpg'/>
                        <Category>MUSIC  |  PLAYLIST</Category>
                        <Title>Spring Playlist 2023</Title>
                        <Description>A selection of songs for spring</Description>
                    </ImageWrapper3>
                    <ImageWrapper3 index={2}>
                        <Img src='https://www.readcereal.com/wp-content/uploads/2022/06/OB-6-696x963.jpg'/>
                        <Category>DESIGN  |  ARCHITECTURE  |  LOS ANGELES</Category>
                        <Title>Spring Playlist 2023</Title>
                        <Description>A selection of songs for spring</Description>
                    </ImageWrapper3>
                    <ImageWrapper3 index={3}>
                        <Img src='https://www.readcereal.com/wp-content/uploads/2022/06/Garce_home-1455x935.jpg'/>
                        <Category>DESIGN  |  ARCHITECTURE  |  LOS ANGELES</Category>
                        <Title>Spring Playlist 2023</Title>
                        <Description>A selection of songs for spring</Description>
                    </ImageWrapper3>
                </Row>
                <Row>
                    <ImageWrapper4 index={1}>
                        <Img src='https://www.readcereal.com/wp-content/uploads/2022/05/Su3-696x963.jpg'/>
                        <Category>MUSIC  |  PLAYLIST</Category>
                        <Title>Spring Playlist 2023</Title>
                        <Description>A selection of songs for spring</Description>
                    </ImageWrapper4>
                    <ImageWrapper4 index={2}>
                        <Img src='https://www.readcereal.com/wp-content/uploads/2022/01/Tourette2-696x963.jpg'/>
                        <Category>DESIGN  |  ARCHITECTURE  |  LOS ANGELES</Category>
                        <Title>Spring Playlist 2023</Title>
                        <Description>A selection of songs for spring</Description>
                    </ImageWrapper4>
                    <ImageWrapper4 index={3}>
                        <Img src='https://www.readcereal.com/wp-content/uploads/2021/12/LVH-6-696x963.jpg'/>
                        <Category>DESIGN  |  ARCHITECTURE  |  LOS ANGELES</Category>
                        <Title>Spring Playlist 2023</Title>
                        <Description>A selection of songs for spring</Description>
                    </ImageWrapper4>
                </Row>
                <Row>

                </Row>
            </GalleryWrapper>
        </>
    );
}