import AsyncStorage from '@react-native-async-storage/async-storage'
import { PlayerStorageDTO } from './PlayerStorageDTO'
import { PLAYER_COLLECTION } from '@storage/storage.config'
import getPlayersByGroup from './getPlayersByGroup'
import { AppError } from '@utils/AppError'

export default async function addPlayerByGroup(
  newPlayer: PlayerStorageDTO,
  group: string,
) {
  try {
    const storedPlayers = await getPlayersByGroup(group)

    const playerAlreadyInTeam = storedPlayers.filter(
      ({ name }) => name === newPlayer.name,
    )

    if (playerAlreadyInTeam.length > 0) {
      throw new AppError('Essa pessoa já está adicionada em um time aqui.')
    }

    const players = JSON.stringify([...storedPlayers, newPlayer])

    await AsyncStorage.setItem(`${PLAYER_COLLECTION}-${group}`, players)
  } catch (err) {
    throw err
  }
}
