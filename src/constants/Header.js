import styled from "styled-components";
import homeLogo from "../assets/images/homeLogo.png";
import { HiOutlineSearch, HiOutlineShoppingCart, HiOutlineBookmark } from "react-icons/hi";
import { AiOutlineUser } from "react-icons/ai";

export default function HeaderComponent () {
    return (        
        <Container>
            <Logo>
                <img src={homeLogo} alt="Baby Ângelles LogoMarca"/>
                <span>{`Olá, ${localStorage.getItem('userName')}!`}</span>
            </Logo>
            
            <SearchContainer>
                <div>
                    <input type="text"/>
                    <HiOutlineSearch />
                </div>
            </SearchContainer>

            <UserInfosContainer>
                <div>
                    <HiOutlineBookmark/>
                </div>

               <div>
                    <AiOutlineUser />
                </div>

                <div>
                    <HiOutlineShoppingCart/> 
                </div>
            </UserInfosContainer>
        </Container>
    )
}

//Styled Components
const Container = styled.div`
    width: 100%;
    height: 10vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 30px;
`
const Logo = styled.div`
    background-color: blue;
    width: 20%;
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;

    img {
        height: 65px;
        cursor: pointer;
    }

    span {
        font-size: 30px;
        font-family: 'Quicksand';
        font-weight: 600;
        color: #408E91;
        cursor: default;
    }
`

const SearchContainer = styled.div`
    background-color: yellow;
    width: 45%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    div {
        background-color: pink;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;

        svg {
            position: absolute;
            right: 10px;
            height: 20px;
            cursor: pointer;
            color: #006A71;
        }

        input {
            width: 500px;
            height: 45px;
            border: none;
            padding: 10px;
            box-sizing: border-box;
            border-radius: 15px;
        }
    }
`

const UserInfosContainer = styled.div`
background-color: red;
    width: 20%;
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;

    div {
        height: 100%;
        width: 30%;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;

        :hover {
            background-color: rgba(202, 234, 247, 0.8);
            transition: ease-in-out, 0.3s;
        }
    }

    svg {
        font-size: 35px;
    }
`