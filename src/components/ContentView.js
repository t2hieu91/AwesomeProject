import React, { useState } from 'react';
import {View, FlatList, StyleSheet, Text, Button} from 'react-native';
import InputTitle from './InputTitle';

const ContentView = () => {
  const [components, setComponents] = useState([{ index: '0', title: 'Components #0'}]);

  onTextChange = (item, value) => {
    setComponents([...components].map(object => {
      if (object.index === item.index) {
        return {
          ...object,
          title: value
        }
      } else {
        return object
      }
    }));
  };

  onButtonPress = () => {
    setComponents([...components, {
      index: `${components.length}`, title: `Components #${components.length}`
    }]);
  };

  return (
    <View style={styles.viewContainer}>
      <FlatList
        style={styles.listView}
        keyExtractor={item => item.index}
        data={components}
        renderItem={({ item }) => {
          return (
            <View style={styles.viewItem}>
            <Text style={styles.textItem}>index #{item.index}</Text>
              <InputTitle value={item.title} onChange={(text) => this.onTextChange(item, text)}/>
            </View>
          );
        }}
      />
      <Button
        title={'Add something'}
        style={styles.buttonAdd}
        onPress={ () => this.onButtonPress() }
      />
    </View>
  )
};

const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
  },
  listView: {
    borderWidth: 1,
    borderColor: 'blue',
  },
  viewItem: {
    borderWidth: 1,
    borderColor: 'red',
    justifyContent: 'center',
    marginTop: 15,
    margin: 15,
  },
  textItem: {
    fontSize: 20,
  },
});

export default ContentView;
