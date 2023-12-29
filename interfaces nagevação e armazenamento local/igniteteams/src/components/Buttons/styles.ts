import { TouchableOpacity } from 'react-native'
import styled, { css } from 'styled-components/native'
import { Variant } from './props'

export const Container = styled(TouchableOpacity)<{ variant: Variant }>`
  align-items: center;
  background-color: ${({ theme, variant }) =>
    variant === 'primary' ? theme.COLORS.GREEN_700 : theme.COLORS.RED_DARK};
  border-radius: 8px;
  flex: 1;
  justify-content: center;
  min-height: 56px;
  max-height: 56px;
`

export const Title = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.WHITE};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.MD}px;
  `}
`
