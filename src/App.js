import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Input from './Components/Input';
import Message from './Components/Message';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      user: [],
      message: [],
    }

    this.message = [];
  }

  display = (user, message) => {

    const DISPLAY = `${user}:   ${message}`

    this.message.push(DISPLAY);
    this.setState({
      message: this.message,
    })  
  } 



  render () {
    return (
      <div className="App">
        <div className='container'>
          <Message message={this.state.message} />
          <Input display={this.display} />
        </div>
      </div>
    );
  }
  
}

export default App;
