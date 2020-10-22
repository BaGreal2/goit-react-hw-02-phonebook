import React from 'react';

function Phonebook({onSubmit}) {
    return(
            <>
                <h2>Phonebook</h2>
                <form>
                    <input type="text"></input>
                    <button type="submit">SUBMIT</button>
                </form>      
            </>
    )
}

export default Phonebook;