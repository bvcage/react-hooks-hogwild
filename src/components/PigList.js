import React, { useState } from 'react';
import PigCard from './PigCard';

function PigList ({ hogs }) {

    const [pigsToDisplay, setPigsToDisplay] = useState(hogs);
    const [filters, setFilters] = useState({});
    const [sortBy, setSortBy] = useState('id');

    function handleFilter (event) {
        setFilters({...filters,
            [event.target.name]: event.target.value
        });
    }

    function handleSort (event) {
        setSortBy(event.target.value);
        // const choice = event.target.value;
        // const sortedPigs = [...pigsToDisplay].sort((a,b) => {
        //     if (a[choice] < b[choice]) return -1;
        //     if (a[choice] > b[choice]) return 1;
        //     return 0;
        // })
        // setPigsToDisplay(sortedPigs);
        
    }

    let filteredPigs = hogs.filter(pig => {
        const results = [];
        Object.entries(filters).forEach(([filter, value]) => {
            filter = filter.split('-').pop();
            results.push(pig[filter].toString().includes(value));
        })
        if (results.find(r => r === false) === undefined) return true;
        else return false;
    });

    let sortedPigs = filteredPigs.sort((a,b) => {
        if (a[sortBy] < b[sortBy]) return -1;
        if (a[sortBy] > b[sortBy]) return 1;
        return 0;
    });

    const pigList = sortedPigs.map(pig => {
        return (
            <PigCard key={pig.name} hog={pig} />
        )
    })
    
    return (
        <>
            <div id='pig-list-options'>
                <label>
                    Greased? 
                    <select name='pig-filter-greased' onChange={handleFilter}>
                        <option value=''>n/a</option>
                        <option value='true'>Yes</option>
                        <option value='false'>No</option>
                    </select>
                </label>
                <label>
                    Sort:
                    <select name='pig-sort' onChange={handleSort}>
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