import styled from "styled-components";

export default function CategoryTopicComponent ({ title, contentArray }) {
    return (
        <Container>
            <h1>{title}</h1>

            <List>
                {contentArray.map((c, idx) => {
                    return <ListCard key={idx}> 
                                <img src={c.image} alt="fotozinha ai"/>
                                <span>{c.name}</span>
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
    height: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    gap: 30px;
    box-sizing: border-box;
    padding: 15px;
    flex-shrink: 0;
    border-radius: 15px;
    font-family: 'Lexend Deca', sans-serif;
    font-size: 20px;
    color: #45526C;

    img {
        height: 150px;
        width: 150px;
        border-radius: 100px;
    }
`