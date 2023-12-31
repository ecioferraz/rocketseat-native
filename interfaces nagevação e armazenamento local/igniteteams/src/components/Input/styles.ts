import { TextInput } from 'react-native'
import styled, { css } from 'styled-components/native'

export const Container = styled(TextInput).attrs(({ theme }) => ({
  placeholderTextColor: theme.COLORS.GRAY_300,
}))`
${({ theme }) => css`
  background-color: ${theme.COLORS.GRAY_700};
  color: ${theme.COLORS.WHITE};
  font-family: ${theme.FONT_FAMILY.REGULAR};
  font-size: ${theme.FONT_SIZE.MD}px;
`}

  border-radius: 8px;
  flex: 1;
  max-height: 56px;
  min-height: 56px;
  padding: 16px;
`
