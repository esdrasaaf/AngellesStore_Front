import styled from "styled-components";

export default function HistoricTopicComponent ({ title, contentArray }) {
    return (
        <Container>
            <h1>{title}</h1>

            <List>
                {contentArray.map((c, idx) => {
                    return <ListCard key={idx}> 
                                <img src={c.Products.image} alt="fotozinha ai"/>

                                <div>
                                    <span>{c.Products.name}</span>
                                    <span>Preço: R$ {c.Products.price}</span>
                                </div>
                            </ListCard>
                })}
            </List>
        </Container>
    )
}

//Styled Components
const Container = styled.div`
    width: 100%;

    h1 {
        margin-left: 30px;
        background-color: #94D0CC;
        width: fit-content;
        font-family: 'Quicksand', sans-serif;
        font-size: 30px;
        color: #006A71;
        padding: 20px;
        border-radius: 15px 15px 0px 0px;
    }
`
const List = styled.ul`
    background-color: #94D0CC;
    width: 100%;
    height: 330px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    overflow-x: scroll;
    gap: 80px;
    padding: 15px;
    box-sizing: border-box;
    border-radius: 5px;

    ::-webkit-scrollbar {
        width: 16px;
    }

    ::-webkit-scrollbar-track {
        background: #aee1e1;
    }

    ::-webkit-scrollbar-thumb {
        background-color: #fcd1d1;
        border-radius: 10px;
        border: 3px solid #ffffff;
    }
`
const ListCard = styled.li`
    background-color: #FF7E67;
    width: 200px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    box-sizing: border-box;
    padding: 15px;
    flex-shrink: 0;
    border-radius: 15px;

    div {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        padding: 5px;
        border-radius: 5px;
        background-color: #45526C;
        width: 95%;
        height: 22%;
        font-family: 'Lexend Deca', sans-serif;
        font-size: 15px;
        color: lightpink;
    }

    img {
        height: 170px;
        width: 80%;
        border-radius: 10px;
    }
`