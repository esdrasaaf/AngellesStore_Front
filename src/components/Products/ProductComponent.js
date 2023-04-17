import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import swal from "sweetalert";
import NiceButton from "../../constants/NiceButton";

export default function ProductComponent({ product, config }) {
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("token")) navigate("/");
  }, []);

  async function addProductOnCart (id) {
    try {
      const promisse = await axios.post(`${process.env.REACT_APP_BACKEND_API_URL}/cart`, {productId: id}, config)
      console.log(promisse)
      swal({
        title: "Produto adicionado com sucesso!",
        text: promisse.data,
        icon: "success"
      })
  } catch (error) {
      console.log(error.response.data)
      swal({
          title: error.data,
          text: "Logue novamente, por favor! :)",
          icon: "error"
      })        
  }
  }

  return (
    <Container>
      <img src={product.image} />

      <ProductInfo>
        <h1>{product.name}</h1>

        <div>
          <h2>Cor: {product?.Colors?.name}</h2>
          <h2>Categoria: {product?.Categories?.name}</h2>
          <h2>Marca: {product?.Brands?.name}</h2>
          <h2>Preço: R$ {product.price}</h2>
        </div>

        <span>{product.description}</span>

        <ul onClick={() => { addProductOnCart(product.id) }}>
          <NiceButton
            content={"Adicionar ao carrinho"}
            backgroundColor={"#FC7978"}
          />
        </ul>
      </ProductInfo>
    </Container>
  );
}

//Styled Components
const Container = styled.div`
  background-color: #5eb7b7;
  height: 80vh;
  width: 75%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 50px;
  box-sizing: border-box;
  padding: 70px;
  gap: 9%;

  img {
    height: 550px;
    width: 450px;
    border-radius: 20px;
  }
`;

const ProductInfo = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  font-family: "Quicksand", sans-serif;

  h1 {
    font-size: 40px;
    font-weight: 600;
    margin-bottom: 20px;
    color: white;
    cursor: default;
  }

  span {
    background-color: #ECF4F3;
    box-sizing: border-box;
    padding: 15px;
    border-radius: 20px;
    width: 100%;
    height: fit-content;
    font-size: 18px;
    font-weight: 600;
    text-align: justify;
    text-indent: 25px;
    word-spacing: 0.2px;
    line-height: 20px;
    color: #006A71;
    cursor: default;
    max-height: 140px;
    overflow-y: auto;

    ::-webkit-scrollbar {
        width: 16px;
    }

    ::-webkit-scrollbar-track {
        background: #ECF4F3;
    }

    ::-webkit-scrollbar-thumb {
        background-color: #fcd1d1;
        border-radius: 10px;
        border: 3px solid #ffffff;
    }
  }

  div {
    background-color: lightcoral;
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    height: 40%;
    font-size: 25px;
    font-weight: 500;
    color: white;
    border: 1px solid white;
    box-sizing: border-box;
    cursor: default;

    h2 {
      width: 50%;
      height: 50%;
      display: flex;
      justify-content: start;
      align-items: center;
      border: 2px solid white;
      box-sizing: border-box;
      padding-left: 15px;
    }
  }
`;
