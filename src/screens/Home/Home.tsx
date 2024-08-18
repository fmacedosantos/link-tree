import React from 'react';
import { View } from 'react-native';
import { ProfileImage } from '../../components/ProfileImage/ProfileImage';
import { LinkButton } from '../../components/LinkButton/LinkButton';

import { styles } from './Styles';

export function Home() {
  return (
    <View style={styles.container}>
        <ProfileImage text='Felipe Macedo dos Santos'/>
        <View>
          <LinkButton text='LINKEDIN' url='https://www.linkedin.com/in/felipe-macedo-dos-santos-37264a1b5/'/>
          <LinkButton text='GITHUB' url='https://github.com/fmacedosantos'/>
          <LinkButton text='LEET CODE' url='https://leetcode.com/u/fmacedosantos/'/>
          <LinkButton text='YOUTUBE' url='https://www.youtube.com/@fmacedosantos'/>
        </View>

    </View>
  );
}