import { CharacterDetailProps } from "./typings"

export type ActionType =
  | { type: 'loading'; arg: { loading: boolean } }
  | { type: 'error' }
  | { type: 'setCharacter'; arg: { character: CharacterDetailProps } }
  | { type: 'clearCharacter'}

export type State = {
  loading: boolean;
  error: boolean;
  character: CharacterDetailProps | undefined
};

export const characterReducer = (state: State, action: ActionType): State => {
  switch (action.type) {
    case 'loading':
      return { ...state, loading: action.arg.loading }
    case 'error':
      return { ...state, error: true, loading: false }
    case 'setCharacter':
      return { ...state, character: action.arg.character, error: false, loading: false }
      case 'clearCharacter':
        return { error: false, loading: false, character: undefined }
    default:
      return state
  }
};