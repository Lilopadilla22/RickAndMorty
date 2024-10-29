import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { CharacterDetailProps } from './typings';

const SectionTitle = ({ title }: { title: string }) => (
  <View style={styles.sectionTitleContainer}>
    <View style={styles.sectionLine} />
    <Text style={styles.sectionTitle}>{title}</Text>
    <View style={styles.sectionLine} />
  </View>
)

export default function CharacterDetail() {
  const { id } = useLocalSearchParams();

  const [data, setData] = useState<CharacterDetailProps | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Error fetching character:', error);
      }
    };

    fetchData();
  }, [id]);

  if (!data) return (
    <View style={styles.loadingContainer}>
      <Text style={styles.loadingText}>Loading...</Text>
    </View>
  );

  const getAvatarStyle = () => {
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

  return (
    <View style={styles.container}>

      <View style={styles.avatarContainer}>
        <Image 
          source={{ uri: data.image }} 
          style={getAvatarStyle()}
        />
      </View>

      <Text style={styles.name}>{data.name}</Text>

      <View style={styles.section}>
        <SectionTitle title="PROPERTIES" />
        <View style={styles.propertyContainer}>
          <View style={styles.propertyRow}>
            <Text style={styles.propertyLabel}>GENDER</Text>
            <Text style={styles.propertyValue}>{data.gender}</Text>
          </View>
          
          <View style={styles.propertyRow}>
            <Text style={styles.propertyLabel}>SPECIES</Text>
            <Text style={styles.propertyValue}>{data.species}</Text>
          </View>
          
          <View style={styles.propertyRow}>
            <Text style={styles.propertyLabel}>STATUS</Text>
            <Text style={styles.propertyValue}>{data.status}</Text>
          </View>
        </View>
      </View>

      <View style={styles.section}>
      <SectionTitle title="WHEREABOUTS" />
        <View style={styles.propertyContainer}>
          <View style={styles.propertyRow}>
            <Text style={styles.propertyLabel}>ORIGIN</Text>
            <Text style={styles.propertyValue}>{data.origin?.name || 'Unknown'}</Text>
          </View>
          
          <View style={styles.propertyRow}>
            <Text style={styles.propertyLabel}>LOCATION</Text>
            <Text style={styles.propertyValue}>{data.location?.name || 'Unknown'}</Text>
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
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    fontSize: 16,
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
  sectionTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
    paddingHorizontal: 16,
  },
  sectionTitle: {
    fontSize: 12,
    color: '#666',
    fontWeight: '500',
    paddingHorizontal: 8,
    textTransform: 'uppercase',
  },
  sectionLine: {
    flex: 1,
    height: 1,
    backgroundColor: '#666',
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
});