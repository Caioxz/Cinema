import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function UserProfile() {
  const navigation = useNavigation();

  const handleNavigateToMainScreen = () => {
    // Navegar para a tela "Principal" ao clicar no ícone de seta
    navigation.navigate('Principal');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={handleNavigateToMainScreen} style={styles.menuIcon}>
          <FontAwesome name="chevron-left" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.title}>Perfil do Usuário</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.text}>Usuario não cadastrado!!</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#555',
    padding: 15,
  },
  menuIcon: {
    marginRight: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  text: {
    fontSize: 18,
    color: '#fff',
  },
});
