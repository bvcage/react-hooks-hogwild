import React from 'react';
import PigCard from './PigCard';

function PigList ({ hogs }) {

    const pigList = hogs.map(pig => {
        return (
            <PigCard key={pig.name} hog={pig} />
        )
    })
    
    return (
        <>
            <div id='pig-list-options'>
                <label>
                    Greased? 
                    <select>
                        <option>n/a</option>
                        <option>Yes</option>
                        <option>No</option>
                    </select>
                </label>
                <label>
                    Sort:
                    <select>
                        <option>default</option>
                        <option>name</option>
                        <option>weight</option>
                    </select>
                </label>
            </div>
            <div id='pig-list'>{pigList}</div>
        </>
    )
}

export default PigList;