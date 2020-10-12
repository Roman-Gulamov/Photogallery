import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';

import { Back } from '../Back';
import { Wrapper } from '../../styles/Wrapper';
import {
    Card,
    CardItem,
    ItemText,
    ItemHover,
    Hover
} from '../../styles/Card';


export const Albums = ({ parseAlbums, propsId, username }) => {
    return (
        <>
        <Back path='/users' />
        <Wrapper>
            {parseAlbums.map(({ userId, id, title, photosCount, image }) =>
                userId === propsId ?
                <Card key={id}>
                    <CardItem background={image}>
                        <ItemText updateItem>{title}</ItemText>
                        <ItemText updateItem>({photosCount} photos)</ItemText>
                        <ItemHover>
                            <Hover>
                                <Link to={`/users/${username}/album-${id}`}>
                                    <FontAwesomeIcon icon={faEye} size="3x" />
                                </Link>
                            </Hover>
                        </ItemHover>
                    </CardItem>
                </Card> : null
            )}
        </Wrapper>
        </>
    )
}