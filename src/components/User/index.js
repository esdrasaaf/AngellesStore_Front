import FooterComponent from "../../constants/Footer";
import HeaderComponent from "../../constants/Header";
import styled from "styled-components";
import { AiOutlineCamera } from "react-icons/ai";
import { HiOutlinePencilAlt } from "react-icons/hi";

export default function UserPageIndex () {
    return (
        <Container>
            <HeaderComponent />
            
            <MidContent>
                <UserCard>
                    <UserInfos>
                        <UserPhoto>
                            <AiOutlineCamera />
                            {localStorage.getItem('userPhoto') ? <img src={localStorage.getItem('userPhoto')}/> : <img src="https://img.freepik.com/vetores-premium/icone-de-circulo-de-usuario-anonimo-estilo-simples-de-ilustracao-vetorial-com-sombra-longa_520826-1931.jpg" />}
                        </UserPhoto>

                        <UserNameAndLogout>
                            <div>
                                <h1>Minha Conta</h1>

                                <span>
                                    {localStorage.getItem('userName') ? localStorage.getItem('userName') : "Visitante"}
                                    <HiOutlinePencilAlt />
                                </span>

                                <span>
                                    {localStorage.getItem('userEmail') ? localStorage.getItem('userEmail') : "seuemail@.com"}
                                    <HiOutlinePencilAlt />
                                </span>


                                <span>
                                    {localStorage.getItem('userPassword') ? localStorage.getItem('userPassword') : "Sua senha"}
                                    <HiOutlinePencilAlt />
                                </span>
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
        width: fit-content;
        background-color: #ffffff00;
        backface-visibility: hidden;
        border-bottom: 1px solid white;
        border-top: none;
        border-left: none;
        border-right: none;
        box-sizing: border-box;
        color: #fff;
        cursor: pointer;
        display: inline-block;
        font-family: Circular,Helvetica,sans-serif;
        font-size: 22px;
        font-weight: 700;
        letter-spacing: -.01em;
        line-height: 1.3;
        padding-bottom: 10px;
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
    border-radius: 20px;
    background-color: #5EB7B7;
`
const UserPhoto = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width: 50%;
    height: 90%;
    border-radius: 20px;
    position: relative;
    
    img {
        height: 100%;
        width: 90%;
        border-radius: 20px;
    }

    svg {
        cursor: pointer;
        position: absolute;
        bottom: 0;
        background-color: #FFFFFF60;
        font-size: 50px;
        width: 90%;
        height: 15%;
        border-radius: 0px 0px 20px 20px;
        padding: 10px;
        box-sizing: border-box;
        color: white;
    }
`
const UserNameAndLogout = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    width: 50%;
    height: 90%;
    border-radius: 15px;
    padding: 10px;
    box-sizing: border-box;

    div {
        display: flex;
        width: 80%;
        height: 45%;
        gap: 15px;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        box-sizing: border-box;

        h1 {
            font-size: 40px;
            font-family: 'Quicksand', sans-serif;
            font-weight: 600;
            color: white;
            margin-bottom: 20px;
        }

        span {
            font-size: 20px;
            font-family: 'Quicksand', sans-serif;
            font-weight: 600;
            width: 100%;
            text-align: center;
            flex-wrap: wrap;
            padding: 10px 20px;
            border-radius: 20px;
            color: white;
            display: flex;
            align-items: center;
            justify-content: space-between;

            svg {
                font-size: 40px;
                cursor: pointer;
            }
        }


    }

`