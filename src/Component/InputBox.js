import React from 'react'
import './InputBox.css'


function InputBox (){
    return (
        <div className="input-box-wrap">
            <div className="input-box">
                <textarea name="chat-input" id="input" placeholder="Input Your Wrod!"/>
            </div>
        </div>
    )
}

export default InputBox