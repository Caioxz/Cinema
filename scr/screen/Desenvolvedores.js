import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import Caio from './assets/caio.jpeg';
import Gabi from './assets/gabi.jpeg';
import Juan from './assets/juan.jpeg';
import Antonio from './assets/antonio.jpeg';

export default function SettingsScreen() {
  
  const navigation = useNavigation();

  const handleNavigateBack = () => {
    navigation.navigate('Principal');
  }

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <TouchableOpacity onPress={handleNavigateBack}>
          <FontAwesome name="chevron-left" size={24} color="#fff" style={styles.icon} />
        </TouchableOpacity>
        <Text style={styles.title}>Desenvolvedores</Text>
      </View>
      <View style={styles.developersContainer}>
        <View style={styles.rowContainer}>
          <View style={styles.columnContainer}>
            <Image source={Caio} style={styles.area1} />
            <Text style={styles.text}>Caio</Text>
          </View>
          <View style={styles.columnContainer}>
            <Image source={Juan} style={styles.area1} />
            <Text style={styles.text}>Juan</Text>
          </View>
        </View>
        <View style={styles.rowContainer}>
          <View style={styles.columnContainer}>
            <Image source={Gabi} style={styles.area2} />
            <Text style={styles.text}>Gabi</Text>
          </View>
          <View style={styles.columnContainer}>
            <Image source={Antonio} style={styles.area2} />
            <Text style={styles.text}>Antonio</Text>
          </View>
        </View>
      </View>
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
  developersContainer: {
 
    alignItems: 'center',


  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  
    
  },
  columnContainer: {
    alignItems: 'center',
    marginHorizontal: 20,
    marginTop: 80,
  },
  area1: {
    width: 160,
    height: 160,
    borderRadius: 10,
    
  },
  area2: {
    width: 160,
    height: 160,
    borderRadius: 10,
    
  },
  text: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
});
