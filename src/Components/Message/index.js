import React from 'react';

const Message = (props) => {
    const DISPLAY = props.message.map(el => <Display message={el} />)
    return (
        <div className="chat border border-dark rounded m-2">
            {DISPLAY}
        </div>
    )
}


const Display = ({message}) => {

    return (
        <div className="message row m-2 text-left bg-light">
        {message}
      </div>
    )
}

export default Message;
