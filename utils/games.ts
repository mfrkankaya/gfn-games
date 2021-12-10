import { Game } from 'types'

export const filterBySearchText = (games: Game[], searchText = '') => {
  if (searchText === '') return games

  const lowerCasedSearchText = searchText.toLowerCase()

  return games.filter((game) =>
    game.title.toLowerCase().includes(lowerCasedSearchText)
  )
}
