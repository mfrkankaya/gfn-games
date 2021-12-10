import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import type { Game } from 'types'

interface Props extends Game {}

const GameListItem: React.FC<Props> = ({ title, store, isFullyOptimized }) => {
  return (
    <View style={styles.container}>
      <Text style={[styles.title, isFullyOptimized && styles.fullyOptimized]}>
        {title}
      </Text>
      <Text style={styles.store}>{store}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 6
  },
  title: {
    fontSize: 18,
    color: '#ccc'
  },
  fullyOptimized: {
    color: '#22c55e'
  },
  store: {
    color: '#898989'
  }
})

export default GameListItem
