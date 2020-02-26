import React, { useState } from 'react';
import {
  SafeAreaView,
  TextInput,
  StyleSheet,
  FlatList,
  View,
  Text,
  StatusBar,
  Button,
  Alert, KeyboardAvoidingView,
} from 'react-native';



const App = () => {
  const [value, onChangeText] = useState('Title Poll');
  const [components, setComponents] = useState([{ index: '0', title: 'Components #0'}]);

  return (
    <>
      <StatusBar barStyle="default" />
      <SafeAreaView style={styles.viewContaner}>
        <KeyboardAvoidingView
          style={styles.viewContaner}
          behavior="padding"
        >
          <TextInput
            style={styles.textInput}
            onChangeText={text => onChangeText(text)}
            value={value}
          />
          <FlatList
            keyExtractor={item => item.index}
            data={components}
            renderItem={({ item }) => {
              return (
                <View style={styles.viewItem}>
                  <Text style={styles.textItem}>index #{item.index}</Text>
                  <TextInput
                    style={styles.textInput}
                    onChangeText={text => {
                      setComponents([...components].map(object => {
                        if (object.index === item.index) {
                          return {
                            ...object,
                            title: text
                          }
                        } else {
                          return object
                        }
                      }));
                    }}
                    value={item.title}
                  />
                </View>
              );
            }}
          />
          <Button
            title={'Add something'}
            style={styles.buttonAdd}
            onPress={ () => {
              setComponents([...components, {
                index: `${components.length}`, title: `Components #${components.length}`
              }]);
            }}
          />
        </KeyboardAvoidingView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
  },
  viewItem: {
    height: 100,
    borderWidth: 1,
    borderColor: 'red',
    justifyContent: 'center',
    margin: 15,
  },
  textItem: {
    fontSize: 20,
  },
  textInput: {
    height: 60,
    borderColor: 'gray',
    borderWidth: 1,
  },
  buttonAdd: {
    alignItems: 'flex-end'
  },
});

export default App;
