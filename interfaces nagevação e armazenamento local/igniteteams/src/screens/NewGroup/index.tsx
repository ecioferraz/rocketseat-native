import Button from '@components/Button'
import Header from '@components/Header'
import Highlight from '@components/Highlight'
import Input from '@components/Input'

import * as S from './styles'

export default function NewGroup() {
  return (
    <S.Container>
      <Header />

      <S.Content>
        <S.Icon />

        <Highlight
          subtitle="crie a turma para adicionar as pessoas"
          title="Nova turma"
        />

        <S.InputContainer>
          <Input placeholder="Nome da turma" />

          <Button title="Criar" />
        </S.InputContainer>
      </S.Content>
    </S.Container>
  )
}
