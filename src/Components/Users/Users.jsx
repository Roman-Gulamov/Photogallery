import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolderOpen } from '@fortawesome/free-solid-svg-icons';

import { Wrapper } from '../../styles/Wrapper';
import {
    Card,
    CardItem,
    ItemText,
    ItemHover,
    Hover
} from '../../styles/Card';


export const Users = ({ parseUsers }) => {
    const currentPage = useRouteMatch();

    return (
        <Wrapper>
            {parseUsers.map(({ id, name, username, image, albumsCount }) =>
                <Card key={id}>
                    <CardItem background={image}>
                        <ItemText>{name}</ItemText>
                        <ItemText users>({username})</ItemText>
                        <ItemText users>{albumsCount} albums</ItemText>
                        <ItemHover>
                            <Hover>
                                <Link to={`${currentPage.url}/${username}`}>
                                    <FontAwesomeIcon icon={faFolderOpen} size="3x" />
                                </Link>
                            </Hover>
                        </ItemHover>
                    </CardItem>
                </Card>
            )}
        </Wrapper>
    )
}
