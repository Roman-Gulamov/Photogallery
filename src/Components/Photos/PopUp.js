import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faChevronRight, faChevronLeft} from '@fortawesome/free-solid-svg-icons';

import { 
    PopUpWrapper, 
    PopUpCarousel,
    CarouselImg,
    PopUpClose, 
    ImgActive } from '../../styles/PopUp';


export const PopUp = ({ active, activeImg, handlePopUp, handleActiveImg }) => {
    return (
        <PopUpWrapper active={active}>
            <PopUpClose>
                <FontAwesomeIcon 
                    icon={faTimes} 
                    size="3x" 
                    onClick={handlePopUp}
                />
            </PopUpClose>
            <PopUpCarousel>
                <FontAwesomeIcon 
                    icon={faChevronLeft} 
                    size="2x" 
                    onClick={() => handleActiveImg(activeImg, true)}
                />
                <CarouselImg>
                    <ImgActive src={activeImg} alt={activeImg} />
                </CarouselImg>
                <FontAwesomeIcon 
                    icon={faChevronRight} 
                    size="2x" 
                    onClick={() => handleActiveImg(activeImg, false)}
                />
            </PopUpCarousel>
        </PopUpWrapper>
    )
}
