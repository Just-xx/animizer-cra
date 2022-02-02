import { useEffect, useState } from 'react'
import axios from 'axios';
import { animalsData } from '../utils/animalsData'


const checkForVideo = (url) => {
    if (url.endsWith('.mp4') || url.endsWith('.webm'))
        return true;
    return false;
}

export const useAnimal = (animal) => {
    
    const [imgUrl, setImgUrl] = useState(null);
    const [isFetched, setIsFetched] = useState(false);
    const [error, setError] = useState(false);
    const [isVideo, setIsVideo] = useState(false);

    const manageUrl = url => {
        setImgUrl(url);
        setIsFetched(true);
        setIsVideo(checkForVideo(url));
    }

    const getImg = () => {
        animalsData.forEach(animalData => {
            if (animalData.animal === animal) {
                axios.get(animalData.api)
                .then(res => animalData.urlKeys.reduce((prev, val) => prev[val], res))
                .then(manageUrl)
                .catch(err => {
                    setError(true)
                })
            }
        })
    }

    const newImg = () => {
        setError(false);
        setIsFetched(false);
        setIsVideo(false)
        getImg();
    }

    useEffect(getImg, [])
    
    return {
        imgUrl,
        isFetched,
        newImg,
        error,
        isVideo
    };
}