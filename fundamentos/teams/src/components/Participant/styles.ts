import { StyleSheet } from "react-native";

export default StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#e23c44',
    borderRadius: 4,
    height: 56,
    justifyContent: 'center',
    width: 56
  },
  buttonText: {
    color: '#fff',
    fontSize: 24
  },
  container: {
    alignItems: 'center',
    backgroundColor: '#1f1e25',
    borderRadius: 4,
    flexDirection: 'row',
    gap: 16,
    width: '100%'
  },
  name: {
    color: '#fff',
    flex: 1,
    fontSize: 16,
    marginLeft: 16,
    textTransform: 'capitalize'
  }
})
