import { useContext } from 'react';
import styled from 'styled-components';
import FooterComponent from '../../constants/Footer';
import HeaderComponent from '../../constants/Header';
import CatalogListComponent from './CatalogList';
import { UserInfoContext } from '../../contexts/UserContext';
import SideFiltersComponents from './SideFiltersList';

export default function CatalogPageIndex () {
    const { config } = useContext(UserInfoContext);

    return (
        <Container>
            <HeaderComponent />
            
            <MidContainer>
                <SideFiltersComponents />
                <CatalogListComponent config={config}/>
            </MidContainer>

            <FooterComponent />
        </Container>
    )
}

//Styled Components
const Container = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`
const MidContainer = styled.div`
    min-height: 95vh;
    width: 100%;
    display: flex;
    padding: 40px 0px;
    box-sizing: border-box;
`;