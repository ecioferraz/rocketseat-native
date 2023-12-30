import { TouchableOpacityProps } from 'react-native'

export interface Activity {
  isActive?: boolean
}

export default interface FilterProps extends TouchableOpacityProps, Activity {
  title: string
}
