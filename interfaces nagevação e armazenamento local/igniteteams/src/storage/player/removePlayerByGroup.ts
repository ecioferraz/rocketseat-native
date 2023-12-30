import AsyncStorage from '@react-native-async-storage/async-storage'
import getPlayersByGroup from './getPlayersByGroup'
import { PLAYER_COLLECTION } from '@storage/storage.config'

export default async function removePlayerByGroup(
  playerName: string,
  group: string,
) {
  try {
    const storedPlayers = await getPlayersByGroup(group)

    const filtered = JSON.stringify(
      storedPlayers.filter(({ name }) => name !== playerName),
    )

    await AsyncStorage.setItem(`${PLAYER_COLLECTION}-${group}`, filtered)
  } catch (err) {
    throw err
  }
}
