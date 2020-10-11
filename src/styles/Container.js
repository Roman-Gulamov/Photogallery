import styled from 'styled-components';

export const Container = styled.div`
    padding: 0 15px;

    @media (min-width: 575.98px){
        padding: 0 calc(50vw - 220px);
    }
    @media (min-width: 767.98px){
        padding: 0 calc(50vw - 345px);
    }

    @media (min-width: 991.98px) {
        padding: 0 calc(50vw - 430px);
    }

    @media (min-width: 1199.98px){
        padding: 0 calc(50vw - 540px);
    }
`