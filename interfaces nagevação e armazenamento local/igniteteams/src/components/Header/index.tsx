import HeaderProps from './props'

import * as S from './styles'

import logoImg from '@assets/logo.png'

export default function Header({ showBackButton = true }: HeaderProps) {
  return (
    <S.Container>
      {showBackButton && (
        <S.BackButton>
          <S.BackIcon />
        </S.BackButton>
      )}

      <S.Logo source={logoImg} resizeMode="contain" />
    </S.Container>
  )
}
