import AsyncStorage from '@react-native-async-storage/async-storage'
import getAllGroups from './getAllGroups'
import { GROUP_COLLECTION, PLAYER_COLLECTION } from '@storage/storage.config'

export default async function removeGroupByName(groupToBeDeleted: string) {
  try {
    const storedGroups = await getAllGroups()

    const filtered = JSON.stringify(
      storedGroups.filter((group) => group !== groupToBeDeleted),
    )
    await AsyncStorage.setItem(GROUP_COLLECTION, filtered)
    await AsyncStorage.removeItem(`${PLAYER_COLLECTION}-${groupToBeDeleted}`)
  } catch (err) {
    throw err
  }
}
