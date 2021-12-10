import React, { Fragment } from 'react'
import { StatusBar } from 'expo-status-bar'
import Home from 'screens/Home'
import { GamesProvider } from 'contexts/GamesContext'

export default function App() {
  return (
    <Fragment>
      <StatusBar style="light" backgroundColor="#0000" translucent />
      <GamesProvider>
        <Home />
      </GamesProvider>
    </Fragment>
  )
}
