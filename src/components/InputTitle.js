import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

const InputTitle = ({value, onChange}) => {
  return (
    <View style={styles.viewContainer}>
      <TextInput
        style={styles.textInput}
        onChangeText={text => onChange(text)}
        value={value}
        clearButtonMode={'while-editing'}
      />
    </View>
  )
};

const styles = StyleSheet.create({
  viewContainer: {
    borderColor: 'gray',
    borderWidth: 1,
  },
  textInput: {
    height: 60,
  },
});

export default InputTitle;
