import styled from "styled-components";
import CategoryComponent from "./Categories";

export default function DashboardComponent () {
    return (
        <Container>
            <CategoryComponent/>
        </Container>
    );
}

//Styled Components
const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    width: 10%;
    height: 100%;
`