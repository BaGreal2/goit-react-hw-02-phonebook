
import React from 'react';

function Contacts({...names}){
    return (
        <>
        <h1>Contacts</h1>
        <ul>
            {names.map(name =>(
                <li key={ name.key }>
                    {name.name}
                </li>
            ))}
        </ul>
        </>
        )
}

export default Contacts;