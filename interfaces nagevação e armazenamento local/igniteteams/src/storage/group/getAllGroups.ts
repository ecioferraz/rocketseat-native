import AsyncStorage from '@react-native-async-storage/async-storage'
import { GROUP_COLLECTION } from '@storage/storage.config'

export default async function getAllGroups(): Promise<string[]> {
  try {
    const storage = await AsyncStorage.getItem(GROUP_COLLECTION)

    return storage ? JSON.parse(storage) : []
  } catch (err) {
    throw err
  }
}
