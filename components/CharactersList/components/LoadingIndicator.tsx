import React from "react"
import { ActivityIndicator, View } from "react-native"

const LoadingIndicator = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <ActivityIndicator size={50} color="#5bc0de" />
  </View>
)

export default LoadingIndicator