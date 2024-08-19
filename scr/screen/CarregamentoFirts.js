import React, { useEffect } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import carregamento from './assets/carregamentoo.gif';

export default function CarregamentoScreen() {
  const navigation = useNavigation();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('Login');
    }, 3000); // 3000 milissegundos = 3 segundos

    return () => clearTimeout(timer); // Limpa o timer quando o componente for desmontado
  }, [navigation]); // Adicione a navegação como dependência

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={carregamento}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#212021',
    alignItems: 'center',
    justifyContent: 'center',
  },

  image: {
    width: '44%',
    height: '30%'
  },
});