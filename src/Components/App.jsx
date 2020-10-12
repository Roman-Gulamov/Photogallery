/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';

import { GlobalStyle } from '../styles/GlobalStyle';
import { Container } from '../styles/Container';
import { Message } from '../styles/Message';

import { COVER_MAP } from './Users/CoverMap';
import { Header } from './Header/Header';
import { Users } from './Users/Users';
import { Albums } from './Albums/Albums';
import { Photos } from './Photos/Photos';
import { Error } from './Error/Error';


const App = () => {
    const [parseUsers, setParseUsers] = useState([]);
    const [parseAlbums, setParseAlbums] = useState([]);
    const [parsePhotos, setParsePhotos] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState();

    const PATHS = ['albums', 'photos', 'users'];
    const newParseUsers = parseUsers.map(({ id, name, username }) => ({
        id,
        name,
        username,
        albumsCount: parseAlbums.filter(item => item.userId === id).length,
        image: COVER_MAP.filter(item => item.imageId === id).map(({ image }) => image).join()
    }));

    const newParseAlbums = parseAlbums.map(({ userId, id, title }) => ({
        userId,
        id,
        title,
        photosCount: parsePhotos.filter(item => item.albumId === id).length,
        image: parsePhotos.filter(item => item.albumId === id).splice(0,1).map(({ thumbnailUrl }) => thumbnailUrl).join()
    }));
    
    useEffect(() => {
        PATHS.map((path) =>
            fetch(`https://jsonplaceholder.typicode.com/${path}`)
            .then(response => response.json()) 
            .then(
                (result) => {
                    setLoading(true);
                    path === 'albums' ?  
                        setParseAlbums(result) : 
                    path === 'users' ? 
                        setParseUsers(result) : 
                        setParsePhotos(result);
                },
                (error) => {
                    setError(error.message);
                }
            )
        )
    }, [])

    if (error) {
        return (
            <>
            <GlobalStyle />
                <Message>Error: {error.message}</Message>
            </>
        )
    } else if (!loading) {
        return (
            <>
            <GlobalStyle />
                <Message>Please wait...</Message>
            </>
        )
    } else {
        return (
            <>
            <GlobalStyle />
            <Router>
                <Header />
                <Container>
                    <Switch>
                        <Route 
                            exact 
                            path={["/", "/users"]}
                            component={() => <Users parseUsers={newParseUsers} />}
                        />
                        {parseUsers.map(({ id, username }) =>
                            <Route 
                                key={id} 
                                exact
                                path={`/users/${username}`} 
                                component={() => 
                                    <Albums 
                                        parseAlbums={newParseAlbums} 
                                        propsId={id} 
                                        username={username} 
                                    />
                                } 
                            />
                        )}
                        {parseAlbums.map(({ id }) =>
                        parseUsers.map(({ username }) =>
                            <Route 
                                key={id}
                                exact
                                path={`/users/${username}/album-${id}`} 
                                component={() => <Photos parsePhotos={parsePhotos} propsId={id} username={username} />} 
                            />
                        ))}
                        <Route component={Error} />
                    </Switch>
                </Container>
            </Router> 
            </>
        )
    }
}

export default App;
