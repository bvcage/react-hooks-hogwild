import React, { useState } from 'react';

function PigForm ({ onSubmit }) {

    const [newPig, setNewPig] = useState({
        name: '',
        specialty: '',
        greased: true,
        weight: 0.0,
        image: '',
    });

    function handleChange (event) {
        setNewPig({...newPig,
            [event.target.name]: event.target.value,
        })
    }

    function handleSubmit (event) {
        event.preventDefault();
        onSubmit(newPig);
    }

    return (
        <div className='pig-form'>
            <form onSubmit={handleSubmit}>
                <label>Name: </label>
                <input type='text'
                    name='name'
                    value={newPig.name}
                    onChange={handleChange} />
                <br />

                <label>Specialty: </label>
                <input type='text' name='specialty' onChange={handleChange} />
                <br />

                <label>Greased? </label>
                <select name='greased' onChange={handleChange}>
                    <option value={true}>Yes</option>
                    <option value={false}>No</option>
                </select>
                <br />

                <label>Weight: </label>
                <input type='number' name='weight' step='.1' onChange={handleChange} />
                <br />

                <label>Photo: </label>
                <input type='text' name='image' onChange={handleChange} />
                <br />

                <div type='submit' className='ui basic button'>submit</div>
            </form>
        </div>
    )
}

export default PigForm;