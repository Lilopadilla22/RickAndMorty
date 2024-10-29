import { useEffect, useReducer } from "react"
import { ActivityIndicator, FlatList, View, Text, Image, Button } from "react-native"
import { Character } from "./typings"
import { Card } from "../Card"

type ActionType = {
  type: 'loading'
  arg: {
    loading: boolean
  }
} | {
  type: 'applyFilter'
  arg: {
    status: 'Alive' | 'Dead' | 'unknown';
  }
} | {
  type: 'nextPage'
  arg: {
    pages: number;
  }
} | {
  type: 'error'
} | {
  type: 'setCharacters'
  arg: {
    characters: Character[];
  }
}

type State = {
  loading: boolean;
  status: 'Alive' | 'Dead' | 'unknown' | '';
  pages: number;
  error: boolean;
  characters: Character[];

};

const reducer = (state: State, action: ActionType): State => {
  switch (action.type) {
    case 'loading':
      return {
        ...state,
        loading: action.arg.loading,
      };

    case 'applyFilter':
      return {
        ...state,
        status: action.arg.status,
      };

    case 'nextPage':
      return {
        ...state,
        pages: action.arg.pages,
      };

    case 'error':
      return {
        ...state,
        error: true,
        loading: false
      };

    case 'setCharacters':
      return {
        ...state,
        characters: action.arg.characters,
        error: false,
        loading: false
      };

    default:
      return state;
  }
};

export const CharactersList = () => {

  const [state, dispatch] = useReducer(reducer, {
    loading: false,
    pages: 1,
    error: false,
    status: '',
    characters: []
  })


  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: 'loading', arg: { loading: true } });

      try {
        const response = await fetch(`https://rickandmortyapi.com/api/character?page=${state.pages}`);
        const result = await response.json();
        dispatch({ type: 'setCharacters', arg: { characters: result.results } });
      } catch (error) {
        dispatch({ type: 'error' });
      }
    };

    fetchData();
  }, [state.pages]);

  const handleNextPage = () => {
    dispatch({ type: 'nextPage', arg: { pages: state.pages + 1 } });
  }

  if (state.error) return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Image source={{uri: ''}}/>
      <Text style={{ color: 'red', fontSize: 30 }}>Algo salio mal...!</Text>
    </View>
  );

  return (
    <View style={{ flex: 1, width: '100%', justifyContent: 'center', alignItems: 'center' }}>
      <FlatList
        data={state.characters}
        renderItem={({ item }) => {
          return <Card {...item} />
        }}
        numColumns={2}
        ListEmptyComponent={() => {
          return <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            {state.loading && <ActivityIndicator size={50} color={'#5bc0de'} />}
          </View>
        }}
        contentContainerStyle={{ flexGrow: 1 }}
      />
      <Button title="Siguiente página" onPress={handleNextPage} />
    </View>
  )
}