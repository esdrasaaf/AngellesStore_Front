import FooterComponent from "../../constants/Footer";
import HeaderComponent from "../../constants/Header";
import styled from "styled-components";
import { BsPencil } from "react-icons/bs"

export default function UserPageIndex () {
    return (
        <Container>
            <HeaderComponent />
            
            <MidContent>
                <UserInfos>
                    <div>
                        {localStorage.getItem('userPhoto') ? <img src={localStorage.getItem('userPhoto')}/> : <img src="https://img.freepik.com/vetores-premium/icone-de-circulo-de-usuario-anonimo-estilo-simples-de-ilustracao-vetorial-com-sombra-longa_520826-1931.jpg" />}
                        <BsPencil/>
                    </div>

                    <div>
                        {localStorage.getItem('userName') ? localStorage.getItem('userName') : "Visitante"}
                        <BsPencil/>
                    </div>
                </UserInfos>
            </MidContent>

            <FooterComponent />
        </Container>
    )
}

//Styled Components
const Container = styled.div`
`
const MidContent = styled.div`
    min-height: 90vh;
    height: 90vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: red;
`
const UserInfos = styled.div`
    background-color: #006A71;
    height: 80%;
    width: 80%;
    padding: 20px;
    display: flex;
    justify-content: space-around;
    align-items: center;

    img {
        height: 300px;
        width: 300px;
        border-radius: 20px;
    }
`