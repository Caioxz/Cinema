import React from "react";
import { View, Text, Image, StyleSheet  } from "react-native";
import { DrawerItemList, DrawerItem } from "@react-navigation/drawer";
import { AntDesign, MaterialCommunityIcons, Entypo  } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native"; 

export default function CustomDrawerContent({...props}) {
    const navigation = useNavigation(); 
    
    return(

        <View styles={styles.container}>
            
             <View style={styles.userArea}>
                <Image
                    source={require('../screen/assets/usuario.png')}
                    style={styles.user}
                />

                <Text style={styles.welcome}>Seja bem vindo <Text style={{color: 'red'}}>ReedUser</Text></Text> 
            </View>            
            <DrawerItemList {...props} />

            

            <DrawerItem
              
                label="Sair"
                
                icon={({ color, size }) => (
                <MaterialCommunityIcons name="logout" size={size} color='#fff' />
                )}

                labelStyle={{
                    color: '#fff', 
                  }}
                style={[styles.sairDrawer, styles.logoutItem]}
                onPress={() => navigation.navigate('Login')}
            />




        </View>

    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1
        
    },
    

    userArea:{
        marginTop: 15,
        marginLeft: 10,
        marginBottom: 10,
      

    },

    user:{
        width: 55,
        height:55,
       
    },

    welcome:{
        marginTop:5,
        fontSize:18,
        fontWeight: 'bold',
        color: 'white',
    },


    sairDrawer:{
        marginTop:380,
    }
  

});
