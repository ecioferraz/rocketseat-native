import { TouchableOpacityProps } from 'react-native'

export type Variant = 'primary' | 'secondary'

export default interface ButtonProps extends TouchableOpacityProps {
  title: string
  variant?: Variant
}
