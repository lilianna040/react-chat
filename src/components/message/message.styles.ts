import { styled } from '@mui/material'

type StyledMessageProps = {
  isMyMessage: boolean
}

export const Message = styled('div')<StyledMessageProps>(({ isMyMessage }) => ({
  width: 'fit-content',
  alignSelf: isMyMessage ? 'flex-end' : 'flex-start',
  boxShadow: '0 0 1px inset',
  borderRadius: 12,
  padding: 12,
  marginBottom: 24,
  '&:last-child': {
    marginBottom: 0,
  },
}))
