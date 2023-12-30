import ButtonProps from './props'

import * as S from './styles'

export default function Button({
  title,
  variant = 'primary',
  ...rest
}: ButtonProps) {
  return (
    <S.Container variant={variant} {...rest}>
      <S.Title>{title}</S.Title>
    </S.Container>
  )
}
