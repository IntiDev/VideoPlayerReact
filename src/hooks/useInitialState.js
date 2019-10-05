import { useState, useEffect } from 'react';

const useInitialState = (API) => {
    const [ videos, setVideos ] = useState([]);

    useEffect(() =>{
        fetch(API)
        .then(response => response.json())
        .then(data => setVideos(data.initialState));
    }, []);
    return videos;
};

export default useInitialState;