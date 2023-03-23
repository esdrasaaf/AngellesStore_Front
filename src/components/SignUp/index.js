import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import signUpBackground from "../../assets/images/signUpBackground.jpg";
import olhoAberto from "../../assets/images/olhoAberto.svg"
import olhoFechado from "../../assets/images/olhoFechado.svg"
import LoginButton from "../../constants/LoginButton";
import signUpVetor from "../../assets/images/signUpVetor.png"

export default function SignUpIndex() {
  const [passwordIsVisible, setPasswordIsVisible] = useState([]);

  function switchVisibility (inputId) {
    if (!passwordIsVisible.includes(inputId)) {
      let newArray = [...passwordIsVisible, inputId];
      setPasswordIsVisible(newArray);
    }

    if (passwordIsVisible.includes(inputId)) {
      let newArray = passwordIsVisible.filter((id) => id !== inputId);
      setPasswordIsVisible(newArray);
    }
  }

  return (
    <Container style={{ backgroundImage: `url(${signUpBackground})`}}>
      <Background>
        <img src={signUpVetor}/>

        <RightPart>
          <h1>Cadastro</h1>

          <SignInForm>
              <input id="name" placeholder="Name" type="text" name="name" autoComplete="off" required />
              <input id="email" placeholder="E-mail" type="email" name="email" autoComplete="off" required />
              <div>
                <input id="password" placeholder="Password" type={passwordIsVisible.includes(1) ? "text" : "password"} name="Password" required />
                <span id="passwordSpan"><img onClick={() => switchVisibility(1)} src={passwordIsVisible.includes(1) ? olhoFechado : olhoAberto}/></span>
              </div>
              <div>
                <input id="confirmPassword" placeholder="Confirm Password" type={passwordIsVisible.includes(2) ? "text" : "password"} name="Password" required />
                <span id="confirmPasswordSpan"><img onClick={() => switchVisibility(2)} src={passwordIsVisible.includes(2) ? olhoFechado : olhoAberto}/></span>
              </div>
              <LoginButton type="submit" backgroundColor={"#FF7E67"} content={'Confirmar'}/>
          </SignInForm>

          <p>Já possui um conta? <Link to={"/"}>Logue aqui!</Link></p> 
        </RightPart>
      </Background>
    </Container>
  );
}

//Styled Components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const Background = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgba(222, 218, 209, 0.70);
  width: 65%;
  height: 75%;
  border-radius: 20px;
  box-sizing: border-box;
  padding: 50px;

  img {
    padding-right: 10%;
    padding-left: 4%;
    border-right: 2px solid #194350;
  }
`

const RightPart = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 90%;
  width: 30%;

  h1 {
    font-family: 'Quicksand', sans-serif;
    font-size: 40px;
    font-weight: 600;
    color: #408E91;
    width: 90%;
    margin-bottom: 30px;
    cursor: default;
  }

  p {
    color: #408E91;
    font-size: 20px;
    font-family: 'Lexend Deca', sans-serif;
    margin-top: 60px;
    cursor: default;

    a {
      color: #408E91;
    }
  }
`

const SignInForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
  width: 90%;

  div {
    position: relative;
    width: 100%;
  }

  span {
    position: absolute;
    right: 10px;
    bottom: 0px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
        margin-bottom: 0px;
        border-radius: 0px;
        cursor: pointer;
        height: 35px;
        width: 25px;
        border-right: none;
        padding-right: none;
    }
  }

  input {
    height: 50px;
    width: 100%;
    border-radius: 12.5px;
    box-sizing: border-box;
    border: none;
    padding-left: 40px;
    background-color: #ECF4F3;
    font-family: 'Montserrat';
    font-weight: 500;
    font-size: 15px;
    color: rgba(74,74,74,1);
  }

  #name {
    box-sizing: border-box;
    background-image: url("https://cdn4.iconfinder.com/data/icons/eon-ecommerce-i-1/32/user_profile_man-256.png");
    background-repeat: no-repeat;
    background-position: left;
    background-position-x: 4.5%;
    background-size: 20px;
  }

  #email {
    box-sizing: border-box;
    background-image: url("https://cdn1.iconfinder.com/data/icons/document-edit-line/64/Document-doc-file-email-message-order-paper-256.png");
    background-repeat: no-repeat;
    background-position: left;
    background-position-x: 4.5%;
    background-size: 20px;
  }

  #password {
    box-sizing: border-box;
    background-image: url("https://cdn4.iconfinder.com/data/icons/basic-ui-line-3/24/UI-lock-256.png");
    background-repeat: no-repeat;
    background-position: left;
    background-position-x: 4.5%;
    background-size: 20px;
  }

  #confirmPassword {
    box-sizing: border-box;
    background-image: url("https://cdn4.iconfinder.com/data/icons/basic-ui-line-3/24/UI-lock-256.png");
    background-repeat: no-repeat;
    background-position: left;
    background-position-x: 4.5%;
    background-size: 20px;
  }
`;
