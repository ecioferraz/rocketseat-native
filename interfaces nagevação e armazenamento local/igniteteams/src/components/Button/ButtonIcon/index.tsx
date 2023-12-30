import ButtonIconProps from './props'

import * as S from './styles'

export default function ButtonIcon({
  icon,
  variant = 'primary',
  ...rest
}: ButtonIconProps) {
  return (
    <S.Container {...rest}>
      <S.Icon name={icon} variant={variant} />
    </S.Container>
  )
}
