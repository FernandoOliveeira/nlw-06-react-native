import React from 'react';
import { View, FlatList, Text } from 'react-native';

import { Guild, GuildProps } from '../../components/Guild';
import { ListDivider } from '../../components/ListDivider';

import { styles } from './styles';

type Props = {
  handleGuildSelect: (guild: GuildProps) => void;
}

export function Guilds({ handleGuildSelect }: Props) {
  const guilds = [
    {
      id: '1',
      name: 'Lendários',
      icon: 'image.png',
      owner: true
    },
    {
      id: '2',
      name: 'Loucaregem',
      icon: 'image.png',
      owner: false
    },
    {
      id: '3',
      name: 'Vamooo',
      icon: 'image.png',
      owner: true
    },
    {
      id: '4',
      name: 'Lendários',
      icon: 'image.png',
      owner: true
    },
    {
      id: '5',
      name: 'Loucaregem',
      icon: 'image.png',
      owner: false
    },
    {
      id: '6',
      name: 'Vamooo',
      icon: 'image.png',
      owner: true
    },
  ]

  return (
    <View style={styles.container}>
      <FlatList
        data={guilds}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <Guild
            data={item}
            onPress={() => handleGuildSelect(item)}
          />

        )}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => <ListDivider isCentered />}
        ListHeaderComponent={() => <ListDivider isCentered />}
        style={styles.guilds}
        contentContainerStyle={{ paddingBottom: 68, paddingTop: 103 }}
      />
    </View>

  );

}