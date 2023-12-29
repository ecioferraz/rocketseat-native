import { useState } from 'react'
import { FlatList } from 'react-native'
import GroupCard from '@components/GroupCard'
import Header from '@components/Header'
import Highlight from '@components/Highlight'

import * as S from './styles'
import EmptyList from '@components/EmptyList'
import Button from '@components/Buttons'

export default function Groups() {
  const [groups, setGroups] = useState<string[]>([])

  return (
    <S.Container>
      <Header />

      <Highlight subtitle="jogue com a sua turma" title="Turmas" />

      <FlatList
        contentContainerStyle={groups.length === 0 ? { flex: 1 } : { gap: 12 }}
        data={groups}
        keyExtractor={(item) => item}
        ListEmptyComponent={() => (
          <EmptyList message="Que tal cadastrar a primeira turma?" />
        )}
        renderItem={({ item }) => <GroupCard title={item} />}
      />

      <Button title="Criar nova turma" />
    </S.Container>
  )
}
