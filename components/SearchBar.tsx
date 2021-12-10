import React from 'react'
import { StyleSheet, TextInput, TouchableOpacity, View } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { useGames } from 'contexts/GamesContext'

const SearchBar = () => {
  const { searchText, setSearchText } = useGames()

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={searchText}
        onChangeText={(value) => setSearchText(value)}
        placeholder="Search games"
        placeholderTextColor="#676767"
      />

      {searchText !== '' && (
        <TouchableOpacity
          style={styles.clear}
          onPress={() => setSearchText('')}>
          <MaterialCommunityIcons
            name="close-circle"
            size={24}
            color="#676767"
          />
        </TouchableOpacity>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    height: 48,
    backgroundColor: '#222',
    borderRadius: 12
  },
  input: {
    flex: 1,
    height: '100%',
    borderRadius: 12,
    paddingHorizontal: 16,
    color: '#abacaf'
  },
  placeholder: {},
  clear: {
    height: '100%',
    width: 48,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default SearchBar
