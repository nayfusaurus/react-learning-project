import React, { Component } from 'react';
import './App.css';
import UserInput from './components/UserInput';
import UserOutput from './components/UserOutput';
import UserInputCounter from './components/UserInputCounter';
import UserOutputCounter from './components/UserOutputCounter';
import UserInputCounterValidator from './components/UserInputCounterValidator';
import CharacterManipulator from './components/CharacterManipulator';
import Radium from 'radium';

class App extends Component {
  state =  {
    userName: [
      { id:1 , name: 'Sufyan' , age: 26 },
      { id:2 , name: 'Sarah' , age: 23 },
      { id:3 , name: 'Jonathan' , age: 20 },
      { id:4 , name: 'Timothy' , age: 30 },
      { id:5 , name: 'Amelia' , age: 24 },
      { id:6 , name: 'Allison' , age: 33 }
    ],
    userInput: ''
    
  }

  inputChanger = (event) => {
    this.setState({
      userName:[
        { id:1 , name: event.target.value , age: 26 },
        { id:2 , name: 'Sarah' , age: 23 },
        { id:3 , name: 'Jonathan' , age: 20 },
        { id:4 , name: 'Timothy' , age: 30 },
        { id:5 , name: 'Amelia' , age: 24 },
        { id:6 , name: 'Allison' , age: 33 }
      ]
    });
  }

  inputCounter = (event) => {
    this.setState(
      {
        userInput: event.target.value
      }
    );
  }

  deleteCharHandler = (index) => {
    const charArr = this.state.userInput.split('');
    charArr.splice(index,1);
    const updatedCharArr = charArr.join('');
    this.setState({userInput:updatedCharArr});
  }

  toggleAssignment = () => {
    
  }

  render() {

    const charArr = this.state.userInput.split('').map((ch,index) => {
      return (
      <CharacterManipulator 
        value={ch} 
        key={index} 
        clicked={() => this.deleteCharHandler(index)}
      />)
    });

    const classes = [];
    if (this.state.userInput.length <= 5) {
      classes.push('red');
    }
    if (this.state.userInput.length >5){
      classes.push('bold');
    }

    return (
      <div className="App">
        <button onClick={this.toggleAssignmentHandler}><h3>Assignment 1</h3></button>
        <ol>
          <li>Create TWO new components: UserInput and UserOutput</li>
          <li>UserInput should hold an input element, UserOutput two paragraphs</li>
          <li>Output multiple UserOutput components in the App component (any paragraph texts of your choice)</li>
          <li>Pass a username (of your choice) to UserOutput via props and display it there</li>
          <li>Add state to the App component (=> the username) and pass the username to the UserOutput component</li>
          <li>Add a method to manipulate the state (=> an event-handler method)</li>
          <li>Pass the event-handler method reference to the UserInput component and bind it to the input-change event</li>
          <li>Ensure that the new input entered by the user overwrites the old username passed to UserOutput</li>
          <li>Add two-way-binding to your input (in UserInput) to also display the starting username</li>
          <li>Add styling of your choice to your components/ elements in the components - both with inline styles and stylesheets</li>
        </ol>
        <br/>
        <br/>
        <div className="centralise">
          <p> List of Usernames: </p>
          <UserInput change={this.inputChanger} name={this.state.userName[0].name} />
          <UserOutput id={this.state.userName[0].id} name={this.state.userName[0].name} age={this.state.userName[0].age}/>
          <UserOutput id={this.state.userName[1].id} name={this.state.userName[1].name} age={this.state.userName[1].age}/>
          <UserOutput id={this.state.userName[2].id} name={this.state.userName[2].name} age={this.state.userName[2].age}/>
          <UserOutput id={this.state.userName[3].id} name={this.state.userName[3].name} age={this.state.userName[3].age}/>
          <UserOutput id={this.state.userName[4].id} name={this.state.userName[4].name} age={this.state.userName[4].age}/>
          <UserOutput id={this.state.userName[5].id} name={this.state.userName[5].name} age={this.state.userName[5].age}/>
        </div>
        <br/>
        <br/>
        <h3>Assignment 2</h3>
        <ol>
          <li>Create an input field (in App component) with a change listener which outputs the length of the entered text below it (e.g. in a paragraph).</li>
          <li>Create a new component (=> ValidationComponent) which receives the text length as a prop</li>
          <li>Inside the ValidationComponent, either output "Text too short" or "Text long enough" depending on the text length (e.g. take 5 as a minimum length)</li>
          <li>Create another component (=> CharComponent) and style it as an inline box (=> display: inline-block, padding: 16px, text-align: center, margin: 16px, border: 1px solid black).</li>
          <li>Render a list of CharComponents where each CharComponent receives a different letter of the entered text (in the initial input field) as a prop.</li>
          <li>When you click a CharComponent, it should be removed from the entered text.</li>
        </ol>
        <p>Hint: Keep in mind that JavaScript strings are basically arrays!</p>
        <br/>
        <br/>
        <div className="centralise">
          <UserInputCounter change={this.inputCounter} value={this.state.userInput}/>
          <UserOutputCounter value={this.state.userInput.length} />
          <UserInputCounterValidator value={this.state.userInput.length}/>
          <p className={classes.join(' ')}>Red and Bold</p>
          {charArr}
          </div>
        <br/>
        <br/>
      </div>
    );
  }
}

export default Radium(App);
