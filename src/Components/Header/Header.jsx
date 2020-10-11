import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from '../../styles/Container';
import { HeaderWrapper, HeaderLogo } from '../../styles/Header';


export const Header = () => {
    return (
        <HeaderWrapper>
            <Container>
                <HeaderLogo>
                    <Link to='/users'>
                        Photo gallery
                    </Link>
                </HeaderLogo>
            </Container>
        </HeaderWrapper>
    )
}
