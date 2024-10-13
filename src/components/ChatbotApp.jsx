import React from 'react'
import './ChatbotApp.css'

const ChatbotApp = () => {
  return (
    <div className='chat-app'>
        <div className='chat-list'>
            <div className='chat-list-header'>
                <h2>Recent chats</h2>
                <i className='bx bx-edit-alt new-chat'></i>
            </div>
            <div className="chat-list-item active">
                <h4>Chat 20/07/2024 12:59:42 PM</h4>
                <i className="bx bx-x-circle"></i>
            </div>
            <div className="chat-list-item">
                <h4>Chat 20/07/2024 12:59:42 PM</h4>
                <i className="bx bx-x-circle"></i>
            </div>
            <div className="chat-list-item">
                <h4>Chat 20/07/2024 12:59:42 PM</h4>
                <i className="bx bx-x-circle"></i>
            </div>
        </div>
      <div className="chat-window">
        <div className="chat-title">
            <h3>Chat with Atishi</h3>
            <i className="i bx bx-arrow-back arrow"></i>
        </div>
        <div className="chat">
            <div className="prompt">
                Hi, how are you?
                <span>12:59:51 PM</span>
                </div>
            <div className="response">
                Hello! I'm doing great. How can I help you today?
                <span>12:59:52 PM</span>
                </div>
                <div className="typing">Typing...</div>
        </div>
        <form className='msg-form'>
            <i className="fa-solid fa-face-smile emoji"></i>
            <input type="text" className='msg-input' placeholder='Type a message...'/>
            <i className="fa-solid fa-paper-plane"></i>
        </form>

      </div>
    </div>
  )
}

export default ChatbotApp
