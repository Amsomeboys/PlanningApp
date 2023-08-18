import { TextInput } from 'react-native';

const InputBox = ({ color, onChangeText }) => {
  return (
    <TextInput
      style={{
        borderWidth: 1,
        borderColor: color,
        height: 40,
        width: '50%',
        alignSelf: 'center',
        marginTop: 30,
        borderRadius: 8,
      }}
      placeholder="วันนี้มีงานอะไรบ้าง"
      onChangeText={onChangeText}
    />
  );
};
export default InputBox;
