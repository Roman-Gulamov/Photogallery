import styled, { css } from 'styled-components';

export const PopUpWrapper = styled.div`
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    
    ${props => props.active && css`
        display: block;
    `}

    & div svg {
        cursor: pointer;
        transition: transform .4s ease;

        &:hover {
            transform: scale(0.9);
        }
    } 
` 

export const PopUpClose = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-right: 2em;
` 

export const PopUpCarousel = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    padding: 0 1em 3em;
` 

export const CarouselImg = styled.div`
    display: flex;
    justify-content: center;
` 

export const ImgActive = styled.img`
    width: 80%;
    height: 80%;
` 