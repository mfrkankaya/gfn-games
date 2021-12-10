import React from 'react'
import { View, ViewProps } from 'react-native'
import styles from 'styles'

const Container: React.FC<ViewProps> = ({ style = {}, ...props }) => (
  <View style={[styles.container, style]} {...props} />
)

export default Container
