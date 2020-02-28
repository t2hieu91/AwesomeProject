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
        placeholder={'Your question ?'}
      />
    </View>
  )
};

const styles = StyleSheet.create({
  viewContainer: {
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
  },
  textInput: {
    marginHorizontal: 15,
    height: 60,
    fontSize: 20,
  },
});

export default InputTitle;
