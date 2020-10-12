import styled from 'styled-components';

export const Message = styled.main`
    display: flex;
    justify-content: center;
    text-align: center;
    margin-top: 14vh;
    font-size: 2em;

    @media screen and (max-width: 770px) {
        font-size: 1.3em;
    }

    & span {
        font-size: 1em;
    }
` 