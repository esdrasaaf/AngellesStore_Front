import styled from "styled-components"

export default function CartValue ({ purchases }) {
    let value = 0

    purchases.map((p) => {
        return value += p.Products.price
    })

    return (
        <Container>
            <span>Total a pagar: </span>
            <span>{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value)}</span>
        </Container>
    )
}

//Styled Components
const Container = styled.div`
    background-color: rgba(0, 0, 0, 20%);
    margin-top: 20px;
    padding: 20px 30px;
    font-family: 'Quicksand', sans-serif;
    font-size: 30px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 25px;
    width: 95.5%;
`