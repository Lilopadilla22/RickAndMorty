import { useRouter } from "expo-router"
import { Character } from "./typings"
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'

export const Card = ({
  name,
  gender,
  species,
  image,
  id
}: Character) => {

  const route = useRouter()

  const handlesPress = (id: number) => {
    route.push(`/details/${id}`)
  }

  return (
    <View style={styles.cardShadow}>
      <TouchableOpacity style={styles.cardContainer} onPress={() =>handlesPress(id)}>
        <Image
          source={{ uri: image}}
          style={styles.image}
        />
        <View style={styles.infoContainer}>
          <Text numberOfLines={1} style={styles.name}>{name}</Text>
          <View style={styles.tagsContainer}>
            <Text style={styles.tag}>{gender}</Text>
            <Text numberOfLines={1} style={styles.tag}>{species}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  cardShadow: {
    backgroundColor: 'transparent',
    padding: 4,
  },
  cardContainer: {
    backgroundColor: 'white', 
    borderRadius: 10,
    overflow: 'hidden',
    width: 180,
    height: 290,
    borderRightWidth: 3,
    borderBottomWidth: 3,
    borderTopWidth: 1,
    borderLeftWidth: 1,
    borderColor: 'black',
    margin: 5
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  infoContainer: {
    padding: 10,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  tagsContainer: {
    flexDirection: 'row',
    gap: 4,
  },
  tag: {
    backgroundColor: '#5bc0de',
    color: 'white',
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 8,
    fontSize: 12,
    width: 75
  },
})
