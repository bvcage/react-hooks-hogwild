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
        <div className='ui centered card eight wide column' onClick={handleClick}>
            <div className='content'>
                <div className='header'>{`${hog.name}`}</div>
                <div className='content'>
                    <div className='ui fluid image'>
                        <img src={hog.image} alt={hog.name} />
                    </div>
                    {showDetail ? <PigDetails hog={hog} /> : null}
                </div>
            </div>
            <div className="ui bottom attached button"
                onClick={handleHide}>
                    hide {`${hog.name}`}
            </div>
        </div>
    )
}

export default PigCard;