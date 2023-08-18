import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#878787',
  },
});

const RenderItem = ({ item, page }) => {
  return page === 1 ? (
    <View style={styles.container}>
      <Text>
        {item.id} : {item.name}
      </Text>
    </View>
  ) : (
    <View style={styles.container}>
      <Text>
        {item.name} : {item.Grade}
      </Text>
    </View>
  );
};

export default RenderItem;
