import styled from "styled-components";
import Header from "../../constants/Header";
import CartList from "./CartList";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { UserInfoContext } from "../../contexts/UserContext";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";
import NiceButton from "../../constants/NiceButton";

export default function CartComponent () {
    const [cartItens, setCartItens] = useState([]);
    const [status, setStatus] = useState([]);
    const { config } = useContext(UserInfoContext);
    const navigate = useNavigate();
    
    useEffect(() => {
        async function getCartItens() {
            try {
                const promisse = await axios.get(`${process.env.REACT_APP_BACKEND_API_URL}/cart`, config)
                console.log(promisse)
                setCartItens(promisse.data)
            } catch (error) {
                console.log(error.response.data)
                swal({
                    title: error.response.data,
                    text: "Logue novamente, por favor! :)",
                    icon: "error"
                })        
            }
        };

        getCartItens();
    }, [status]);

    return (
        <Container>
            <Header/>

            {
                cartItens.length === 0 
                    ? 
                <EmptyCart>
                    <h1>Seu Carrinho</h1>
                    <span>
                        {`Seu carrinho está vazio! Para adicionar algo no carrinho você pode ir na página do catálogo! :)`}
                        <NiceButton onClick={() => { navigate("/home"); }} content={"Página do Catálogo"}  backgroundColor={"#FFAFB0"}/> 
                    </span>
                </EmptyCart>
                    :
                <CartList purchases={cartItens} setStatus={setStatus} config={config}/>
            }
        </Container>
    )
}

//Styled Components
const Container = styled.div`
    height: 100vh;
    width: 100vw;
`;
const EmptyCart = styled.div`
    margin: 40px auto;
    width: 80vw;
    height: auto;
    display: flex;
    flex-direction: column;
    font-family: "Quicksand", sans-serif;
    font-weight: 600;
    color: #ffffff;

    h1 {
        font-size: 50px;
        text-shadow: 0px 2px 4px rgba(0, 0, 0, 0.7);
        cursor: default;
    };

    span {
        margin-top: 30px;
        background-color: rgba(0, 0, 0, 20%);
        font-size: 25px;
        padding: 30px;
        border-radius: 10px;
        cursor: default;
        gap: 30px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    };
` ;