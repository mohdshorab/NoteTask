import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 10,
  },
  inputBoxTitle: {
    fontSize: 28,
    borderWidth: 1,
    borderRadius: 10,
    padding: 5,
    marginVertical: 10,
    textAlignVertical: 'top',
  },
  inputBoxDesc: {
    fontSize: 18,
    borderWidth: 1,
    borderRadius: 10,
    padding: 5,
    fontWeight: '300',
    marginVertical: 10,
    textAlignVertical: 'top',
    height: 450,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
    paddingHorizontal: 16,
  },
  button: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginHorizontal: 8,
  },
  discardButton: {
    backgroundColor: 'red',
  },
  saveButton: {
    backgroundColor: 'green',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  inputError: {
    borderColor: 'red',
    borderWidth: 1,
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    marginTop: 4,
    marginBottom: 8,
  },
  deleteButton: {
    backgroundColor: 'red',
  },
});
export default styles;
