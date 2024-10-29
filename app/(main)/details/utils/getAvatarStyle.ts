import { CharacterDetailProps } from "../typings";

export   const getAvatarStyle = (data: CharacterDetailProps) => {
  const baseStyle = {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 3,
  };

  return {
    ...baseStyle,
    borderColor: data.status === 'Alive' ? '#4CAF50' : '#FF0000'
  };
}