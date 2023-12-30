import { MaterialIcons } from '@expo/vector-icons'
import styled, { css } from 'styled-components/native'

export const Container = styled.View`
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.GRAY_500};
  border-radius: 4px;
  flex-direction: row;
  gap: 8px;
  height: 56px;
  padding: 16px;
  width: 100%;
`

export const Name = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_200};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD}px;
  `}

  flex: 1;
`

export const Icon = styled(MaterialIcons).attrs(({ theme }) => ({
  color: theme.COLORS.GRAY_200,
  size: 24,
}))``
