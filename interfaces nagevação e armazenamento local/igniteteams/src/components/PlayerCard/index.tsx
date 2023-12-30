import ButtonIcon from '@components/Button/ButtonIcon'
import PlayerCardProps from './props'

import * as S from './styles'

export default function PlayerCard({
  name,
  onRemove,
  ...rest
}: PlayerCardProps) {
  return (
    <S.Container {...rest}>
      <S.Icon name="person" />

      <S.Name>{name}</S.Name>

      <ButtonIcon icon="close" onPress={onRemove} variant="secondary" />
    </S.Container>
  )
}
