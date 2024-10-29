import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import { SectionTitle } from './components/SectionTitle'
import { getAvatarStyle } from './utils/getAvatarStyle'
import { Loading } from './components/Loading'
import { AntDesign } from '@expo/vector-icons'
import useDetailCharacter from './useDetailCharacter'


export default function CharacterDetail() {

  const {state, handleClearCharacter} = useDetailCharacter()

  if (state.loading) return <Loading />

  return  state.character &&(
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={handleClearCharacter}
      >
        <AntDesign name="arrowleft" size={24} color="black" />
      </TouchableOpacity>

      <View style={styles.avatarContainer}>
        <Image
          source={{ uri: state.character.image }}
          style={getAvatarStyle(state.character)}
        />
      </View>

      <Text style={styles.name}>{state.character.name}</Text>

      <View style={styles.section}>
        <SectionTitle title="PROPERTIES" />
        <View style={styles.propertyContainer}>
          <View style={styles.propertyRow}>
            <Text style={styles.propertyLabel}>GENDER</Text>
            <Text style={styles.propertyValue}>{state.character.gender}</Text>
          </View>

          <View style={styles.propertyRow}>
            <Text style={styles.propertyLabel}>SPECIES</Text>
            <Text style={styles.propertyValue}>{state.character.species}</Text>
          </View>

          <View style={styles.propertyRow}>
            <Text style={styles.propertyLabel}>STATUS</Text>
            <Text style={styles.propertyValue}>{state.character.status}</Text>
          </View>
        </View>
      </View>

      <View style={styles.section}>
        <SectionTitle title="WHEREABOUTS" />
        <View style={styles.propertyContainer}>
          <View style={styles.propertyRow}>
            <Text style={styles.propertyLabel}>ORIGIN</Text>
            <Text style={styles.propertyValue}>{state.character.origin?.name || 'Unknown'}</Text>
          </View>

          <View style={styles.propertyRow}>
            <Text style={styles.propertyLabel}>LOCATION</Text>
            <Text style={styles.propertyValue}>{state.character.location?.name || 'Unknown'}</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 16,
  },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 16,
    zIndex: 1,
  },
  avatarContainer: {
    marginTop: 60,
    alignItems: 'center',
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 3,
    borderColor: '#4CAF50',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 16,
    marginBottom: 24,
  },
  section: {
    marginBottom: 24,
  },
  propertyContainer: {
    borderRadius: 8,
    padding: 16,
  },
  propertyRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  propertyLabel: {
    fontSize: 12,
    color: '#666',
    fontWeight: '500',
    borderRightWidth: 3,
    borderBottomWidth: 3,
    borderTopWidth: 1,
    borderLeftWidth: 1,
    borderColor: 'black',
    backgroundColor: 'white',
    padding: 6,
    width: '25%',
    textAlign: 'center'
  },
  propertyValue: {
    marginLeft: 5,
    fontSize: 14,
    color: '#333',
    backgroundColor: '#fff8e7',
    width: '75%',
    textAlign: 'center',
    padding: 6,
    borderRightWidth: 3,
    borderBottomWidth: 3,
    borderTopWidth: 1,
    borderLeftWidth: 1,
    borderColor: 'black',
  },
})