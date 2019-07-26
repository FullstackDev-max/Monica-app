import {PixelRatio, StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  noteContainer: {
    paddingVertical: 20,
    paddingHorizontal: 15,
    backgroundColor: 'white',
    borderColor: '#E2E4E5',
    borderBottomWidth: 1 / PixelRatio.get(),
  },
  date: {
    fontSize: 12,
    marginBottom: 8,
    flex: 1,
  },
  favorite: {
    position: 'relative',
    bottom: 3,
  },
});
