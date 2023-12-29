import GroupCardProps from './props'

import * as S from './styles'

export default function GroupCard({ title, ...rest }: GroupCardProps) {
  return (
    <S.Container {...rest}>
      <S.Icon />

      <S.Title>{title}</S.Title>
    </S.Container>
  )
}
