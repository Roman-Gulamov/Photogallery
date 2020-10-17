import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearchPlus } from '@fortawesome/free-solid-svg-icons';

import { PopUp } from './PopUp';
import { Back } from '../Back';

import { Wrapper } from '../../styles/Wrapper';
import {
    Card,
    CardItem,
    ItemText,
    ItemHover,
    Hover
} from '../../styles/Card';


export const Photos = ({ parsePhotos, propsId, username }) => {
    const [active, setActive] = useState(false);
    const [activeImg, setActiveImg] = useState('');

    useEffect(() => {
        active ? document.body.style.overflow = "hidden" : document.body.style.overflow = "visible";
    }, [active])

    const handlePopUp = (url) => {
        !active ? setActive(true) : setActive(false);
        url ? setActiveImg(url) : setActiveImg('');
    }

    const handleActiveImg = (url, prev) => {
        prev ? 
            setActiveImg(parsePhotos.filter(item => item.url === url).map(({ prevUrl }) => prevUrl).join())
        :
            setActiveImg(parsePhotos.filter(item => item.url === url).map(({ nextUrl }) => nextUrl).join())
    }
    

    return (
        <>
        <Back path={`/users/${username}`} />
        <Wrapper>
            {parsePhotos.map(({ albumId, id, thumbnailUrl, url, title }) =>
                albumId === propsId ?
                <Card key={id}>
                    <CardItem background={thumbnailUrl}>
                        <ItemHover>
                            <Hover>
                                <FontAwesomeIcon 
                                    icon={faSearchPlus} 
                                    size="3x"
                                    onClick={() => handlePopUp(url)}
                                />
                            </Hover>
                        </ItemHover>
                    </CardItem>
                    <ItemText updateItem>{title}</ItemText>
                </Card> : null
            )}
        </Wrapper>
        <PopUp 
            active={active}
            activeImg={activeImg}
            handlePopUp={handlePopUp}
            handleActiveImg={handleActiveImg}
        />
        </>
    )
}