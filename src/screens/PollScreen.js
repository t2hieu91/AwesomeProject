import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  StatusBar,
  KeyboardAvoidingView,
} from 'react-native';
import InputTitle from '../components/InputTitle';
import ContentView from '../components/ContentView';

const PollScreen = () => {
  const [value, onChangeText] = useState('');

  onTitleChange = (value) => {
    onChangeText(value);
  };

  return (
    <>
      <StatusBar barStyle="default" />
      <SafeAreaView style={styles.viewContainer}>
        <KeyboardAvoidingView
          style={styles.viewContainer}
          behavior="padding"
          keyboardVerticalOffset={100}
        >
          <InputTitle value={value} onChange={(text) => this.onTitleChange(text)}/>
          <ContentView />
        </KeyboardAvoidingView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    backgroundColor: 'white',
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

export default PollScreen;
