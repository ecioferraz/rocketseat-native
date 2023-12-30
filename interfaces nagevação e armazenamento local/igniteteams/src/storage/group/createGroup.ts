import AsyncStorage from '@react-native-async-storage/async-storage'
import { GROUP_COLLECTION } from '@storage/storage.config'
import getAllGroups from './getAllGroups'
import { AppError } from '@utils/AppError'

export default async function createGroup(newGroup: string) {
  try {
    const storedGroups = await getAllGroups()

    const groupAlreadyExists = storedGroups.includes(newGroup)

    if (groupAlreadyExists) {
      throw new AppError('Já existe uma turma cadastrada com esse nome.')
    }

    const group = JSON.stringify([...storedGroups, newGroup])

    await AsyncStorage.setItem(GROUP_COLLECTION, group)
  } catch (err) {
    throw err
  }
}
