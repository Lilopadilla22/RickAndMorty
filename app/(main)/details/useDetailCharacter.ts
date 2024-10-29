import { useEffect, useReducer } from "react"
import { characterReducer } from "./characterReducer"
import axios from "axios"
import { useLocalSearchParams, useRouter } from "expo-router"

export default function useDetailCharacter() {

  const { id } = useLocalSearchParams()
  const router = useRouter()

  const [state, dispatch] = useReducer(characterReducer, {
    loading: false,
    error: false,
    character: undefined
  })

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: 'loading', arg: { loading: true } })
      try {
        const response = await axios.get(`https://rickandmortyapi.com/api/character/${id}`)
        const result = await response.data
        dispatch({ type: 'setCharacter', arg: { character: result } })
      } catch (error) {
        dispatch({ type: 'error' })
        console.error('Error fetching character:', error)
      }
    }
    fetchData()
  }, [id])

  const handleClearCharacter = () => {
    dispatch({ type: 'clearCharacter' })
    router.back()
  }

  return {
    state,
    handleClearCharacter
  }
}