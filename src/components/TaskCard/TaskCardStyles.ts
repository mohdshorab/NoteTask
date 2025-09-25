import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    padding: 16,
    marginBottom: 12,
    borderRadius: 8,
    borderWidth: 0.5,
  },
  completedCard: {
    backgroundColor: 'lightgrey',
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 4,
  },
  updatedAt: {
    fontSize: 12,
    color: '#666',
    marginTop: 4,
  },
});
export default styles;
