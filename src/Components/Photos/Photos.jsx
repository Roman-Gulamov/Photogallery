import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';


export const Photos = ({ parsePhotos, propsId, username }) => {
    return (
        <>
        <Link to={`/users/${username}`}>
        BACK
        </Link>
        {parsePhotos.map(({ albumId, id, thumbnailUrl, title }) =>
            albumId === propsId ?
                <Fragment key={id}>
                    <div>ALBUMID: {albumId}</div>
                    <div>USERID: {propsId}</div>
                    <img src={thumbnailUrl} alt={title} />
                </Fragment>
            : null
        )}
        </>
    )
}