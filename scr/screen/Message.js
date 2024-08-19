import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const botResponses = [
  "Olá! Como posso ajudar hoje?",
  "Estou aqui para responder às suas perguntas. O que você gostaria de saber?",
  "Bem-vindo de volta! Como posso ajudá-lo hoje?",
  "Estou pronto para responder às suas perguntas. O que você precisa?",
  "Olá novamente! Como posso ajudar você agora?",
  "Estou disponível para ajudar. Qual é a sua dúvida?",
  "Pronto para ajudar! O que você gostaria de saber hoje?",
  "Olá! Estou aqui para responder às suas perguntas. O que você precisa saber?",
  "Estou aqui para ajudar. Qual é a sua pergunta?",
  "Como posso ser útil hoje?",
  "Como posso ajudá-lo hoje?",
  "Você tem alguma dúvida específica?",
  "O que você gostaria de saber mais?",
  "Precisa de ajuda com alguma coisa em particular?",
  "Há algo específico em que posso ajudá-lo?",
  "Qual é a sua área de interesse?",
  "Você está procurando informações sobre algum tópico em particular?",
  "Posso ajudá-lo a encontrar alguma informação?",
  "Estou aqui para ajudar. O que você deseja discutir?",
];

export default function MessageApp() {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');
  const navigation = useNavigation();

  useEffect(() => {
    // Verifica se há mensagens na conversa e se a última mensagem foi enviada pelo usuário ('Eu')
    if (messages.length > 0 && messages[messages.length - 1].sender === 'Eu') {
      // Adiciona um atraso antes de enviar a resposta do bot para simular uma resposta
      setTimeout(() => {
        // Seleciona uma resposta aleatória do array de respostas do bot
        const randomResponse = botResponses[Math.floor(Math.random() * botResponses.length)];
        // Adiciona a resposta do bot às mensagens
        setMessages([...messages, { sender: 'Bot', text: randomResponse }]);
      }, 1000); // 1000 milissegundos (1 segundo) de atraso antes de enviar a resposta do bot
    }
  }, [messages]); // Executa o efeito sempre que o array de mensagens for modificado

  // Função para enviar uma mensagem
  const sendMessage = () => {
    // Verifica se o texto de entrada não está vazio ou contém apenas espaços em branco
    if (inputText.trim() !== '') {
      // Cria um objeto representando a nova mensagem do usuário
      const newMessage = {
        sender: 'Eu', // Define o remetente como 'Eu'
        text: inputText, // Define o texto da mensagem como o texto de entrada
      };
      // Adiciona a nova mensagem às mensagens existentes
      setMessages([...messages, newMessage]);
      // Limpa o texto de entrada
      setInputText('');
    }
  };


  const handleNavigateBack = () => {
    // Sair da tela do drawer ao clicar no ícone da seta
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <TouchableOpacity onPress={handleNavigateBack}>
          <FontAwesome name="chevron-left" size={24} color="#fff" style={styles.icon} />
        </TouchableOpacity>
        <Text style={styles.title}>Chat</Text>
      </View>
      <ScrollView style={styles.messageDisplay}>
        {messages.map((message, index) => (
          <View key={index} style={styles.message}>
            <Text style={message.sender === 'Bot' ? styles.botSender : styles.sender}>{message.sender}: </Text>
            <Text style={message.sender === 'Bot' ? styles.botMessage : styles.userMessage}>{message.text}</Text>
          </View>
        ))}
      </ScrollView>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Digite sua mensagem..."
          value={inputText}
          onChangeText={setInputText}
          placeholderTextColor="#ccc"
        />
        <TouchableOpacity style={styles.button} onPress={sendMessage}>
          <Text style={styles.buttonText}>Enviar</Text>
        </TouchableOpacity>
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
  messageDisplay: {
    flex: 1,
    width: '100%',
    marginBottom: 20,
  },
  message: {
    marginBottom: 5,
  },
  sender: {
    fontWeight: 'bold',
    color: '#fff',
  },
  botSender: {
    fontStyle: 'italic',
    color: 'lightgreen',
  },
  userMessage: {
    color: '#fff',
  },
  botMessage: {
    color: '#fff',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginRight: 10,
    paddingHorizontal: 10,
    color: '#fff',
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  buttonText: {
    color: '#333', // Alterado de branco para preto para melhor contraste
  },
});
