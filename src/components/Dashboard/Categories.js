import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";

export default function CategoryComponent () {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        async function getCategories() {
            try {
                const response = await axios.get(`${process.env.REACT_APP_BACKEND_API_URL}/categories`);
                setCategories(response.data);
            } catch (error) {
                console.log(error);
            }
          }

          getCategories();
    }, [])

    return (
        <Container>
            <h1>Categorias</h1>
            <CategoryList>
                {categories.map((c, idx) => {
                    return <Category key={idx}>
                        {c.name}
                    </Category>
                })}
            </CategoryList>
        </Container>
    );
}

//Styled Components
const Container = styled.div`
    width: 100%;
    display: flex;
    box-sizing: border-box;
    padding: 15px;
    align-items: center;
    flex-direction: column;
    gap: 20px;

    h1 {
        font-family: 'Lexend Deca', sans-serif;
        font-size: 20px;
        font-weight: 500;
    }
`
const CategoryList = styled.ul`
    display: flex;
    flex-direction: column;
    background-color: red;
    box-sizing: border-box;
    padding: 10px;
    width: 90%;
    gap: 10px;
`
const Category = styled.li`
    background-color: blue;
    display: flex;
    align-items: center;
    height: 30px;
    cursor: pointer;
`