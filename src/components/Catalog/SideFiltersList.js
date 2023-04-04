import { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import FilterComponent from './FIlter';

export default function SideFiltersComponents ({ config }) {
    const [brands, setBrands] = useState([]);
    const [colors, setColors] = useState([]);
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        async function getFilters() {
            try {
                const brandsResponse = await axios.get(`${process.env.REACT_APP_BACKEND_API_URL}/brands`);
                const colorsResponse = await axios.get(`${process.env.REACT_APP_BACKEND_API_URL}/colors`);
                const categoriesResponse = await axios.get(`${process.env.REACT_APP_BACKEND_API_URL}/categories`);

                setBrands(brandsResponse.data);
                setColors(colorsResponse.data);
                setCategories(categoriesResponse.data);
            } catch (error) {
                console.log(error);
            }
        }

        getFilters();
    }, []);
    
    return (
        <Container>
            <h1>Filtros</h1>

            <div>
                <h2>Marcas</h2>
                <FilterComponent filterArray={brands}/>
            </div>

            <div>
                <h2>Categorias</h2>
                <FilterComponent filterArray={categories}/>
            </div>

            <div>
                <h2>Cores</h2>
                <FilterComponent filterArray={colors}/>
            </div>
        </Container>
    )
}

//Styled Components
const Container = styled.div`
    width: 20%;
    height: 100%;
    gap: 30px;
    display: flex;
    flex-direction: column;
    border-right: 1px solid black;
    box-sizing: border-box;
    padding-left: 20px;

    h2 {
        font-size: 30px;
        font-family: 'Quicksand', sans-serif;
        font-weight: 600;
        color: #006A71;
        margin-bottom: 10px;
    }

    h1 {
        font-size: 40px;
        font-family: 'Quicksand', sans-serif;
        font-weight: 600;
        color: #006A71;
        margin-top: 30px;
        margin-bottom: 20px;
    }
`