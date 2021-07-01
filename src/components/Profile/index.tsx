import React from 'react';
import { View, Text } from 'react-native';

import { useAuth } from '../../hooks/auth';

import { styles } from './styles';
import { Avatar } from '../Avatar';

export function Profile() {
  const { user } = useAuth();

  const phrases = [
    'Hoje é dia de vitória',
    'Jamais tiltarei',
    'Jogaremos com o coração'
  ]

  function randomPhrase() {
    return Math.floor(Math.random() * phrases.length);
  }

  return (
    <View style={styles.container}>

      <Avatar urlImage={user.avatar} />

      <View>
        <View style={styles.user}>
          <Text style={styles.greeting}>
            Olá,
          </Text>

          <Text style={styles.username}>
            {user.firstName}
          </Text>
        </View>

        <Text style={styles.message}>
          {phrases[randomPhrase()]}
        </Text>
      </View>

    </View>
  );

}
