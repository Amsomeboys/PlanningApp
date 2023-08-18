import { TouchableHighlight, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  button: {
    marginTop: 30,
    alignSelf: 'center',
    height: 40,
    minWidth: 80,
    paddingLeft: 8,
    paddingRight: 8,
    borderRadius: 10,
    shadowOpacity: 1,
    shadowOffset: 1,
  },
  text: { fontSize: 18, textAlign: 'center', marginTop: 8, color: '#fff' },
});

const SaveButton = ({ title, onPress, sty }) => {
  return (
    <TouchableHighlight /* Can use TouchableOpacity Instead*/
      style={[styles.button, { backgroundColor: '#025E73' }]}
      title={title}
      onPress={onPress}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableHighlight>
  );
};
export default SaveButton;
