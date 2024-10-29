import React from "react"
import { View } from "react-native"
import { useCharacters } from "./useCharacter"
import ErrorView from "./components/ErrorView"
import CharacterListView from "./components/CharacterListView"

export const CharactersList = () => {
  const { state, handleNextPage, handlePrePage } = useCharacters()

  if (state.error) {
    return <ErrorView />
  }

  return (
    <View style={{ flex: 1 }}>
      <CharacterListView
        characters={state.characters}
        loading={state.loading}
        onNextPage={handleNextPage}
        handlePrePage={handlePrePage}
      />
    </View>
  );
};