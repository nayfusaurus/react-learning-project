import React, { Component } from 'react';
import './App.css';
import UserInput from './components/UserInput';
import UserOutput from './components/UserOutput';
import './components/UserOutput.css';
import './components/UserInput.css';

class App extends Component {
  state =  {
    userName: [
      { id:1 , name: 'Sufyan' , age: 26 },
      { id:2 , name: 'Sarah' , age: 23 },
      { id:3 , name: 'Jonathan' , age: 20 },
      { id:4 , name: 'Timothy' , age: 30 },
      { id:5 , name: 'Amelia' , age: 24 },
      { id:6 , name: 'Allison' , age: 33 }
    ]
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

  render() {
    return (
      <div className="App">
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
        <p> List of Usernames: </p>
        <UserInput changed={this.inputChanger} name={this.state.userName[0].name} />
        <UserOutput id={this.state.userName[0].id} name={this.state.userName[0].name} age={this.state.userName[0].age}/>
        <UserOutput id={this.state.userName[1].id} name={this.state.userName[1].name} age={this.state.userName[1].age}/>
        <UserOutput id={this.state.userName[2].id} name={this.state.userName[2].name} age={this.state.userName[2].age}/>
        <UserOutput id={this.state.userName[3].id} name={this.state.userName[3].name} age={this.state.userName[3].age}/>
        <UserOutput id={this.state.userName[4].id} name={this.state.userName[4].name} age={this.state.userName[4].age}/>
        <UserOutput id={this.state.userName[5].id} name={this.state.userName[5].name} age={this.state.userName[5].age}/>
        <br/>
        <br/>
      </div>
    );
  }
}

export default App;
