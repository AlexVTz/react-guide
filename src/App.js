import React, { Component } from 'react';
import './App.css';
import Radium, {StyleRoot} from 'radium';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {id: 'awsds', name: "Alex", age: 23},
      {id: 'aasds', name: "Terumi",age: 21}, 
      {id: 'awlld', name: "Mati",age: 8}
    ],
    showPersons: true
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex( (p) => p.id === id );
    const person = {
      ...this.state.persons[personIndex]
    }

    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    
    this.setState({persons: persons});
    
  }

  deletePersonHandler = (personIndex) => {
    let persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  tooglePersonHandler = () => {
    let person = this.state.showPersons;
    this.setState(
      {showPersons: !person}
    );
  }

  render() {
    const buttonStyle = {
      backgroundColor: 'red',
      color: 'white',
      font: 'inherit',
      border: '2px solid blue',
      padding: '8px',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'salmon',
        color: 'black'
      }
    }
    let persons = null;

    if(this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map( (person, index) => {
            return <Person 
              key={person.id}
              name={person.name} 
              age={person.age}  
              click={() => this.deletePersonHandler(index)}
              changed={(event) => this.nameChangedHandler(event, person.id)}
            />
          })}
        </div>
      )

      buttonStyle.backgroundColor = 'green';
      buttonStyle[':hover'] = {
        backgroundColor: 'lightgreen',
        color: 'black'
      }
    }

    let classes = [];
    if (this.state.persons.length <= 1){
      classes = [];
    }else if(this.state.persons.length === 2){
      classes = [];
      classes.push('red');
    } else if(this.state.persons.length >= 3){
      classes = [];
      classes.push('red');
      classes.push('bold');
    }

    return (
      <StyleRoot>
        <div className="App">
          <h1>This is a React App</h1>
          <p className={classes.join(' ')}>
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
          <button onClick={this.tooglePersonHandler}
            style={buttonStyle}>
              Show/Hide
          </button>
          {persons}
        </div>
      </StyleRoot>
    );
   /*  return React.createElement('div', {className: "App"}, React.createElement('header', {className: "App-header"}, 
      React.createElement('img', {src: logo, className: "App-logo", alt: "logo"}), React.createElement('h1', {className: "App-title"}, "Welcome")));
 */  }
}

export default Radium(App);
