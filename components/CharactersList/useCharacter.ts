import { useEffect, useReducer } from "react"
import { charactersReducer, State } from "./charactersReducer"
import axios from "axios"

export const useCharacters = () => {
  const [state, dispatch] = useReducer(charactersReducer, {
    loading: false,
    pages: 1,
    error: false,
    status: '',
    characters: [],
    totalPages: 1,
  } as unknown as State)

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: 'loading', arg: { loading: true } })

      try {
        const response = await axios.get(`https://rickandmortyapi.com/api/character?page=${state.pages}`);
        const result = await response.data.results
        dispatch({ type: 'setCharacters', arg: { characters: result } })

        if (response.data.info.pages) {
          dispatch({ type: 'setTotalPages', arg: { totalPages: response.data.info.pages } });
        }
      } catch (error) {
        dispatch({ type: 'error' })
      }
    }

    fetchData()
  }, [state.pages])

  const handleNextPage = () => {
    const nextPage = state.pages + 1;
    dispatch({ type: 'nextPage', arg: { pages: nextPage } })
  }

  const handlePrePage = () => {
    if(state.pages > 1) {
      const nextPage = state.pages - 1;
    dispatch({ type: 'nextPage', arg: { pages: nextPage } })
    } 
  }

  return { state, handleNextPage, handlePrePage }
}