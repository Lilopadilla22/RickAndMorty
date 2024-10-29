import React from "react"
import { FlatList, View, TouchableOpacity, Text, StyleSheet } from "react-native"
import { CharacterListProps } from "../typings"
import LoadingIndicator from "./LoadingIndicator"
import { Card } from "@/components/Card"

const CharacterListView = ({ characters, loading, onNextPage, handlePrePage }: CharacterListProps) => (
  <View style={{ flex: 1, width: '100%', justifyContent: 'center', alignItems: 'center' }}>
    <FlatList
      data={characters}
      renderItem={({ item }) => <Card {...item} />}
      keyExtractor={(item) => item.id.toString()}
      numColumns={2}
      ListEmptyComponent={() => loading && <LoadingIndicator />}
      contentContainerStyle={{ flexGrow: 1 }}
    />
    <View style={style.containerButtons}>
      <TouchableOpacity onPress={handlePrePage} style={style.containerButton}>
        <Text style={style.buttonText}> Página Anterior </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={onNextPage} style={style.containerButton}>
        <Text style={style.buttonText}> Siguiente página </Text>
      </TouchableOpacity>
    </View>
  </View>
)

export default CharacterListView;

const style = StyleSheet.create({
  containerButtons: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-around',
    backgroundColor: 'rgba(255, 255, 255, 0.5)'
  },
  containerButton: {
    borderWidth: 1,
    width: 150,
    height: 32,
    borderRadius: 8,
    borderRightWidth: 3,
    borderBottomWidth: 3,
    borderTopWidth: 1,
    borderLeftWidth: 1,
    borderColor: 'black',
    backgroundColor: '#fff8e7',
    marginVertical: 10,
    justifyContent: 'center'
  },
  buttonText: {
    textAlign: 'center'
  }
})