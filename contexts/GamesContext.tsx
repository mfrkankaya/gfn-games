import React, { createContext, useState, useEffect, useContext } from 'react'
import type { Game } from 'types'
import * as api from 'api'
import useDebounce from 'hooks/useDebounce'
import * as gamesUtils from 'utils/games'

interface State {
  loading: boolean
  data: Game[]
  games: Game[]
  searchText: string
  setSearchText: (value: string) => void
}

const INITIAL_STATE: State = {
  loading: true,
  data: [],
  games: [],
  searchText: '',
  setSearchText: (value) => {}
}

const Context = createContext(INITIAL_STATE)

export const GamesProvider: React.FC = ({ children }) => {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState<State['data']>([])
  const [games, setGames] = useState<State['data']>([])
  const [searchText, setSearchText] = useState('')
  const debouncedSearchText = useDebounce(searchText, 250)

  const initialize = () => {
    api
      .getGames()
      .then(setData)
      .catch(console.error)
      .finally(() => setLoading(false))
  }

  useEffect(initialize, [])

  const filterGames = () => {
    setGames(gamesUtils.filterBySearchText(data, debouncedSearchText))
  }

  useEffect(filterGames, [data, debouncedSearchText])

  return (
    <Context.Provider
      value={{ loading, data, games, searchText, setSearchText }}>
      {children}
    </Context.Provider>
  )
}

export const useGames = () => useContext(Context)
