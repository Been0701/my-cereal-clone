import { styled } from 'styled-components';
import BottomMenu from './BottomMenu';
import Contact from './Contact';

const Wrapper = styled.div`
    background-color: #4D4D4D;
    display: flex;
    justify-content: space-between;
    padding : 100px 37px;
`

const Description = styled.div`
    color : #808080;
    font-size: 13px;
`
const Script = styled.p`
    margin-top : 0px;
    padding-bottom : 20px;  
`
const Ci = styled.span`
    color : #808080;
`
const Logo = styled.img`
`
export default function Footer(){
    return(
        <>
            <Wrapper>
                <Description>
                    <Script>Cereal is a biannual, travel & style magazine based in the United Kingdom.<br/> Each issue focusses on a select number of destinations, alongside engaging<br/> interviews and stories on unique design, art, and fashion.</Script>
                    <Ci> © <Logo src='https://readcereal.com/wp-content/themes/cereal/img/logo.svg' alt='cereal' width='60' height='11'></Logo></Ci>
                </Description>
                <BottomMenu/>
                <Contact/>
            </Wrapper>
        </>
    );
}