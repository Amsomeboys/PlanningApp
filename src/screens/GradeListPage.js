import { Text, View, StyleSheet, FlatList } from 'react-native';
import SaveButton from '../components/saveButton';
import RenderItem from '../components/renderItem';
import StudentList from '../Data/studentList.json';

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#fff',
    height: 110,
    borderBottomColor: '#D9D9D9',
    borderBottomWidth: 1,
    justifyContent: 'center',
  },
  greentext: {
    fontSize: 32,
    marginLeft: 15,
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
  },
  title: {
    fontSize: 20,
  },
  text: { fontSize: 18, color: '#3D3D3D' },
});

const DataListPage = ({ navigation }) => {
  return (
    <>
      <View style={styles.header}>
        <Text style={styles.greentext}>GradeList</Text>
      </View>
      <View style={styles.textContainer}>
        <FlatList
          data={StudentList}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <RenderItem item={item} />}
        />
      </View>
    </>
  );
};
export default DataListPage;
