import React from 'react'
import './ChatbotStart.css'

const ChatbotStart = ({onStartChat}) => {
  return (
    <div className='start-page'>
        <button className='start-page-btn' onClick={onStartChat}>
            Chat with me!</button>
    </div>
  )
}

export default ChatbotStart
