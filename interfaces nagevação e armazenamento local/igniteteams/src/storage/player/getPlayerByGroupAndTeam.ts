import getPlayersByGroup from './getPlayersByGroup'

export default async function getPlayersByGroupAndTeam(
  group: string,
  team: string,
) {
  try {
    const storedPlayers = await getPlayersByGroup(group)

    return storedPlayers.filter((player) => player.team === team)
  } catch (err) {
    throw err
  }
}
