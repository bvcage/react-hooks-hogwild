import React, { useState } from 'react';
import PigCard from './PigCard';
import PigForm from './PigForm';

function PigList ({ hogs }) {

    const [displayPigs, setDisplayPigs] = useState(hogs);
    const [filters, setFilters] = useState({});
    const [page, setPage] = useState('');
    const [sortBy, setSortBy] = useState('id');

    function handleFilter (event) {
        setFilters({...filters,
            [event.target.name]: event.target.value
        });
    }

    function handleHideHog (hog) {
        const newDisplayPigs = displayPigs.filter(pig => pig !== hog);
        setDisplayPigs(newDisplayPigs);
    }

    function handleNewPig (newPig) {
        setDisplayPigs([...displayPigs, newPig]);
        setPage('');
    }

    function handleShowForm (event) {
        setPage('form');
    }

    function handleSort (event) {
        setSortBy(event.target.value);
    }

    const filteredPigs = displayPigs.filter(pig => {
        const results = [];
        Object.entries(filters).forEach(([filter, value]) => {
            filter = filter.split('-').pop();
            results.push(pig[filter].toString().includes(value));
        })
        if (results.find(r => r === false) === undefined) return true;
        else return false;
    });

    const sortedPigs = filteredPigs.sort((a,b) => {
        if (a[sortBy] < b[sortBy]) return -1;
        if (a[sortBy] > b[sortBy]) return 1;
        return 0;
    });

    const pigList = sortedPigs.map(pig => {
        return (
            <PigCard key={pig.name} hog={pig} hideHog={handleHideHog} />
        )
    })
    
    return (
        <div className='ui center aligned basic segment'>
            <div className="ui horizontal divider"></div>
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
                <label>
                    <button onClick={handleShowForm}>new pig form</button>
                </label>
            </div>
            <div className="ui horizontal divider"></div>
            <div className='ui center aligned basic segment'>
            {page === 'form' ? <PigForm onSubmit={handleNewPig} /> : <div className='ui special cards'>{pigList}</div>}
            </div>
        </div>
    )
}

export default PigList;