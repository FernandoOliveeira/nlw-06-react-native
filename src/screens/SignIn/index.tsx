import React from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { styles } from './styles';
import Illustration from '../../assets/illustration.png';
import { ButtonIcon } from '../../components/ButtonIcon'


export function SignIn() {
  const navigation = useNavigation();

  function handleSignIn() {
    navigation.navigate('Home');

  }

  return (

    <View style={styles.container}>
      <ScrollView style={{ width: '100%' }}>
        <Image
          source={Illustration}
          style={styles.image}
          resizeMode="stretch"

        />
        <View style={styles.content}>
          <Text style={styles.title}>
            Conecte-se{'\n'}
            e organize suas{'\n'}
            jogatinas{'\n'}
          </Text>

          <Text style={styles.subtitle}>
            Crie grupos para jogar seus games {'\n'}
            favoritos com seus amigos
          </Text>

          <ButtonIcon
            title='Entrar com o Discord'
            activeOpacity={.7}
            onPress={handleSignIn}
          />
        </View>

      </ScrollView>
    </View>
  );
}
