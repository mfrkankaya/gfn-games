import React from 'react'
import { FlatList, View } from 'react-native'
import styles from 'styles'
import Header from 'components/Header'
import { useGames } from 'contexts/GamesContext'
import GameListItem from 'components/GameListItem'
import Loading from 'components/Loading'

const Home = () => {
  const { loading, games } = useGames()

  return (
    <View style={styles.background}>
      <Header />
      {loading ? (
        <Loading />
      ) : (
        <FlatList
          style={{ paddingHorizontal: 20 }}
          data={games}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <GameListItem {...item} />}
        />
      )}
    </View>
  )
}

export default Home
