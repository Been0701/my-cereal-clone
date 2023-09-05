import styled from 'styled-components';

const SectionWrapper = styled.div`
`;

const Section = styled.ul`
list-style : none;
margin-bottom : 40px;
a {
    color : #551A8B;
    text-decoration : none;
}
`;

const ListItem = styled.li`
text-align: right;
h2 {
    margin-block-start: 0px;
    cursor: pointer;
    letter-spacing : 8px;
}
h6 {
    margin-right : 8px;
    margin-block-end : 0.5rem;
}
`;

export default function Category({onCategoryHover,onCategoryHoverTxt,deliverCategory}) {

    const categoryImages = {
        TRAVEL: 'url(https://www.readcereal.com/wp-content/uploads/2020/12/Patagonia12-1250x833.jpg)',
        ART: 'url(https://www.readcereal.com/wp-content/uploads/2021/06/Les-Palmiers1-1250x833.jpg)',
        DESIGN: 'url(https://www.readcereal.com/wp-content/uploads/2021/01/KFM-landscape1_edit-1250x833.jpg)',
        STYLE: 'url(https://www.readcereal.com/wp-content/uploads/2021/03/Cartier-4-1250x833.jpg)',
        CITY_GUIDES: 'url(https://www.readcereal.com/wp-content/uploads/2021/12/JGFrancis_OP2019_M1_DAY3C_CANYON_0021-1250x833.jpg)',
        FILMS: 'url(https://www.readcereal.com/wp-content/uploads/2021/10/00009951008-2-1250x833.jpg)',
        PLAYLIST: 'url(https://www.readcereal.com/wp-content/uploads/2021/09/Summer-playlist-grid-1250x833.jpg)',
        SHOP: 'url(https://www.readcereal.com/wp-content/uploads/2022/05/Home-1250x833.jpg)'
      };
    const captionText = {
        TRAVEL: 'PATAGONIA, CHILE',
        ART: 'LES PALMIERS, JEAN DUNAND',
        DESIGN: 'KOREA FURNITURE MUSEUM, SEOUL',
        STYLE: 'ICONIC FORMS - CARTIER',
        CITY_GUIDES: 'LOS ANGELES',
        FILMS: 'DAN PEARSON, HILLSIDE',
        PLAYLIST: 'SUMMER PLAYLIST 2021',
        SHOP: 'LOS ANGELES'
    };

    const handleCategoryHover = (category) => {
        onCategoryHover(categoryImages[category]);
        onCategoryHoverTxt(captionText[category]);
        deliverCategory(category);
    };

    return (
      <>
        <SectionWrapper>
            <Section>
                <ListItem><h6>SUBJECT</h6></ListItem>
                <a href='/travel'><ListItem><h2 onMouseEnter={() => handleCategoryHover('TRAVEL')}>TRAVEL</h2></ListItem></a>
                <a href='/art'><ListItem><h2 onMouseEnter={() => handleCategoryHover('ART')}>ART</h2></ListItem></a>
                <a href='/design'><ListItem><h2 onMouseEnter={() => handleCategoryHover('DESIGN')}>DESIGN</h2></ListItem></a>
                <a href='/style'><ListItem><h2 onMouseEnter={() => handleCategoryHover('STYLE')}>STYLE</h2></ListItem></a>
                <a href='/city_guides'><ListItem><h2 onMouseEnter={() => handleCategoryHover('CITY_GUIDES')}>CITY GUIDES</h2></ListItem></a>
            </Section>
            <Section>
                <ListItem><h6>MEDIA</h6></ListItem>
                <a href='/films'><ListItem><h2 onMouseEnter={() => handleCategoryHover('FILMS')}>FILMS</h2></ListItem></a>
                <a href='/playlist'><ListItem><h2 onMouseEnter={() => handleCategoryHover('PLAYLIST')}>PLAYLIST</h2></ListItem></a>
            </Section>
            <Section>
                <a href='/shop'><ListItem><h2 onMouseEnter={() => handleCategoryHover('SHOP')}>SHOP</h2></ListItem></a>
            </Section>
        </SectionWrapper>
      </>
    );
  }