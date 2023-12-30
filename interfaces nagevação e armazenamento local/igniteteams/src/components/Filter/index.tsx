import FilterProps from './props'

import * as S from './styles'

export default function Filter({
  isActive = false,
  title,
  ...rest
}: FilterProps) {
  return (
    <S.Container isActive={isActive} {...rest}>
      <S.Title>{title}</S.Title>
    </S.Container>
  )
}
