import React, { useState } from 'react';
import { TouchableOpacity, StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { Octicons, AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import coringa from './assets/coringa.jpg';
import adao_negro from './assets/adao.jpg';
import liga_justica from './assets/ligaJustica.jpg';
import thor from './assets/thor.jpg';
import avengers from './assets/avamgers.jpg';
import guerra_civil from './assets/guerraCivil.jpg';
import spider from './assets/spider.jpg'
import morbius from './assets/morbius.jpg'
import mulherMaravilha from './assets/mulher.jpg'

const filmesParteSuperior = [
  { title: 'Coringa', image: coringa },
  { title: 'Liga da Justiça', image: liga_justica },
  { title: 'Adão Negro', image: adao_negro },
];

const filmesParteInferior = [
  { title: 'Thor Ragnarok', image: thor },
  { title: 'Avengers', image: avengers },
  { title: 'Guerra Civil', image: guerra_civil },
];

const filmesParteInferior2 = [
  { title: 'Homem Aranha', image: spider },
  { title: 'Morbius', image: morbius },
  { title: 'Mulher Maravilha', image: mulherMaravilha },
];


export default function Principal() {
  const [animateCards, setAnimateCards] = useState(true);
  const navigation = useNavigation();

  const handleNavigateBack = () => {
    setAnimateCards(false);
    navigation.navigate('Embreve');
  };

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
        <Text style={[styles.cartaz, styles.borderBottom]}>Em Cartaz</Text>
        <TouchableOpacity onPress={handleNavigateBack}>
          <Text style={[styles.cartaz, {color: '#fff'}]}>Em Breve</Text>
        </TouchableOpacity>
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
                  <Text style={styles.textoAvaliacao}>
                    <AntDesign name="star" size={14} color="red" /> avaliação Hoje
                  </Text>
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
                  <Text style={styles.textoAvaliacao}>
                    <AntDesign name="star" size={14} color="red" /> Avaliação Hoje
                  </Text>
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
                  <Text style={styles.textoAvaliacao}>
                    <AntDesign name="star" size={14} color="red" /> Avaliação Hoje
                  </Text>
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
    color: 'red',
    marginTop: 5,
  },
  titlePerso: {
    color: 'white',
    fontFamily: 'Sans-serif',
    marginTop: 5,
  },
});
