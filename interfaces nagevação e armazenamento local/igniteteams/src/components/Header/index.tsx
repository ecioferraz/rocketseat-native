import { useNavigation } from '@react-navigation/native'
import HeaderProps from './props'

import * as S from './styles'

import logoImg from '@assets/logo.png'

export default function Header({ showBackButton = true }: HeaderProps) {
  const nav = useNavigation()

  return (
    <S.Container>
      {showBackButton && (
        <S.BackButton onPress={() => nav.navigate('groups')}>
          <S.BackIcon />
        </S.BackButton>
      )}

      <S.Logo source={logoImg} resizeMode="contain" />
    </S.Container>
  )
}
