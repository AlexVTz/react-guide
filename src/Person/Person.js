import React from 'react';
import Radium from 'radium';
import './Person.css';

const person = (props) => {
    const style = {
        '@media(min-width: 500px)' : {
            width: '450px'
        }
    }
    return (
        <div className="Person" style={style}>
            <p>I'm {props.name}, and i'm {props.age} </p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}/>
            <button onClick={props.click}>Delete</button>
        </div>
    )
} 

export default Radium(person);