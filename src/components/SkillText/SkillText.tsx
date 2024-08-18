import React from 'react';
import {  Text, View } from 'react-native';

import { styles } from './Styles';

import FontAwesome from '@expo/vector-icons/FontAwesome';

interface SkillTextProps{
    name: any,
    text: string,
    numberStars: number
}

const Star = () => {
    return <FontAwesome name="star" size={24} color="black" />;
};

export function SkillText({name, text, numberStars}: SkillTextProps) {
  return (
    <View style={styles.container}>
        <FontAwesome name={name} size={24} color="black" />
        <Text style={styles.text}>{text}</Text>
        <View style={styles.starsContainer}>
                {[...Array(numberStars)].map((_, index) => (
                    <Star key={index} />
                ))}
            </View>
    </View>
  );
}