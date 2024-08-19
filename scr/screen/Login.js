import { StatusBar } from 'expo-status-bar';
import { KeyboardAvoidingView, View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Dimensions } from 'react-native';
import { useState } from 'react';
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigation } from '@react-navigation/native';
import * as yup from 'yup';
import * as Animatable from 'react-native-animatable';

export default function Login() {

  const [mensagem, setMensagem] = useState(null)

  const navigation = useNavigation();

  const schema = yup.object().shape({
    email: yup.string().email('Email inválido').required('Informe seu Email'),
    senha: yup.string().min(6, 'Senha invalida').required('Informe sua Senha'),
  });

  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit = (data) => {
    console.log("Dados do formulário:", data);
    // Aqui você pode prosseguir com o login
    navigation.navigate('Splash');
  };

  return (
    <KeyboardAvoidingView style={styles.foco}>

      <View style={styles.container}>
        <Animatable.Image
          animation="slideInUp" delay={500} duration={1000}
          source={require('./assets/logoCinema.jpeg')}
          style={[styles.logo, { width: 295, height: 200, marginBottom: 20, top: -70 }]}
          resizeMode="contain"
        />
        <Animatable.Text animation="fadeInLeft" delay={900} duration={1000} style={styles.title}>
          Bem Vindo ao <Text style={{ color: 'red' }}>ReedBloom</Text>
        </Animatable.Text>

        <Animatable.View animation="fadeInLeft" delay={1200} duration={1000}>
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                style={styles.input}
                placeholder="Email"
                onChangeText={onChange}
                onBlur={onBlur}
                value={value}
                keyboardType="email-address"
              />
            )}
            name="email"
            defaultValue=""
          />
          {errors.email && <Text style={styles.error}>{errors.email.message}</Text>}
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                style={styles.input}
                placeholder="Senha"
                onChangeText={onChange}
                onBlur={onBlur}
                value={value}
                secureTextEntry={true}
              />
            )}
            name="senha"
            defaultValue=""
          />
          {errors.senha && <Text style={styles.error}>{errors.senha.message}</Text>}

             
              <Animatable.Text  animation="fadeInLeft" delay={1400} duration={1000} style={styles.cadastrar}>Não possui uma conta?  <TouchableOpacity><Text style={{ color: 'red' }}>Cadastrar</Text></TouchableOpacity></Animatable.Text>
             

          <TouchableOpacity style={styles.button} onPress={handleSubmit(onSubmit)}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
        </Animatable.View>
      </View>
    </KeyboardAvoidingView>
  );
}

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },

  input: {
    margin: 20,
    width: 300,
    height: 50,
    borderColor: '#f42f17',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    padding: 10,
    top: -60,
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
  },
  button: {
    width: 300,
    height: 50,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    marginTop: 10,
    backgroundColor: '#e60401',
    left: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
  foco: {
    height: '100%',
  },

  title: {
    color: 'white',
    fontSize: 28,
    fontWeight: 'bold',
    top: -90,
    

  },

  cadastrar:{
    left:20,
    alignSelf: 'flex-start',
    color: 'white',
    marginBottom: 8,
    fontSize: 15,
    fontWeight: 'bold',
  },

  error: {
    alignSelf: 'flex-start',
    color: '#ff355b',
    marginBottom: 8,
    left:20,
  },
});
