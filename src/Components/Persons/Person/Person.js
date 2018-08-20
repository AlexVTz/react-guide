import React from 'react';
import Person from './Person.css';

const person = (props) => {
    let randNum = Math.random();

    if(randNum >= 0.9){
        throw new Error('Something went wrong');
    }

    return (
        <div className={Person.Person}>
            <p>I'm {props.name}, and i'm {props.age} </p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}/>
            <button onClick={props.click}>Delete</button>
        </div>
    )
} 

export default person;