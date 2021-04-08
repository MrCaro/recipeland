import React from 'react'

const Message = (props) => {
    return (
        <div>
            <p className={`message-componet ${props.class}`}>
                {props.children}
            </p>
        </div>
    )
}

export default Message
