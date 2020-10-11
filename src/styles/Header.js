import styled from 'styled-components';


export const HeaderWrapper = styled.header`
    width: 100%;
    height: 14vh;
    background: #5b78c7;
` 

export const HeaderLogo = styled.div`
    height: 14vh;
    display: flex;
    justify-content: center;
    align-items: center;
    
    & a {
        font-size: 2.5em;
        transition: color .4s ease;

        @media screen and (max-width: 770px) {
            font-size: 1.3em;
        }

        &:hover {
            color: #00FF00;
        }
    }
` 