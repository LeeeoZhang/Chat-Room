import React from 'react'
import './InputBox.css'


class InputBox extends React.Component {
    render () {
        return (
            <div className="input-box-wrap">
                <div className="input-box">
                    <textarea name="chat-input" id="input" placeholder="Press Enter"/>
                </div>
            </div>
        )
    }
}


export default InputBox