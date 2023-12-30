import { UsersThree } from 'phosphor-react-native'
import styled from 'styled-components/native'

export const Container = styled.View`
  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
  flex: 1;
  padding: 24px;
`

export const Content = styled.View`
  justify-content: center;
  gap: 16px;
`

export const Icon = styled(UsersThree).attrs(({ theme }) => ({
  color: theme.COLORS.GREEN_700,
  size: 56,
}))`
  align-self: center;
`

export const InputContainer = styled.View`
  gap: 20px;
`
