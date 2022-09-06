import React from 'react';
import PigCard from './PigCard';

function PigList ({ hogs }) {
    const pigList = hogs.map(pig => {
        return (
            <PigCard hog={pig} />
        )
    })
    return (
        <div id='pig-list'>{pigList}</div>
    )
}

export default PigList;