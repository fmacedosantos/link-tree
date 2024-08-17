import React from 'react';
import { Image, Text, View } from 'react-native';

import { styles } from './Styles';
import profile from '../../../assets/pictures/profile-picture.jpeg'

interface ProfileImageProps {
    text: string
}

export function ProfileImage({text}: ProfileImageProps) {
  return (
    <View style={styles.container}>
        <Image source={profile} style={styles.image}/>
        <Text style={styles.text}>{text}</Text>
    </View>
  );
}