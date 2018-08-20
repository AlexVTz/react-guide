import React from 'react';
import Classes from '../../Containers/App.css';


const cockpit = (props) => {

    let classes = [];
    if (props.persons.length <= 1){
      classes = [];
    }else if(props.persons.length === 2){
      classes = [];
      classes.push( Classes.red );
    } else if(props.persons.length >= 3){
      classes = [];
      classes.push( Classes.red );
      classes.push( Classes.bold );
    }
    
    return (
        <div>
            <h1>This is a React App</h1>
            <p className={classes.join(' ')}>
            To get started, edit <code>src/App.js</code> and save to reload.
            </p>
            <button onClick={props.toogle} >
                Show/Hide
            </button>
        </div>
    )
};

export default cockpit;