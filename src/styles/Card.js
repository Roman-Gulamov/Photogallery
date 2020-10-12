import styled, { css } from 'styled-components';


export const Card = styled.div`
    margin: 1em auto 0 auto;
    width: 45%;
    min-width: 11em;

    @media screen and (max-width: 770px) {
        width: 100%;
    }
` 

export const CardItem = styled.div`
    position: relative;
    height: 6em;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 1em;
    background-image: url(${props => props.background});
    background-size: cover;
` 

export const ItemText = styled.p`
    font-size: 0.8em;
    color: #000000;

    ${props => props.users && css`
        &:nth-last-of-type(-n+2) {
            font-size: 0.6em;
        }
    `}

    ${props => props.updateItem && css`
        &:first-letter {
            text-transform: capitalize;
        }

        &:last-of-type {
            font-size: 0.7em;
            margin-top: 0.5em;
        }
    `}
` 

export const ItemHover = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0%;
    left: 0%;
    opacity: 0;
    background: black;
    transition: opacity .5s ease;

    &:hover, &:active {
        opacity: .9;
    }
` 

export const Hover = styled.div`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    & svg {
        cursor: pointer;
        transition: transform .4s ease;

        &:hover {
            transform: scale(1.2);
        }
        
        & path {
            color: #808080;
        }
    } 
`     
