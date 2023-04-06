import FooterComponent from "../../constants/Footer";
import HeaderComponent from "../../constants/Header";
import styled from "styled-components";
import { BsPencil } from "react-icons/bs"
import NiceButton from "../../constants/NiceButton";

export default function UserPageIndex () {
    return (
        <Container>
            <HeaderComponent />
            
            <MidContent>
                <UserCard>
                    <UserInfos>
                        <UserPhoto>
                            {localStorage.getItem('userPhoto') ? <img src={localStorage.getItem('userPhoto')}/> : <img src="https://img.freepik.com/vetores-premium/icone-de-circulo-de-usuario-anonimo-estilo-simples-de-ilustracao-vetorial-com-sombra-longa_520826-1931.jpg" />}
                            <NiceButton content={"Editar Foto"} backgroundColor={"#FF8882"}>
                                <BsPencil/>
                            </NiceButton>
                        </UserPhoto>

                        <UserNameAndLogout>
                            <div>
                                <span>{localStorage.getItem('userName') ? localStorage.getItem('userName') : "Visitante"}</span>
                                <NiceButton content={"Editar Nome"} backgroundColor={"#FF8882"}>
                                    <BsPencil/>
                                </NiceButton>
                            </div>

                            <LogoutSection>
                                <button>Sair da conta</button>
                            </LogoutSection>
                        </UserNameAndLogout>
                    </UserInfos>

                </UserCard>
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
`
const UserCard = styled.div`
    background-color: #006A71;
    height: 80%;
    width: 70%;
    padding: 20px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-radius: 30px;
`
const LogoutSection = styled.section`
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 0px;

    button {
        background: #FF8882;
        backface-visibility: hidden;
        border-radius: .375rem;
        border-style: solid;
        border-width: .125rem;
        box-sizing: border-box;
        color: #fff;
        cursor: pointer;
        display: inline-block;
        font-family: Circular,Helvetica,sans-serif;
        font-size: 1.125rem;
        font-weight: 700;
        letter-spacing: -.01em;
        line-height: 1.3;
        padding: .875rem 1.125rem;
        position: relative;
        text-align: left;
        text-decoration: none;
        transform: translateZ(0) scale(1);
        transition: transform .2s;
        user-select: none;
        -webkit-user-select: none;
        touch-action: manipulation;

        :not(:disabled):hover {
            transform: scale(1.05);
        }

        :not(:disabled):hover:active {
            transform: scale(1.05) translateY(.125rem);
        }

        :focus {
            outline: 0 solid transparent;
        }

        :focus:before {
            content: "";
            left: calc(-1*.375rem);
            pointer-events: none;
            position: absolute;
            top: calc(-1*.375rem);
            transition: border-radius;
            user-select: none;
        }

        :focus:not(:focus-visible) {
            outline: 0 solid transparent;
        }

        :focus:not(:focus-visible):before {
            border-width: 0;
        }

        :not(:disabled):active {
            transform: translateY(.125rem);
        }
    }
`
const UserInfos = styled.div`
    height: 80%;
    width: 80%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: 20px;
    padding: 20px;
    border-radius: 20px;
    background-color: #5EB7B7;
`
const UserPhoto = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    background-color: #96D1C7;
    width: fit-content;
    height: 80%;
    padding: 15px;
    border-radius: 20px;
    
    img {
        height: 270px;
        width: 270px;
        border-radius: 20px;
    }
`
const UserNameAndLogout = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    height: 65%;
    width: 50%;

    div {
        background-color: #96D1C7;
        display: flex;
        width: 80%;
        height: 50%;
        padding: 20px;
        gap: 20px;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border-radius: 15px;
    }

    span {
        font-size: 30px;
        font-family: 'Quicksand', sans-serif;
        font-weight: 600;
        background-color: #FCD1D1;
        width: 90%;
        text-align: center;
        flex-wrap: wrap;
        padding: 10px;
        border-radius: 20px;
    }
`