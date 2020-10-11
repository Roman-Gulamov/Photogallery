import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';


export const Albums = ({ parseAlbums, propsId, username }) => {
    return (
        <>
        {parseAlbums.map(({ userId, id, title }) =>
            userId === propsId ?
            <Fragment key={id}>
                <div>Title: {title}</div>
                <div>UserID: {userId}</div>
                <Link to={`/users/${username}/album-${id}`}>
                    <div>ID: {id}</div>
                </Link>
            </Fragment>  : null
        )}
        </>
    )
}
