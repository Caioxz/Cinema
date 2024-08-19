import React from "react";
import { View, Text, Image, StyleSheet  } from "react-native";
import { DrawerItem, createDrawerNavigator } from "@react-navigation/drawer";
import { AntDesign, FontAwesome5, Feather, MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";
import Entypo from '@expo/vector-icons/Entypo';
import * as Animatable from 'react-native-animatable';


import StackRoutes from "./Stack.routes";
import Developers from "../screen/Desenvolvedores";
import DrawerContent from "./DrawerContent";
import Profile from '../screen/Profile';
import Setting from '../screen/Configuracao';
import Messagem from '../screen/Message';
import Mapa from '../screen/mapas';


const Drawer = createDrawerNavigator();





export default function DrawerRoutes() {

  const getIconColor = (focused) => focused ? "#fd1105" : "#fff";

  return (
    <Drawer.Navigator
      drawerContent={(props) => <DrawerContent {...props} />}
      drawerContentOptions={{
        activeTintColor: "#fd1105", // cor do texto ativo (selecionado)
        inactiveTintColor: "#fff", // cor do texto inativo (não selecionado)
        activeBackgroundColor: "#3d3d3d", // cor de fundo ativo (selecionado)
        labelStyle: {
          fontSize: 16, // tamanho do texto
          fontWeight: "bold", // estilo do texto
        },
        itemStyle: {
          marginVertical: 5, // espaçamento vertical entre itens
        },
      }}
      screenOptions={{
        headerTintColor: "#fd1105",
        drawerActiveTintColor: "#fd1105",
        drawerPosition: "right",
        drawerStyle: {
          backgroundColor: "#3d3d3d",
        },
        drawerLabelStyle: {
          color: "#fff",
        },
        headerShown: false,
          drawerIcon: ({ focused, color, size }) => {
            const iconColor = getIconColor(focused); // Define a cor do ícone com base no estado de foco
            return null; // Retorna null para evitar a renderização de ícones na barra de navegação
          },
       
      }}
    >
      <Drawer.Screen
        name="Catalogo"
        component={StackRoutes}
        options={{
          drawerIcon: ({ focused, color, size }) => (
            <AntDesign name="book" size={size} color={getIconColor(focused)} />
          ),
        }}
      />
      <Drawer.Screen
        name="Perfil"
        component={Profile}
        options={{
          drawerIcon: ({ focused, color, size }) => (
            <AntDesign name="user" size={size} color={getIconColor(focused)} />
          ),
        }}
      />
      <Drawer.Screen
      name="Desenvolvedores"
      component={Developers}
      options={{
        drawerIcon: ({ focused, color, size }) => (
          <FontAwesome5 name="users" size={size} color={getIconColor(focused)} />
        ),
      }}
      
      />
      <Drawer.Screen
      name="Configurações"
      component={Setting}
      options={{
        drawerIcon: ({ focused, color, size }) => (
          <Feather  name="settings" size={size} color={getIconColor(focused)} />
        ),
      }}
      
      />
       <Drawer.Screen
      name="Menssagens"
      component={Messagem}
      options={{
        drawerIcon: ({ focused, color, size }) => (
          <MaterialIcons name="message" size={size} color={getIconColor(focused)} />
        ),
      }}
      
      />

       <Drawer.Screen
      name="Mapa"
      component={Mapa}
      options={{
        drawerIcon: ({ focused, color, size }) => (
          <Entypo name="message" size={size} color={getIconColor(focused)} />
        ),
      }}
      
      />
     
    </Drawer.Navigator>
  );
}

