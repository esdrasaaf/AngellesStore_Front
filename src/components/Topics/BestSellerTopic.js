import styled from "styled-components";
import { useNavigate } from 'react-router-dom';

export default function BestSellerTopicComponent({ title, contentArray }) {
  const navigate = useNavigate();

  return (
    <Container>
      <h1>{title}</h1>

      <List>
        {contentArray.map((c, idx) => {
          return (
            <ListCard key={idx} onClick={() => navigate(`/product/${c.id}`)}>
              <img src={c.image} alt="fotozinha ai" />

              <div>
                <span>{c.name}</span>
                <span>Preço: R$ {c.price}</span>
                <span>N° de vendas: {c.numberOfSales}</span>
              </div>
            </ListCard>
          );
        })}
      </List>
    </Container>
  );
}

//Styled Components
const Container = styled.div`
  width: 100%;

  h1 {
    margin-left: 30px;
    background-color: #94d0cc;
    width: fit-content;
    font-family: "Quicksand", sans-serif;
    font-size: 30px;
    color: #006a71;
    padding: 20px;
    border-radius: 15px 15px 0px 0px;
  }
`;
const List = styled.ul`
  background-color: #94d0cc;
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
`;
const ListCard = styled.li`
  background-color: #ff7e67;
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

  &:hover {
    opacity: 0.8;
    cursor: pointer;
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 5px;
    border-radius: 5px;
    background-color: #45526c;
    width: 95%;
    height: 22%;
    font-family: "Lexend Deca", sans-serif;
    font-size: 15px;
    color: lightpink;
  }

  img {
    height: 170px;
    width: 80%;
    border-radius: 10px;
  }
`;
