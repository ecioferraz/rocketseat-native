import { useCallback, useState } from 'react'
import { Alert, FlatList } from 'react-native'
import { useFocusEffect, useNavigation } from '@react-navigation/native'
import Button from '@components/Button'
import EmptyList from '@components/EmptyList'
import GroupCard from '@components/GroupCard'
import Header from '@components/Header'
import Loading from '@components/Loading'
import Highlight from '@components/Highlight'
import getAllGroups from '@storage/group/getAllGroups'

import * as S from './styles'

export default function Groups() {
  const [isLoading, setIsLoading] = useState(true)
  const [groups, setGroups] = useState<string[]>([])

  const nav = useNavigation()

  const fetchGroups = async () => {
    try {
      setIsLoading(true)

      const data = await getAllGroups()

      setGroups(data)
    } catch (err) {
      Alert.alert('Turmas', 'Não foi possível carregar as turmas.')
    } finally {
      setIsLoading(false)
    }
  }

  useFocusEffect(
    useCallback(() => {
      fetchGroups()
    }, []),
  )

  return (
    <S.Container>
      <Header showBackButton={false} />

      <Highlight subtitle="jogue com a sua turma" title="Turmas" />

      {isLoading ? (
        <Loading />
      ) : (
        <FlatList
          contentContainerStyle={
            groups.length === 0 ? { flex: 1 } : { gap: 16, paddingBottom: 16 }
          }
          data={groups}
          keyExtractor={(item) => item}
          ListEmptyComponent={() => (
            <EmptyList message="Que tal cadastrar a primeira turma?" />
          )}
          renderItem={({ item: group }) => (
            <GroupCard
              onPress={() => nav.navigate('players', { group })}
              title={group}
            />
          )}
          showsVerticalScrollIndicator={false}
        />
      )}

      <Button onPress={() => nav.navigate('new')} title="Criar nova turma" />
    </S.Container>
  )
}
