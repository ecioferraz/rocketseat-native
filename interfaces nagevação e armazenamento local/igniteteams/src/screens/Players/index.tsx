import { useState } from 'react'
import { FlatList } from 'react-native'
import Button from '@components/Button'
import ButtonIcon from '@components/Button/ButtonIcon'
import EmptyList from '@components/EmptyList'
import Filter from '@components/Filter'
import Header from '@components/Header'
import Highlight from '@components/Highlight'
import Input from '@components/Input'
import PlayerCard from '@components/PlayerCard'

import * as S from './styles'

export default function Players() {
  const [players, setPlayers] = useState<string[]>([
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
  const [selectedTeam, setSelectedTeam] = useState('Time A')
  const [teams, setTeams] = useState(['Time A', 'Time B'])

  const handleRemovePlayer = (player: string) =>
    setPlayers((prev) => prev.filter((currPlayer) => currPlayer !== player))

  const handleRemoveTeam = (team: string) =>
    setTeams((prev) => prev.filter((currTeam) => currTeam !== team))

  return (
    <S.Container>
      <Header />

      <Highlight
        subtitle="adicione a galera e separe os times"
        title="Nome da turma"
      />

      <S.Form>
        <Input autoCorrect={false} placeholder="Nome da pessoa" />

        <ButtonIcon icon="add" />
      </S.Form>

      <S.HeaderList>
        <FlatList
          data={teams}
          horizontal
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <Filter
              isActive={item === selectedTeam}
              onPress={() => setSelectedTeam(item)}
              title={item}
            />
          )}
        />

        <S.NumberOfPlayers>{players.length}</S.NumberOfPlayers>
      </S.HeaderList>

      <FlatList
        contentContainerStyle={
          players.length === 0 ? { flex: 1 } : { gap: 16, paddingBottom: 16 }
        }
        data={players}
        keyExtractor={(item) => item}
        ListEmptyComponent={() => (
          <EmptyList message="Não há pessoas nesse time." />
        )}
        renderItem={({ item }) => (
          <PlayerCard name={item} onRemove={() => handleRemovePlayer(item)} />
        )}
        showsVerticalScrollIndicator={false}
      />

      <Button
        onPress={() => handleRemoveTeam(selectedTeam)}
        title="Remover Turma"
        variant="secondary"
      />
    </S.Container>
  )
}
