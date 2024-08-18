import React from 'react';
import { Alert, Linking, Text, View } from 'react-native';

import { styles } from './Styles';

interface LinkButtonProps{
    text: string,
    url: string
}

const handlePress = (url: string) => {
    Linking.openURL(url)
    .catch((err) => Alert.alert('Erro', 'Ocorreu um erro com o link.'))
  }  

export function LinkButton({text, url}: LinkButtonProps) {
  return (
    <View style={styles.container}>
        <Text onPress={() => handlePress(url)} style={styles.button}>{text}</Text>
    </View>
  );
}