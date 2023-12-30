import { MaterialIcons } from '@expo/vector-icons'
import { TouchableOpacity } from 'react-native'
import styled from 'styled-components/native'
import { Variant } from '../props'

export const Container = styled(TouchableOpacity)`
  align-items: center;
  height: 56px;
  justify-content: center;
  width: 56px;
`

export const Icon = styled(MaterialIcons).attrs<{ variant: Variant }>(
  ({ theme, variant }) => ({
    color: variant === 'primary' ? theme.COLORS.GREEN_700 : theme.COLORS.RED,
    size: 24,
  }),
)``
