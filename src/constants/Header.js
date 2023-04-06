import styled from "styled-components";
import homeLogo from "../assets/images/homeLogo.png";
import {
  HiOutlineSearch,
  HiOutlineShoppingCart,
  HiOutlineBookmark,
} from "react-icons/hi";
import { BiBookBookmark } from 'react-icons/bi';
import { AiOutlineUser } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

export default function HeaderComponent() {
  const navigate = useNavigate();

  return (
    <Container>
      <Logo>
        <img
          onClick={() => {
            navigate("/home");
          }}
          src={homeLogo}
          alt="Baby Ângelles LogoMarca"
        />
        <span>{`Olá, ${localStorage.getItem("userName")}!`}</span>
      </Logo>

      <SearchContainer>
        <div>
          <input type="text" />
          <HiOutlineSearch />
        </div>
      </SearchContainer>

      <UserInfosContainer>
        <div onClick={() => { navigate("/catalog") }}>
          <BiBookBookmark />
        </div>

        <div onClick={() => { navigate("/saves") }}>
          <HiOutlineBookmark />
        </div>

        <div onClick={() => { navigate("/user") }}>
          <AiOutlineUser />
        </div>

        <div onClick={() => { navigate("/cart") }}>
          <HiOutlineShoppingCart />
        </div>
      </UserInfosContainer>
    </Container>
  );
}

//Styled Components
const Container = styled.header`
  width: 100%;
  height: 10vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 30px;
`;
const Logo = styled.div`
  width: 26%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;

  img {
    height: 65px;
    cursor: pointer;
  }

  span {
    margin-left: 30px;
    font-size: 30px;
    font-family: "Quicksand";
    font-weight: 600;
    color: #408e91;
    cursor: default;
  }
`;

const SearchContainer = styled.div`
  width: 45%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  div {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

    svg {
      position: absolute;
      right: 10px;
      height: 20px;
      cursor: pointer;
      color: #006a71;
    }

    input {
      width: 100%;
      height: 45px;
      border: none;
      padding: 20px;
      box-sizing: border-box;
      border-radius: 15px;
    }
  }
`;

const UserInfosContainer = styled.div`
  width: 20%;
  height: 100%;
  display: flex;
  justify-content: space-between;
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
`;
