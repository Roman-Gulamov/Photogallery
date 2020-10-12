import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowAltLeft } from '@fortawesome/free-solid-svg-icons';

import { BackArrow } from '../styles/Back';

export const Back = ({ path }) => {
    return (
        <BackArrow>
            <Link to={path}>
                <FontAwesomeIcon icon={faLongArrowAltLeft} size="2x" />
            </Link>
        </BackArrow>
    )
}
