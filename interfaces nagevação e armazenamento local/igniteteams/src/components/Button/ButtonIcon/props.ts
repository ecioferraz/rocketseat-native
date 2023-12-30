import { MaterialIcons } from '@expo/vector-icons'
import ButtonProps from '../props'

export default interface ButtonIconProps extends Omit<ButtonProps, 'title'> {
  icon: keyof typeof MaterialIcons.glyphMap
}
