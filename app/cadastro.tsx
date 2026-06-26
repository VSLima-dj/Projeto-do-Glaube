import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from 'react-native';

import { router } from 'expo-router';
import { FontAwesome, Feather } from '@expo/vector-icons';

export default function Cadastro() {
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const [mostrarConfirmarSenha, setMostrarConfirmarSenha] = useState(false);

  function handleCadastro() {
    if (
      !nome.trim() ||
      !telefone.trim() ||
      !email.trim() ||
      !senha.trim() ||
      !confirmarSenha.trim()
    ) {
      Alert.alert('Campos obrigatórios', 'Preencha todos os campos.');
      return;
    }

    if (senha !== confirmarSenha) {
      Alert.alert('Erro', 'As senhas não coincidem.');
      return;
    }

    router.push('/home');
  }

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 50 : 0}
    >
      <View style={styles.container}>
        <Image
          source={require('./src/ImagemDec1.png')}
          style={styles.topImage}
          resizeMode="stretch"
         

/>

        <ScrollView
          style={styles.scrollView}
          contentContainerStyle={styles.card}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
        >

          <Text style={styles.title}>Registre-se</Text>

          <View style={styles.line} />

          <Text style={styles.subtitle}>
            Preencha os dados...{'\n'}queremos conhecer melhor você!
          </Text>

          {/* Nome */}
          <Text style={styles.label}>Nome</Text>
          <View style={styles.inputContainer}>
            <FontAwesome name="smile-o" size={18} color="#BFBFBF" />
            <TextInput
              placeholder="|  Meu nome é..."
              placeholderTextColor="#BFBFBF"
              value={nome}
              onChangeText={setNome}
              style={styles.input}
            />
          </View>

          {/* Telefone */}
          <Text style={styles.label}>Numero de telefone</Text>
          <View style={styles.inputContainer}>
            <FontAwesome name="phone" size={18} color="#BFBFBF" />
            <TextInput
              placeholder="|  +00 (000) 00000-0000"
              placeholderTextColor="#BFBFBF"
              keyboardType="phone-pad"
              value={telefone}
              onChangeText={setTelefone}
              style={styles.input}
            />
          </View>

          {/* Email */}
          <Text style={styles.label}>Email</Text>
          <View style={styles.inputContainer}>
            <Feather name="mail" size={18} color="#BFBFBF" />
            <TextInput
              placeholder="|  nome@gmail.com"
              placeholderTextColor="#BFBFBF"
              keyboardType="email-address"
              autoCapitalize="none"
              value={email}
              onChangeText={setEmail}
              style={styles.input}
            />
          </View>

          {/* Senha */}
          <Text style={styles.label}>Senha</Text>
          <View style={styles.inputContainer}>
            <FontAwesome name="lock" size={18} color="#BFBFBF" />
            <TextInput
              placeholder="|  Qual sua senha?"
              placeholderTextColor="#BFBFBF"
              secureTextEntry={!mostrarSenha}
              value={senha}
              onChangeText={setSenha}
              style={styles.input}
            />
            <TouchableOpacity onPress={() => setMostrarSenha(!mostrarSenha)}>
              <Feather
                name={mostrarSenha ? 'eye' : 'eye-off'}
                size={20}
                color="#BFBFBF"
              />
            </TouchableOpacity>
          </View>

          {/* Confirmar Senha */}
          <Text style={styles.label}>Confirme sua senha</Text>
          <View style={styles.inputContainer}>
            <FontAwesome name="lock" size={18} color="#BFBFBF" />
            <TextInput
              placeholder="|  Minha senha é..."
              placeholderTextColor="#BFBFBF"
              secureTextEntry={!mostrarConfirmarSenha}
              value={confirmarSenha}
              onChangeText={setConfirmarSenha}
              style={styles.input}
            />
            <TouchableOpacity
              onPress={() => setMostrarConfirmarSenha(!mostrarConfirmarSenha)}
            >
              <Feather
                name={mostrarConfirmarSenha ? 'eye' : 'eye-off'}
                size={20}
                color="#BFBFBF"
              />
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.button} onPress={handleCadastro}>
            <Text style={styles.buttonText}>Criar conta</Text>
          </TouchableOpacity>

          <View style={styles.footer}>
            <Text style={styles.footerText}>já possui conta?</Text>
            <TouchableOpacity onPress={() => router.push('/login')}>
              <Text style={styles.footerLink}>Faça login.</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  topImage: {
    width: '100%',
    height: 200,
    resizeMode: 'stretch',
    
 
  },

  card: {
   
    marginTop: -50,
    borderTopLeftRadius: 80,
    borderTopRightRadius: 80,
    paddingHorizontal: 40,
    paddingTop: 40,
    paddingBottom: 50,
    minHeight: '80%',
  },

  scrollView: {
    flex: 1,
  },

  title: {
    fontSize: 38,
    fontWeight: '700',
    color: '#00b612',
    letterSpacing: -0.5,
  },

  line: {
    width: 100,
    height: 2.5,
    backgroundColor: '#00b612',
    marginTop: 4,
    marginBottom: 10,
  },

  subtitle: {
    color: '#9E9E9E',
    fontSize: 13,
    lineHeight: 18,
    marginBottom: 8,
  },

  label: {
    marginTop: 20,
    marginBottom: 8,
    fontSize: 16,
    fontWeight: '700',
    color: '#7a7a7aff',
  },

  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#D9D9D9',
    paddingBottom: 10,
    gap: 10,
  },

  input: {
    flex: 1,
    fontSize: 14,
    color: '#333',
    paddingVertical: 0,
  },

  button: {
    marginTop: 40,
    backgroundColor: '#00C517',
    height: 56,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#00C517',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 6,
  },

  buttonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: '700',
  },

  footer: {
    alignItems: 'center',
    marginTop: 20,
  },

  footerText: {
    color: '#8A8A8A',
    fontWeight: '500',
    fontSize: 13,
  },

  footerLink: {
    color: '#00C517',
    fontWeight: '700',
    fontSize: 14,
    marginTop: 4,
  },
});
  