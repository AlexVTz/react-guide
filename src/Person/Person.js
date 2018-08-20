import React from 'react';
import './Person.css';

const person = (props) => {
    return (
        <div className="Person">
            <p>I'm {props.name}, and i'm {props.age} </p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}/>
            <button onClick={props.click}>Delete</button>
        </div>
    )
} 

export default person;