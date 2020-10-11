import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';

import {
    UsersMessage,
    UsersWrapper,
    UsersCard,
    CardItem,
    ItemText,
    ItemHover,
    HoverEye
} from '../../styles/Users';


export const Users = ({ ParseUsers, error, loading }) => {
    if (error) {
        return <UsersMessage>Error: {error.message}</UsersMessage>
    } else if (!loading) {
        return <UsersMessage>Please wait...</UsersMessage>
    } else {
        return (
            <UsersWrapper>
                {ParseUsers.map(({ id, name, username, image, albums }) =>
                    <UsersCard key={id}>
                        <CardItem background={image}>
                            <ItemText>{name}</ItemText>
                            <ItemText>({username})</ItemText>
                            <ItemText>{albums} albums</ItemText>
                            <ItemHover>
                                <HoverEye>
                                    <Link to={`/users/${username}`}>
                                        <FontAwesomeIcon icon={faEye} size="3x" />
                                    </Link>
                                </HoverEye>
                            </ItemHover>
                        </CardItem>
                    </UsersCard>
                )}
            </UsersWrapper>
        )
    }   
}
