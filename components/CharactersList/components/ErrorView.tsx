import React from "react"
import { View, Text, Image } from "react-native"

const ErrorView = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Image source={{ uri: '' }} />
    <Text style={{ color: 'red', fontSize: 30 }}>Algo salió mal...!</Text>
  </View>
)

export default ErrorView