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
        <div className="ui compact right floated left aligned segment">
            <form className="ui form" onSubmit={handleSubmit}>
                <div className="field">
                    <label>Name: </label>
                    <div className="ui input">
                    <input type='text'
                        name='name'
                        className="ui fluid input"
                        value={newPig.name}
                        onChange={handleChange}
                    />
                    </div>
                </div>

                <div className="field">
                    <label>Specialty: </label>
                    <input type='text' name='specialty' onChange={handleChange} />
                </div>

                <div className="field">
                    <label>Greased? </label>
                    <select name='greased' defaultValue="label" onChange={handleChange}>
                        <option value="label" hidden disabled></option>
                        <option value={true}>Yes</option>
                        <option value={false}>No</option>
                    </select>
                </div>

                <div className="field">
                    <label>Weight: </label>
                    <input type='number' name='weight' step='.1' onChange={handleChange} />
                </div>

                <div className="field">
                    <label>Photo: </label>
                    <input type='text' name='image' onChange={handleChange} />
                </div>

                <button type='submit' className='ui right floated button'>submit</button>
            </form>
        </div>
    )
}

export default PigForm;