import React from 'react';

function PigDetails ({ hog }) {
    return (
        <div className='pig-details'>
            <h3>Specialty: </h3>
            <p>{hog.specialty}</p>
            <h3>Weight: </h3>
            <p>{hog.weight}</p>
            <h3>Greased: </h3>
            <p>{hog.greased ? 'yes' : 'no'}</p>
        </div>
    )
}

export default PigDetails