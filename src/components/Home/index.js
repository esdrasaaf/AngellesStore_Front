import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import HeaderComponent from "../../constants/Header";
import DashboardComponent from "../Dashboard/index";
import CatalogComponent from "./Catalog";
import PromoCarrousselComponent from "./PromoCarroussel";

export default function HomePageIndex () {
    const navigate = useNavigate();

    useEffect (() => {
        if (!localStorage.getItem("token")) navigate("/");
      }, [])

    return (
        <Container>
            <HeaderComponent/>

            <MidContainer>
                <DashboardComponent/>

                <MidContent>
                    <PromoCarrousselComponent />
                    <CatalogComponent />
                </MidContent>
            </MidContainer>
            
        </Container>
    );
}

//Styled Components
const Container = styled.div`
    width: 100vw;
    height: 100vh;
`

const MidContainer = styled.div`
    width: 100vw;
    height: 90vh;
    display: flex;
`
const MidContent = styled.div`
    background-color: pink;
    border-radius: 50px 0 0 0;
    width: 90%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`