export interface Character {
  id: number;
  name: string;
  status: 'Alive' | 'Dead' | 'unknown'; 
  species: string;
  type: string;
  gender: 'Male' | 'Female' | 'Genderless' | 'unknown'; 
  origin: Location; 
  location: Location;
  image: string;
  episode: string[]; 
  url: string;
  created: string; 
}

export interface Location {
  name: string;
  url: string;
}

export interface CharactersResponse {
  results: Character[];
}

export interface CharacterListProps {
  characters: Character[]; 
  loading: boolean;
  onNextPage: () => void
  handlePrePage: () => void
}