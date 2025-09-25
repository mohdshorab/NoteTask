import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 10,
  },
  floatingButton: {
    borderWidth: 1,
    borderRadius: 50,
    padding: 10,
    position: 'absolute',
    right: 30,
    bottom: 50,
    backgroundColor: 'white',
  },
  btnText: {
    fontSize: 30,
  },
  searchBarContainer: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  searchInput: {
    height: 40,
    borderWidth: 1,
    borderColor: 'lightgray',
    borderRadius: 8,
    paddingHorizontal: 10,
    backgroundColor: 'white',
  },
  noTaskFoundText: { alignSelf: 'center' },
  loading: { flex: 1, justifyContent: 'center', alignItems: 'center' },
});
export default styles;
