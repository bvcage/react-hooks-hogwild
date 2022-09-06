import React, { useState } from 'react';
import PigCard from './PigCard';
import PigForm from './PigForm';

function PigList ({ hogs }) {

    const [displayPigs, setDisplayPigs] = useState(hogs);
    const [filters, setFilters] = useState({});
    const [showForm, setShowForm] = useState(false);
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
        setShowForm(false);
    }

    function handleShowForm (event) {
        setShowForm(!showForm);
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
            
            <form id='pig-list-options' className='ui form'>
                <div className="three fields">
                    <div className="field">
                        <select
                                name='pig-filter-greased'
                                defaultValue="label"
                                onChange={handleFilter} >
                            <option value="label" disabled>greased?</option>
                            <option value="">either</option>
                            <option value="true">greased</option>
                            <option value="false">not greased</option>
                        </select>
                    </div>
                    <div className="field">
                        <select name='pig-sort'
                                defaultValue="label"
                                onChange={handleSort}>
                            <option value="label" disabled>sort by...</option>
                            <option value='id'>default</option>
                            <option value='name'>name</option>
                            <option value='weight'>weight</option>
                        </select>
                    </div>
                    <div className="field">
                        <button
                            type="button"
                            className="fluid ui button"
                            onClick={handleShowForm}
                            >{ showForm ? 'return to pigs' : 'new pig form' }
                        </button>
                    </div>
                </div>
            </form>

            <div className="ui horizontal divider"></div>
            <div className='ui basic segment'>
            {showForm ? <PigForm onSubmit={handleNewPig} /> : <div className='ui special cards'>{pigList}</div>}
            </div>
        </div>
    )
}

export default PigList;