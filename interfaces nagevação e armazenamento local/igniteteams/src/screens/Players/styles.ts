import styled, { css } from 'styled-components/native'

export const Container = styled.View`
  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
  flex: 1;
  padding: 24px;
`

export const Form = styled.View`
  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
  border-radius: 8px;
  flex-direction: row;
  justify-content: center;
  width: 100%;
`

export const HeaderList = styled.View`
  align-items: center;
  flex-direction: row;
  margin: 32px 0 12px;
  width: 100%;
`

export const NumberOfPlayers = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_200};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.SM}px;
  `}
`
