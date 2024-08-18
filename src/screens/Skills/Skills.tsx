import React from 'react';
import { View } from 'react-native';

import { styles } from './Styles';
import { ProfileImage } from '../../components/ProfileImage/ProfileImage';
import { SkillText } from '../../components/SkillText/SkillText';

export function Skills() {
  return (
    <View style={styles.container}>
      <ProfileImage text='Minhas Habilidades'/>
      <View>
        <SkillText name={'language-html5'} text='HTML5' numberStars={5}/>
        <SkillText name={'language-css3'} text='CSS' numberStars={3}/>
        <SkillText name={'language-javascript'} text='JAVASCRIPT' numberStars={4}/>
        <SkillText name={'language-php'} text='PHP' numberStars={4}/>
        <SkillText name={'language-java'} text='JAVA' numberStars={3}/>
        <SkillText name={'react'} text='REACT NATIVE' numberStars={3}/>
      </View>
    </View>
  );
}