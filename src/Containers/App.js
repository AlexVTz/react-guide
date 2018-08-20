import React, { Component } from 'react';
import Classes from './App.css';
import Persons from '../Components/Persons/Persons';
import Cockpit from '../Components/Cockpit/Cockpit';

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
    const personIndex = this.state.persons.findIndex(
      (p) => p.id === id 
    );
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
    let persons = null;
    let buttonClass = '';

    if(this.state.showPersons) {
      persons = (
        <div>
          <Persons persons={this.state.persons} clicked={this.deletePersonHandler} 
                    changed={this.nameChangedHandler} />
        </div>
      )

     buttonClass =  Classes.buttonStyleGreen;
    }

    return (
        <div className={Classes.App}>
          <Cockpit persons={this.state.persons} toogle={this.tooglePersonHandler} />
          {persons}
        </div>
    );
   /*  return React.createElement('div', {className: "App"}, React.createElement('header', {className: "App-header"}, 
      React.createElement('img', {src: logo, className: "App-logo", alt: "logo"}), React.createElement('h1', {className: "App-title"}, "Welcome")));
 */  }
}

export default App;
