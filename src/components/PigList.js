import React, { useState } from 'react';
import PigCard from './PigCard';

function PigList ({ hogs }) {

    const [pigsToDisplay, setPigsToDisplay] = useState(hogs);

    function handleFilter (event) {
        const choice = event.target.value;
        if (choice !== 'none') {
            const filteredPigs = hogs.filter(pig => {
                if (pig.greased.toString() === choice) return pig;
                return false;
            })
            setPigsToDisplay(filteredPigs);
        } else {
            setPigsToDisplay(hogs);
        }
    }

    function handleSort (event) {
        const choice = event.target.value;
        const sortedPigs = [...pigsToDisplay].sort((a,b) => {
            if (a[choice] < b[choice]) return -1;
            if (a[choice] > b[choice]) return 1;
            return 0;
        })
        setPigsToDisplay(sortedPigs);
        
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
                        <option value='none'>n/a</option>
                        <option value='true'>Yes</option>
                        <option value='false'>No</option>
                    </select>
                </label>
                <label>
                    Sort:
                    <select onChange={handleSort}>
                        <option value='id'>default</option>
                        <option value='name'>name</option>
                        <option value='weight'>weight</option>
                    </select>
                </label>
            </div>
            <div id='pig-list'>{pigList}</div>
        </>
    )
}

export default PigList;