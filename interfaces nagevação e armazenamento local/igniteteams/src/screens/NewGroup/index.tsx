import { useNavigation } from '@react-navigation/native'
import { useState } from 'react'
import Button from '@components/Button'
import Header from '@components/Header'
import Highlight from '@components/Highlight'
import Input from '@components/Input'
import createGroup from '@storage/group/createGroup'

import * as S from './styles'
import { Alert } from 'react-native'
import { AppError } from '@utils/AppError'

export default function NewGroup() {
  const nav = useNavigation()
  const [group, setGroup] = useState('')

  const handleNewGroup = async () => {
    try {
      if (group.trim().length === 0) {
        return Alert.alert('Nova turma', 'Informe o nome da turma.')
      }

      await createGroup(group)

      nav.navigate('players', { group })
    } catch (err) {
      err instanceof AppError
        ? Alert.alert('Nova turma', err.message)
        : Alert.alert('Nova turma', 'Não foi possível criar um nova turma.')
    }
  }

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
          <Input
            autoFocus
            placeholder="Nome da turma"
            onChangeText={setGroup}
            value={group}
          />

          <Button onPress={handleNewGroup} title="Criar" />
        </S.InputContainer>
      </S.Content>
    </S.Container>
  )
}
