import * as Styled from './message.styles'

type MessageProps = {
  text: string
  user: string
  isMyMessage: boolean
}

export const Message = ({ text, user, isMyMessage }: MessageProps) => {
  return (
    <Styled.Message isMyMessage={isMyMessage}>
      <div>{user}:</div>
      <div>{text}</div>
    </Styled.Message>
  )
}
