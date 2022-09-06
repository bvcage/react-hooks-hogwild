import React, { useState } from 'react';
import PigDetails from './PigDetails';

function PigCard ({ hog, hideHog }) {
    const [showDetail, setShowDetail] = useState(false);
    
    function handleClick () {
        setShowDetail(!showDetail);
    }

    function handleHide (event) {
        hideHog(hog);
    }

    return (
        <div className='ui card eight wide column' onClick={handleClick}>
            <h2>{`${hog.name}`}</h2>
            <img src={hog.image} alt={hog.name} />
            <br />  
            {showDetail ? <PigDetails hog={hog} /> : null }
            <button onClick={handleHide}>hide {`${hog.name}`}</button>
        </div>
    )
}

export default PigCard;