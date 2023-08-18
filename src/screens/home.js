import { useState } from 'react';
import { Alert, StyleSheet, Text, View } from 'react-native';
import InputBox from '../components/InputBox';
import SaveButton from '../components/saveButton';

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#fff',
    height: 140,
    justifyContent: 'center',
    borderBottomColor: '#D9D9D9',
    borderBottomWidth: 1,
  },
  title: { fontSize: 32 },
  text: {
    fontSize: 24,
  },
  greentext: {
    fontSize: 32,
    marginLeft: 5,
    color: '#025E73',
    fontWeight: 'bold',
  },
});

const HomeScreen = ({ navigation }) => {
  const [text, setText] = useState('');
  return (
    <View>
      <View style={styles.header}>
        <View style={{ flexDirection: 'row', marginTop: 40 }}>
          <Text style={[styles.title, { marginLeft: 15 }]}>Today</Text>
          <Text style={styles.greentext}>Plan</Text>
        </View>
      </View>
      <View
        style={{
          backgroundColor: '#F2F2F2',
          minHeight: '100%',
        }}
      >
        <Text
          style={[
            styles.text,
            {
              color: '#151515',
              textAlign: 'center',
              marginTop: 200,
            },
          ]}
        >
          งานวันนี้
        </Text>
        <InputBox color="#7A7A7A" onChangeText={(text) => setText(text)} />
        <SaveButton
          title="Save"
          color="#025E73"
          onPress={() => {
            Alert.alert('Save Success', 'You Plan Save Successes'),
              navigation.navigate('Calendar', { text });
          }}
        />
      </View>
    </View>
  );
};
export default HomeScreen;
