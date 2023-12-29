import EmptyListProps from './props'

import * as S from './styles'

export default function EmptyList({ message }: EmptyListProps) {
  return (
    <S.Container>
      <S.Message>{message}</S.Message>
    </S.Container>
  )
}
