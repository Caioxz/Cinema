import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const SettingsItem = ({ title, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.item}>
      <Text style={styles.itemText}>{title}</Text>
    </TouchableOpacity>
  );
};

export default function SettingsScreen() {
  const navigation = useNavigation();

  const handleLogout = () => {
    // Lógica para fazer logout
    console.log("Logout!");
    // Fechar o drawer após o logout
    navigation.closeDrawer();
  };

  const handleNavigateBack = () => {
    // Sair da tela do drawer ao clicar no ícone da seta
    navigation.navigate('Principal'); 
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <TouchableOpacity onPress={handleNavigateBack}>
          <FontAwesome name="chevron-left" size={24} color="#fff" style={styles.icon} />
        </TouchableOpacity>
        <Text style={styles.title}>Configurações</Text>
      </View>
      <SettingsItem title="Editar Perfil" onPress={() => console.log("Editar Perfil")} />
      <SettingsItem title="Preferências" onPress={() => console.log("Preferências")} />
      <SettingsItem title="Notificações" onPress={() => console.log("Notificações")} />
      <SettingsItem title="Sobre" onPress={() => console.log("Sobre")} />
      <SettingsItem title="Ajuda" onPress={() => console.log("Ajuda")} />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333',
    padding: 20,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginLeft: 10,
  },
  icon: {
    marginRight: 10,
  },
  item: {
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  itemText: {
    fontSize: 18,
    color: '#fff',
  },
});
