import './ImageList.css';

import React from 'react';

import ImageCard from './ImageCard';

const ImageList = (props) => {
    const images = props.images.map((image) => {
        // key gets assigned to root element of the returned list of records
        return <ImageCard key ={image.id} image={image}/>
    });
    return <div className="image-list">{images}</div>;
}

export default ImageList;