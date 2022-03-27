import { Send } from '@mui/icons-material'
import { IconButton, TextField } from '@mui/material'
import { useState, ChangeEvent } from 'react'
import { Message } from '../message/message'
import * as Styled from './chat.styles'

const array = [
  {
    text: 'hello',
    user: 'Shiza',
  },
  {
    text: 'looool',
    user: 'me',
  },
  {
    text: ":')",
    user: 'Shiza',
  },
]

export const Chat = () => {
  const [messages, setMessages] = useState(array)
  const [messageToSend, setMessageToSend] = useState('')

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setMessageToSend(event.target.value)
  }

  const handleClick = () => {
    setMessages([...messages, { text: messageToSend, user: 'me' }])
    setMessageToSend('')
  }

  return (
    <Styled.Chat>
      <Styled.Messages>
        {messages.map(({ text, user }) => {
          return <Message text={text} user={user} isMyMessage={user === 'me'} />
        })}
      </Styled.Messages>
      <div>
        <TextField
          label="enter message"
          value={messageToSend}
          onChange={handleChange}
        />
        <IconButton disabled={!messageToSend} onClick={handleClick}>
          <Send />
        </IconButton>
      </div>
    </Styled.Chat>
  )
}
