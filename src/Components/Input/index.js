import React from 'react';


class Input extends React.Component {
  constructor(props){
    super(props)
    this.state = {
        user:'',
        message: '',
    }
  
  }


  user = (event) => {
      const USER = event.target.value;

      this.setState({
          user: USER,
      })
  }

  message = (event) => {
      const MESSAGE = event.target.value;

      this.setState({
          message: MESSAGE,
      })
  }

  handleClick = () => {       
    this.props.display(this.state.user, this.state.message);
    this.setState({
        user: '',
        message: '',
    })

  }


  render () {
    return (
        <div className="input row">
            <label for='user' className="ml-3">Username: </label>
            <input id='user' className="user col-4 ml-3 rounded" onChange={this.user} type="text" value={this.state.user} placeholder="Username ..." />
            <label for='message' className="ml-3">Message: </label>
            <input id='message' className="message col-4 ml-3 rounded" onChange={this.message} type="text" value={this.state.message} placeholder="Message ..."  />
            <button className='btn-submit btn btn-success ml-3' onClick={this.handleClick}>Send</button>       
        </div>
    );
  }
  
}

export default Input;
