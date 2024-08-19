import React from 'react';
import { TouchableOpacity, StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { Octicons, AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


import besouro from './assets/besouro.jpg';
import alerquina from './assets/alerquenina.png';
import batman from './assets/batman.jpg';
import homemFormiga from './assets/formiga.jpeg';
import shang from './assets/shang.png';
import kraven from './assets/kraven.png';
import flash from './assets/flash.png'
import aquaman from './assets/aquamen.jpg'
import viuva from './assets/viuvanegra.png'


const filmesParteSuperior = [
  { title: 'Besouro Azul', image: besouro, avaliacao: '10/07/2030' },
  { title: 'Batman', image: batman, avaliacao: '20/07/2026'},
  { title: 'Aves de Rapina', image: alerquina, avaliacao: '15/01/2028' },
];

const filmesParteInferior = [
  { title: 'Quantumania', image: homemFormiga, avaliacao: '20/02/2029' },
  { title: 'Shang-chi', image: shang, avaliacao: '28/09/2070'},
  { title: 'Kraven', image: kraven, avaliacao: '19/12/2060'},
];
const filmesParteInferior2 = [
  { title: 'Flash', image: flash, avaliacao: '25/06/2059' },
  { title: 'Aquaman', image: aquaman, avaliacao: '30/11/2048'},
  { title: 'Viuva Negra', image: viuva, avaliacao: '09/07/2024'},
];

export default function Embreve() {

    const navigation = useNavigation();

    const handleNavigateBack = () => {
        navigation.navigate('Principal');
    }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <Text style={styles.headerText}>Filmes</Text>
        </View>
        <View style={styles.headerRight}>
          <Text style={styles.estadoText}>São Paulo</Text>
          <TouchableOpacity style={styles.menuIcon} onPress={() => navigation.openDrawer()}>
            <Octicons name="three-bars" size={24} color="white" />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.cartazContainer}>
        <TouchableOpacity onPress={handleNavigateBack}>
            <Text style={[styles.cartaz, {color:'#fff'}]}>Em Cartaz</Text>
        </TouchableOpacity>
        <Text style={[styles.cartaz, styles.borderBottom]}>Em Breve</Text>
        
      </View>

      <View style={styles.movieContainer}>
        <View style={styles.movieSection}>
          {filmesParteSuperior.map((filme, index) => (
            <View key={index} style={styles.movieItem}>
              <TouchableOpacity>
                <Image
                  style={styles.movieImage}
                  source={filme.image}
                />
                <View style={styles.avaliacaoContainer}>
                  <Text style={styles.titlePerso}>{filme.title}</Text>
                  <Text style={styles.textoAvaliacao}><AntDesign name="star" size={14} color="red" /> {filme.avaliacao}</Text>
                </View>
              </TouchableOpacity>
            </View>
          ))}
        </View>
        <View style={styles.movieSection}>
          {filmesParteInferior.map((filme, index) => (
            <View key={index} style={styles.movieItem}>
              <TouchableOpacity>
                <Image
                  style={styles.movieImage}
                  source={filme.image}
                />
                <View style={styles.avaliacaoContainer}>
                  <Text style={styles.titlePerso}>{filme.title}</Text>
                  <Text style={styles.textoAvaliacao}><AntDesign name="star" size={14} color="red" /> {filme.avaliacao}</Text>
                </View>
              </TouchableOpacity>
            </View>
          ))}
        </View>
        <View style={styles.movieSection}>
          {filmesParteInferior2.map((filme, index) => (
            <View key={index} style={styles.movieItem}>
              <TouchableOpacity>
                <Image
                  style={styles.movieImage}
                  source={filme.image}
                />
                <View style={styles.avaliacaoContainer}>
                  <Text style={styles.titlePerso}>{filme.title}</Text>
                  <Text style={styles.textoAvaliacao}><AntDesign name="star" size={14} color="red" /> {filme.avaliacao}</Text>
                </View>
              </TouchableOpacity>
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#494949',
    minHeight: '130%',
  },
  header: {
    backgroundColor: '#212021',
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 100,
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    marginRight: 10,
  },
  estadoText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  menuIcon: {
    marginLeft: 10,
  },
  cartazContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  cartaz: {
    color: '#fb1c0a',
    fontWeight: 'bold',
    marginRight: 20,
    bottom: 35,
    fontSize:17,
    top:-40,
  },
  borderBottom: {
    top: -40,
    borderBottomWidth: 3,
    borderBottomColor: 'red',
  },
  movieContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 40,
  },
  movieSection: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  movieItem: {
    marginHorizontal: 5,
  },
  movieImage: {
    width: 110,
    height: 170,
    borderRadius: 5,
    marginBottom: 10,
  },
  avaliacaoContainer: {
    backgroundColor: '#202020',
    width: 119,
    borderRadius: 13,
    alignItems: 'center',
  },
  textoAvaliacao: {
    fontSize: 13,
    color: 'white',
    marginTop: 5,
  },
  titlePerso: {
    color: 'white',
    fontFamily: 'Sans-serif',
    marginTop: 5,
  },
});
