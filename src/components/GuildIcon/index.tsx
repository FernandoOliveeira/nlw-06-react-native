import React from 'react';
import { Text, Image } from 'react-native';

import { styles } from './styles';


export function GuildIcon() {
  const uri = 'https://e7.pngegg.com/pngimages/448/735/png-clipart-silhouette-of-mask-illustration-discord-computer-icons-logo-user-others-miscellaneous-angle.png';

  return (
    <Image
      style={styles.image}
      source={{ uri }}
      resizeMode="cover"

    />
  );
}