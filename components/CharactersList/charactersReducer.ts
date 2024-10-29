import { Character } from "./typings"

export type ActionType =
  | { type: 'loading'; arg: { loading: boolean } }
  | { type: 'applyFilter'; arg: { status: 'Alive' | 'Dead' | 'unknown' } }
  | { type: 'nextPage'; arg: { pages: number } }
  | { type: 'error' }
  | { type: 'setCharacters'; arg: { characters: Character[] } }
  | { type: 'setTotalPages'; arg: {totalPages: number}}

export type State = {
  loading: boolean;
  status: 'Alive' | 'Dead' | 'unknown' | '';
  pages: number;
  error: boolean;
  characters: Character[];
  totalPages: number
};

export const charactersReducer = (state: State, action: ActionType): State => {
  switch (action.type) {
    case 'loading':
      return { ...state, loading: action.arg.loading }
    case 'applyFilter':
      return { ...state, status: action.arg.status }
    case 'nextPage':
      return { ...state, pages: action.arg.pages }
    case 'error':
      return { ...state, error: true, loading: false }
    case 'setCharacters':
      return { ...state, characters: action.arg.characters, error: false, loading: false }
      case 'setTotalPages':
    return {...state, totalPages: action.arg.totalPages}
    default:
      return state
  }
};