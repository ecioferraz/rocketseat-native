import { ViewProps } from 'react-native'

export default interface PlayerCardProps extends ViewProps {
  name: string
  onRemove: () => void
}
