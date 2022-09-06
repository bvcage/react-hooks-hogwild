import React, { useState } from 'react';
import PigDetails from './PigDetails';

function PigCard ({ hog }) {

    const [showDetail, setShowDetail] = useState(false);

    function handleClick (event) {
        setShowDetail(!showDetail);
    }

    return (
        <div className='pig-card' onClick={handleClick}>
            <h2>{`${hog.name}`}</h2>
            <img src={hog.image} alt={hog.name} />
            {showDetail ? <PigDetails hog={hog} /> : null }
        </div>
    )
}

export default PigCard;