import axios from 'axios'
import type { Game } from 'types'

export const getGames = (): Promise<Game[]> =>
  axios
    .get(
      'https://static.nvidiagrid.net/supported-public-game-list/locales/gfnpc-en-US.json'
    )
    .then((res) => res.data)
