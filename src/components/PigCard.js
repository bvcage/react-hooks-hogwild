import React from 'react';

function PigCard ({ hog }) {
    return (
        <div className='pig-card'>
            <h2>{`${hog.name}`}</h2>
            <img src={hog.image} alt={hog.name} />
        </div>
    )
}

export default PigCard;