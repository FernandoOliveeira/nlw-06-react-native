import React from 'react';
import { Text, View, Image, StatusBar, ScrollView } from 'react-native';

import { styles } from './styles';
import Illustration from '../../assets/illustration.png';
import { ButtonIcon } from '../../components/ButtonIcon'

export function SignIn() {

  return (

    <View style={styles.container}>
      <ScrollView>
        <StatusBar
          barStyle="light-content"
          backgroundColor="transparent"
          translucent
        />

        <Image
          source={Illustration}
          style={styles.image}
          resizeMode="stretch"

        />
        <View style={styles.content}>
          <Text style={styles.title}>
            Organize{`\n`}
            suas jogatinas{`\n`}
            facilmente{`\n`}
          </Text>

          <Text style={styles.subtitle}>
            Crie grupos para jogar seus games {`\n`}
            favoritos com seus amigos
          </Text>

          <ButtonIcon
            title='Entrar com o Discord'
            activeOpacity={.7}
          />
        </View>

      </ScrollView>
    </View>
  );
}
