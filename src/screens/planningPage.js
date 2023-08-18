import dayjs from 'dayjs';
import { View, Text, StyleSheet, Image } from 'react-native';
import SaveButton from '../components/saveButton';
import Picture from '../../assets/image/friend.jpg';

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
    height: 'auto',
    width: '100%',
    shadowOpacity: 1,
    shadowOffset: 1,
    borderColor: '#151515',
    backgroundColor: '#fff',
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 20,
  },
  text: { fontSize: 18, color: '#3D3D3D', marginTop: 40 },
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
          <Image
            source={{
              uri: 'https://i.pinimg.com/originals/c5/5d/31/c55d3169242a69c0a4de9fc74a9bfa0b.jpg',
            }}
            style={{ width: 100, height: 100 }}
            /* Internet Source */
          ></Image>
          <Text style={[styles.text, { margin: 20 }]}>{text}</Text>
          <Image
            source={Picture}
            style={{ height: 100, width: 100 }}
            /* Local Source */
          />
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
