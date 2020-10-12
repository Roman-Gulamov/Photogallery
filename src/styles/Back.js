import styled from 'styled-components';


export const BackArrow = styled.div`
    position: fixed;
    top: 3.5%;
    left: 3%;

    @media screen and (max-width: 770px) {
        position: absolute;
    }

    & svg path {
        color: white;
        transition: color .4s ease;

        &:hover {
            color: #00FF00;
        }
    }
` 