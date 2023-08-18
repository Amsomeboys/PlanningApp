import dayjs from 'dayjs';
import { View, Text, StyleSheet } from 'react-native';
import SaveButton from '../components/saveButton';

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#fff',
    height: 140,
    justifyContent: 'center',
    borderBottomColor: '#D9D9D9',
    borderBottomWidth: 1,
  },
  greentext: {
    fontSize: 32,
    marginLeft: 15,
    marginTop: 40,
    color: '#025E73',
    fontWeight: 'bold',
  },
  textContainer: {
    height: 60,
    width: '100%',
    shadowOpacity: 1,
    shadowOffset: 1,
    borderColor: '#151515',
    backgroundColor: '#fff',
    borderRadius: 8,
  },
  title: {
    fontSize: 20,
  },
  text: { fontSize: 18, color: '#3D3D3D' },
});

const PlanningPage = ({ route, navigation }) => {
  const { text } = route.params;
  return (
    <>
      <View style={styles.header}>
        <Text style={styles.greentext}>Calendar</Text>
      </View>
      <View>
        <Text style={[styles.title, { margin: 20 }]}>
          {dayjs().format('DD/MM/YYYY')}
        </Text>
        <View style={styles.textContainer}>
          <Text style={[styles.text, { margin: 20 }]}>{text}</Text>
        </View>
        <View>
          <SaveButton
            title="Go To Student Data Page"
            style
            onPress={() => navigation.navigate('DataGroups')}
          />
        </View>
      </View>
    </>
  );
};
export default PlanningPage;
