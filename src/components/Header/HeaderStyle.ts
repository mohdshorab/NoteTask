import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    padding: 15, 
    alignItems: 'center',
    justifyContent: 'center', 
    borderBottomWidth: 1,
    borderBottomColor: 'grey', 
    marginBottom: 10,
    flexDirection: 'row',
  },
  titleText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'gray',
  },
  btnContainer:{
    justifyContent: 'flex-start',
  },
  backContainer:{
    position: 'absolute',
    left: 0,
  }
});

export default styles;
