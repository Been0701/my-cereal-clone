import { styled } from 'styled-components';

const Wrapper = styled.div`
    display: flex;
`
const Menu = styled.div`
    width : 150px;
`
const Title = styled.div`
    color : #808080;
    font-size : 11px;
    margin-bottom: 15px;
    font-family: 'VERLAG-BOOK';
    src: url('../styles/font/VERLAG-BOOK.OTF') format('opentype');
`
const SubMenu = styled.div`
    color : #f5f5f5;
    font-size : 12px;
    margin-bottom : 5px;
`


export default function BottomMenu() {
    return(
        <>
            <Wrapper>
                <Menu>
                    <Title>INFO</Title>
                    <SubMenu>Stocklists</SubMenu>
                    <SubMenu>Contact</SubMenu>
                    <SubMenu>Career</SubMenu>
                </Menu>
                <Menu>
                    <Title>MEDIA</Title>
                    <SubMenu>Playlists</SubMenu>
                    <SubMenu>Films</SubMenu>
                </Menu>
                <Menu>
                    <Title>WEBSITE</Title>
                    <SubMenu>Terms</SubMenu>
                    <SubMenu>Shipping</SubMenu>
                    <SubMenu>FAQs</SubMenu>
                </Menu>
            </Wrapper>
        </>
    );
}