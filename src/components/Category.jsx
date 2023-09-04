import styled from 'styled-components';

const SectionWrapper = styled.div`
`;

const Section = styled.ul`
list-style : none;
margin-bottom : 40px;
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

export default function Category({onCategoryHover}) {

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

    const handleCategoryHover = (category) => {
        onCategoryHover(categoryImages[category]);
    };
    
    return (
      <>
        <SectionWrapper>
            <Section>
                <ListItem><h6>SUBJECT</h6></ListItem>
                <ListItem><h2 onMouseEnter={() => handleCategoryHover('TRAVEL')}>TRAVEL</h2></ListItem>
                <ListItem><h2 onMouseEnter={() => handleCategoryHover('ART')}>ART</h2></ListItem>
                <ListItem><h2 onMouseEnter={() => handleCategoryHover('DESIGN')}>DESIGN</h2></ListItem>
                <ListItem><h2 onMouseEnter={() => handleCategoryHover('STYLE')}>STYLE</h2></ListItem>
                <ListItem><h2 onMouseEnter={() => handleCategoryHover('CITY_GUIDES')}>CITY GUIDES</h2></ListItem>
            </Section>
            <Section>
                <ListItem><h6>MEDIA</h6></ListItem>
                <ListItem><h2 onMouseEnter={() => handleCategoryHover('FILMS')}>FILMS</h2></ListItem>
                <ListItem><h2 onMouseEnter={() => handleCategoryHover('PLAYLIST')}>PLAYLIST</h2></ListItem>
            </Section>
            <Section>
                <ListItem><h2 onMouseEnter={() => handleCategoryHover('SHOP')}>SHOP</h2></ListItem>
            </Section>
        </SectionWrapper>
      </>
    );
  }