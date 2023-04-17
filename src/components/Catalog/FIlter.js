import styled from 'styled-components';
import NiceCheckbox from '../../constants/NiceCheckbox';

export default function FilterComponent ({ filterArray }) {

    return (
        <Container>
            {
              filterArray.map((x, idx) => 
                { return (
                    <div key={idx}>
                        <NiceCheckbox idx={x.name}/>
                        <label htmlFor={`${x.name}`}>{x.name}</label>
                    </div>
                )}
            )}
        </Container>
    )
}

//Styled Components
const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;

    div {
        display: flex;
        align-items: center;
        padding: 5px;
        gap: 5px;
        font-family: 'Lexend Deca', sans-serif;
        font-size: 17px;

        label {
            cursor: pointer;
        }
    }

    svg {
        color: green;
    }

    input {
        :checked {
            border: 2px solid green;
        }
    }
`