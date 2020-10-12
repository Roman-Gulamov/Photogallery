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

    const handleActiveImg = (url, minus) => {
        let currentIndex = parsePhotos.find(item => item.url === url.toString()).id;

            if (currentIndex !== 1 && minus) {
                currentIndex--
            } else if (currentIndex !== 5000 && !minus) {
                currentIndex++
            } else {
                return currentIndex
            }
        
        let newActiveImg = parsePhotos.filter(item => item.id === currentIndex).map(({ url }) => url);
        setActiveImg(newActiveImg);
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