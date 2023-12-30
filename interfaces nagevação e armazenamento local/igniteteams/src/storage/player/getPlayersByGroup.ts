import AsyncStorage from '@react-native-async-storage/async-storage'
import { PLAYER_COLLECTION } from '@storage/storage.config'
import { PlayerStorageDTO } from './PlayerStorageDTO'

export default async function getPlayersByGroup(
  group: string,
): Promise<PlayerStorageDTO[]> {
  try {
    const storage = await AsyncStorage.getItem(`${PLAYER_COLLECTION}-${group}`)

    return storage ? JSON.parse(storage) : []
  } catch (err) {
    throw err
  }
}
