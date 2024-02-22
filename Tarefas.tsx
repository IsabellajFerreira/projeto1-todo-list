import React, { useState } from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export const Tarefas = ({ item, indice }) => {
  const [text, setText] = useState(item.text);

  <View style={{ marginBottom: 10, backgroundColor: 'white', padding: 10, borderRadius: 10, flexDirection: 'row', justifyContent: 'space-between' }}>
    <TextInput
      value={text}
      onChangeText={setText}
    />
    <Text>hello</Text>
  </View>
};

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 14,
    margin: 8,
    borderColor: '#C0C0C0',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderRadius: 10,
  },
});