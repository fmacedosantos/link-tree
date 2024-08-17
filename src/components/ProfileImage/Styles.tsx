import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 150,
    height: 150,
    borderWidth: 5,
    borderColor: 'black',
    borderRadius: 40,
    marginBottom: 10
  },
  text: {
    fontSize: 25,
    fontWeight: 'bold'
  }
});