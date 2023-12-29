import HighlightProps from './props'
import * as S from './styles'

export default function Highlight({ subtitle, title }: HighlightProps) {
  return (
    <S.Container>
      <S.Title>{title}</S.Title>

      <S.Subtitle>{subtitle}</S.Subtitle>
    </S.Container>
  )
}
