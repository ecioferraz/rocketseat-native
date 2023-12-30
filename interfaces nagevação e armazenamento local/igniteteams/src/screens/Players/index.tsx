import { useEffect, useState } from 'react'
import { Alert, FlatList, Keyboard } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'
import Button from '@components/Button'
import ButtonIcon from '@components/Button/ButtonIcon'
import EmptyList from '@components/EmptyList'
import Filter from '@components/Filter'
import Header from '@components/Header'
import Highlight from '@components/Highlight'
import Input from '@components/Input'
import Loading from '@components/Loading'
import PlayerCard from '@components/PlayerCard'
import removeGroupByName from '@storage/group/removeGroupByName'
import addPlayerByGroup from '@storage/player/addPlayerByGroup'
import getPlayersByGroupAndTeam from '@storage/player/getPlayerByGroupAndTeam'
import { PlayerStorageDTO } from '@storage/player/PlayerStorageDTO'
import removePlayerByGroup from '@storage/player/removePlayerByGroup'
import { AppError } from '@utils/AppError'

import * as S from './styles'

type RouteParams = {
  group: string
}

export default function Players() {
  const nav = useNavigation()
  const route = useRoute()
  const [isLoading, setIsLoading] = useState(true)
  const [newPlayer, setNewPlayer] = useState('')
  const [players, setPlayers] = useState<PlayerStorageDTO[]>([])
  const [team, setTeam] = useState('Time A')

  const { group } = route.params as RouteParams

  const removeGroup = async () => {
    try {
      await removeGroupByName(group)

      nav.navigate('groups')
    } catch (err) {
      Alert.alert('Remover turma', 'Não foi possível remover a turma.')
    }
  }

  const handleRemoveGroup = async () => {
    Alert.alert('Remover', 'Deseja remover a turma?', [
      { style: 'cancel', text: 'Não' },
      { style: 'destructive', text: 'Sim', onPress: () => removeGroup() },
    ])
  }

  const handleRemovePlayer = async (player: string) => {
    await removePlayerByGroup(player, group)
    fetchPlayerByTeam()
  }

  const handleAddPlayer = async () => {
    if (newPlayer.trim().length === 0) {
      return Alert.alert(
        'Nova pessoa',
        'Informe o nome da pessoa para adicionar.',
      )
    }

    const player = {
      name: newPlayer,
      team,
    }

    try {
      await addPlayerByGroup(player, group)

      Keyboard.dismiss()

      await fetchPlayerByTeam()
      setNewPlayer('')
    } catch (err) {
      err instanceof AppError
        ? Alert.alert('Nova pessoa', err.message)
        : Alert.alert(
            'Nova pessoa',
            'Não foi possível adicionar uma nova pessoa.',
          )
    }
  }

  const fetchPlayerByTeam = async () => {
    try {
      setIsLoading(true)

      const playersByTeam = await getPlayersByGroupAndTeam(group, team)

      setPlayers(playersByTeam)
    } catch (err) {
      Alert.alert(
        'Pessoas',
        'Não foi possível carregar as pessoas do time selecionado.',
      )
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchPlayerByTeam()
  }, [team])

  return (
    <S.Container>
      <Header />

      <Highlight subtitle="adicione a galera e separe os times" title={group} />

      <S.Form>
        <Input
          autoCorrect={false}
          returnKeyType="done"
          onChangeText={setNewPlayer}
          onSubmitEditing={handleAddPlayer}
          placeholder="Nome da pessoa"
          value={newPlayer}
        />

        <ButtonIcon icon="add" onPress={handleAddPlayer} />
      </S.Form>

      <S.HeaderList>
        <FlatList
          data={['Time A', 'Time B']}
          horizontal
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <Filter
              isActive={item === team}
              onPress={() => setTeam(item)}
              title={item}
            />
          )}
        />

        <S.NumberOfPlayers>{players.length}</S.NumberOfPlayers>
      </S.HeaderList>

      {isLoading ? (
        <Loading />
      ) : (
        <FlatList
          contentContainerStyle={
            players.length === 0 ? { flex: 1 } : { gap: 16, paddingBottom: 16 }
          }
          data={players}
          keyExtractor={({ name }) => name}
          ListEmptyComponent={() => (
            <EmptyList message="Não há pessoas nesse time." />
          )}
          renderItem={({ item: { name } }) => (
            <PlayerCard name={name} onRemove={() => handleRemovePlayer(name)} />
          )}
          showsVerticalScrollIndicator={false}
        />
      )}

      <Button
        onPress={handleRemoveGroup}
        title="Remover turma"
        variant="secondary"
      />
    </S.Container>
  )
}
