
import { View, Text, StyleSheet } from 'react-native'

export const SectionTitle = ({ title }: { title: string }) => (
  <View style={styles.sectionTitleContainer}>
    <View style={styles.sectionLine} />
    <Text style={styles.sectionTitle}>{title}</Text>
    <View style={styles.sectionLine} />
  </View>
)

const styles = StyleSheet.create({
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
})