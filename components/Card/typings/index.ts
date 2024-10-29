export interface Character {
  name: string;
  species: string;
  gender: 'Male' | 'Female' | 'Genderless' | 'unknown'; 
  image: string;
  id: number
}