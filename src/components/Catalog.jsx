import { styled } from "styled-components"

const Wrapper = styled.div`
    background-color : #BDBEBF;
    padding : 60px 10px;
`

const Box1 = styled.div`
    display : flex;
    margin : 0px 25.5px;
    padding : 0px 27px;
`

const Box2 = styled.div`
    margin : 0px 25.5px;
    padding : 0px 27px;
`

const MainMagagine = styled.img`
    width : 1171px;
    margin-right : 60px;
    margin-bottom : 60px;
`

const Description = styled.div`
    display: flex;
    flex-direction : column;
    align-items: center;
    h1 {
        margin-top : 140px;
        letter-spacing : 0.5rem;
    }
    p {
        font-size : 13px;
        margin-bottom : 40px;
    }
    a {
        font-size : 10px;
        font-family: 'VERLAG-BOOK';
        src: url('../styles/font/VERLAG-BOOK.OTF') format('opentype');
        padding : 10px 20px;
        border : 0.5px solid #404040;
        text-decoration : none;
    
        &:hover {
            background-color: #404040; 
            color : #F4F4F4
        }
    }
`

const Menu = styled.div`
    color : #ffffff;
    font-size : 11px;
    letter-spacing : 0.1rem;
    margin-bottom : 20px;
`
const Products = styled.div`
    display : flex;
    justify-content: space-between;
    padding-bottom : 40px;
`
const Product = styled.div`
    img {
        width : 548px;
        margin-bottom : 20px;
    }
    div:nth-child(2) {
        color : #ffffff;
        letter-spacing : 0.15rem;
        margin-bottom : 10px;
    }
    div:nth-child(3) {
        font-size: 10px;
        color : #808080;
        font-family: 'VERLAG-BOOK';
        src: url('../styles/font/VERLAG-BOOK.OTF') format('opentype');
        margin-bottom : 8px;
    }
    div:nth-child(4) {
        letter-spacing : 0.1rem;
        font-size : 11px;
        color : #808080;
        font-family: 'VERLAG-BOOK';
        src: url('../styles/font/VERLAG-BOOK.OTF') format('opentype');
    }
`

export default function Catalog(){
    return(
        <>
            <Wrapper>
                <Box1>
                    <MainMagagine src="https://www.readcereal.com/wp-content/uploads/2019/05/cereal-1455x935.jpg"></MainMagagine>
                    <Description>
                        <h1>Volumes from the archive</h1>
                        <p>ON THE SUBJECT OF TRAVEL, ART, DESIGN AND STYLE</p>
                        <a href="/shop">SHOP</a>
                    </Description>
                </Box1>
                <Box2>
                    <Menu>FEATURED PRODUCTS</Menu>
                    <Products>
                        <Product>
                            <img src="https://www.readcereal.com/wp-content/uploads/2021/11/LA-cover-1032x663.jpg"/>
                            <div>Los Angeles Guidebook</div>
                            <div>CEREAL CITY GUIDE</div>
                        </Product>
                        <Product>
                            <img src="https://www.readcereal.com/wp-content/uploads/2021/11/Copenhagen-cover-1032x663.jpg"/>
                            <div>Copenhagen Guidebook</div>
                            <div>CEREAL CITY GUIDE</div>
                        </Product>
                        <Product>
                            <img src="https://www.readcereal.com/wp-content/uploads/2021/05/Cereal-volume-21-shop-cover-1032x663.jpg"/>
                            <div>Cereal Volume 21</div>
                            <div>CEREAL CITY GUIDE</div>
                            <div>SOLD OUT</div>
                        </Product>
                    </Products>
                </Box2>
            </Wrapper>
        </>
    )
}