import React from 'react';
import { View } from 'react-native';

import { styles } from './Styles';
import { ProfileImage } from '../../components/ProfileImage/ProfileImage';
import { SkillText } from '../../components/SkillText/SkillText';

export function Skills() {
  return (
    <View style={styles.container}>
      <ProfileImage text='Minhas Habilidades'/>
      <SkillText name={'html5'} text='HTML5' numberStars={5}/>
      <SkillText name={'css3'} text='CSS' numberStars={3}/>
    </View>
  );
}