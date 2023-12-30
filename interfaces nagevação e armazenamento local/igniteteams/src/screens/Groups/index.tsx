import { useState } from 'react'
import { FlatList } from 'react-native'
import Button from '@components/Button'
import EmptyList from '@components/EmptyList'
import GroupCard from '@components/GroupCard'
import Header from '@components/Header'
import Highlight from '@components/Highlight'

import * as S from './styles'

export default function Groups() {
  const [groups, setGroups] = useState<string[]>([
    'test',
    'holla',
    'another',
    'sadpfjaps',
    'sahjd',
    'aspop',
    'casio',
    'sadpomp',
    'aspoxcpo',
    'csdjopc',
    'pcsdojkpcsad,',
    'opkapcox',
    'poscd',
  ])

  return (
    <S.Container>
      <Header />

      <Highlight subtitle="jogue com a sua turma" title="Turmas" />

      <FlatList
        contentContainerStyle={
          groups.length === 0 ? { flex: 1 } : { gap: 16, paddingBottom: 16 }
        }
        data={groups}
        keyExtractor={(item) => item}
        ListEmptyComponent={() => (
          <EmptyList message="Que tal cadastrar a primeira turma?" />
        )}
        renderItem={({ item }) => <GroupCard title={item} />}
        showsVerticalScrollIndicator={false}
      />

      <Button title="Criar nova turma" />
    </S.Container>
  )
}
