import styled from 'styled-components';

const Row = styled.div`
    height : 600px;
    width : 100%;
`

const Img = styled.img`
    height : 540px;
`;

export default function Gallery() {
    return (
        <>
            <Row>
                <Img src='https://www.readcereal.com/wp-content/uploads/2023/04/spring23-website-696x963.jpg'/>
                <div>안녕하세요!</div>
            </Row>
            <Row>

            </Row>
            <Row>

            </Row>
            <Row>

            </Row>
            <Row>

            </Row>
        </>
    );
}