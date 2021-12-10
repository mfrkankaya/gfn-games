import React from 'react'
import { StatusBar, StyleSheet, View } from 'react-native'
import Container from 'components/Container'
import SearchBar from 'components/SearchBar'

const Header = () => {
  return (
    <View style={styles.header}>
      <Container style={styles.container}>
        <SearchBar />
      </Container>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#111',
    width: '100%',
    paddingTop: StatusBar.currentHeight,
    height: 64 + (StatusBar.currentHeight || 0)
  },
  container: {
    justifyContent: 'center',
    height: '100%'
  }
})

export default Header
