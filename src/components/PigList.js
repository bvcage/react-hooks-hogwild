import React, { useState } from 'react';
import PigCard from './PigCard';

function PigList ({ hogs }) {

    const [pigsToDisplay, setPigsToDisplay] = useState(hogs);

    function handleFilter (event) {
        const choice = event.target.value;
        if (choice !== 'n/a') {
            const filteredPigs = hogs.filter(pig => {
                if (pig.greased.toString() === choice) return pig;
                return false;
            })
            setPigsToDisplay(filteredPigs);
        } else {
            setPigsToDisplay(hogs);
        }
    }

    const pigList = pigsToDisplay.map(pig => {
        return (
            <PigCard key={pig.name} hog={pig} />
        )
    })
    
    return (
        <>
            <div id='pig-list-options'>
                <label>
                    Greased? 
                    <select onChange={handleFilter}>
                        <option>n/a</option>
                        <option value='true'>Yes</option>
                        <option value='false'>No</option>
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