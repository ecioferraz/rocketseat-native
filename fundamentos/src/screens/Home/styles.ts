import { StyleSheet } from "react-native";

export default StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#31cf67',
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
    flex: 1,
    backgroundColor: '#131016',
    gap: 36,
    padding: 24
  },
  emptyListText: {
    color: '#fff',
    fontSize: 14,
    textAlign: 'center'
  },
  eventDate: {
    color: '#6b6b6b',
    fontSize: 16
  },
  eventName: {
    color: '#fdfcfe',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 48
  },
  form: {
    flexDirection: 'row',
    gap: 12,
    width: '100%'
  },
  input: {
    backgroundColor: '#1d1e25',
    borderRadius: 4,
    color: '#fdfcfe',
    flex: 1,
    fontSize: 16,
    height: 56,
    padding: 16
  },
  participantsContainer: {
    gap: 12
  }
});
