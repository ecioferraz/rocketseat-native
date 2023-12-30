import { TouchableOpacity } from 'react-native'
import styled, { css } from 'styled-components/native'
import { Activity } from './props'

export const Container = styled(TouchableOpacity)<Activity>`
  ${({ isActive, theme }) =>
    isActive &&
    css`
      border: 1px solid ${theme.COLORS.GREEN_700};
    `}

  align-items: center;
  border-radius: 4px;
  height: 38px;
  justify-content: center;
  width: 70px;
`

export const Title = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.WHITE};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.SM}px;
  `}
`
