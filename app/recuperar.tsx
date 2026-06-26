import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Alert,
} from 'react-native';

import { router } from 'expo-router';
import { AntDesign, FontAwesome, Feather } from '@expo/vector-icons';

const GREEN = '#00b612';

export default function RecuperarSenha() {
  const [novaSenha, setNovaSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const [novaVisivel, setNovaVisivel] = useState(false);
  const [confirmarVisivel, setConfirmarVisivel] = useState(false);

  function validarSenha(senha: string): boolean {
    // Mínimo 8 caracteres, pelo menos 1 letra e 1 número
    return senha.length >= 8 && /[a-zA-Z]/.test(senha) && /[0-9]/.test(senha);
  }

  function handleAlterarSenha() {
    if (!novaSenha.trim() || !confirmarSenha.trim()) {
      Alert.alert('Campos obrigatórios', 'Preencha todos os campos.');
      return;
    }

    if (!validarSenha(novaSenha)) {
      Alert.alert(
        'Senha fraca',
        'A senha deve ter no mínimo 8 caracteres, com letras e números.'
      );
      return;
    }

    if (novaSenha !== confirmarSenha) {
      Alert.alert('Erro', 'As senhas não coincidem. Tente novamente.');
      return;
    }

    Alert.alert('Sucesso', 'Senha alterada com sucesso!', [
      { text: 'OK', onPress: () => router.replace('/login') },
    ]);
  }

  return (
    <View style={styles.container}>

      {/* Botão Voltar */}
      <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
        <AntDesign name="left" size={24} color="#666" />
      </TouchableOpacity>

      {/* Título */}
      <Text style={styles.title}>Quase la!</Text>
      <View style={styles.titleUnderline} />

      {/* Descrição */}
      <Text style={styles.description}>
        Pronto! Recebemos a sua confirmação via email.{'\n'}Digite sua nova senha:
      </Text>

      {/* CAMPO SENHA */}
      <Text style={styles.label}>Senha</Text>
      <View style={styles.inputContainer}>
        <FontAwesome name="lock" size={18} color="#BDBDBD" />
        <TextInput
          style={styles.input}
          placeholder="|  Qual sua senha?"
          placeholderTextColor="#BDBDBD"
          secureTextEntry={!novaVisivel}
          value={novaSenha}
          onChangeText={setNovaSenha}
        />
        <TouchableOpacity onPress={() => setNovaVisivel(!novaVisivel)}>
           <Feather
                name={novaVisivel ? 'eye' : 'eye-off'}
                size={20}
                color="#BFBFBF"
              />
        </TouchableOpacity>
      </View>

      {/* CAMPO CONFIRMAR SENHA */}
      <Text style={styles.label}>Confirme sua nova senha</Text>
      <View style={styles.inputContainer}>
        <FontAwesome name="lock" size={18} color="#BDBDBD" />
        <TextInput
          style={styles.input}
          placeholder="|  Minha nova senha é..."
          placeholderTextColor="#BDBDBD"
          secureTextEntry={!confirmarVisivel}
          value={confirmarSenha}
          onChangeText={setConfirmarSenha}
        />
        <TouchableOpacity onPress={() => setConfirmarVisivel(!confirmarVisivel)}>
          <Feather
                name={confirmarVisivel ? 'eye' : 'eye-off'}
                size={20}
                color="#BFBFBF"
              />
        </TouchableOpacity>
      </View>

      {/* BOTÃO */}
      <TouchableOpacity
        style={styles.button}
        onPress={handleAlterarSenha}
        activeOpacity={0.85}
      >
        <Text style={styles.buttonText}>Concluído</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   
    paddingHorizontal: 30,
    paddingTop: 70,
  },

  backButton: {
    marginBottom: 60,
    alignSelf: 'flex-start',
  },

  title: {
    marginTop: 52,
    fontSize: 42,
    fontWeight: '800',
    color: GREEN,
    marginBottom: 0
  },

  titleUnderline: {
    width: 90,
    height: 2,
    backgroundColor: GREEN,
    borderRadius: 2,
    marginBottom: 18,
  },

  description: {
    fontSize: 13,
    color: '#888',
    lineHeight: 20,
    marginBottom: 20,
  },

  label: {
    fontSize: 16,
    color: '#6F6F6F',
    fontWeight: '600',
    marginBottom: 6,
    marginTop: 28,
  },

  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1.5,
    borderBottomColor: '#000',
    paddingBottom: 0,
  },

  input: {
    flex: 1,
    marginLeft: 10,
    fontSize: 14,
    fontWeight: '500',
    color: '#000',
  },

  button: {
    backgroundColor: GREEN,
    height: 60,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 48,
  },

  buttonText: {
    color: '#FFF',
    fontSize: 22,
    fontWeight: 'bold',
    letterSpacing: 0.3,
  },
});