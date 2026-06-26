import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';

import { router } from 'expo-router';
import { FontAwesome, Feather } from '@expo/vector-icons';

export default function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [lembrar, setLembrar] = useState(false);
  const [senhaVisivel, setSenhaVisivel] = useState(false);

  function handleLogin() {
    if (!email.trim() || !senha.trim()) {
      Alert.alert('Campos obrigatórios', 'Preencha o email e a senha.');
      return;
    }
    router.push('/home');
  }

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <View style={styles.container}>

        {/* Imagem Superior */}
        <Image
          source={require('./src/ImagemDec.png')}
          style={styles.topImage}
          resizeMode="stretch"
        />

        {/* Card Branco — sobe sobre a imagem com marginTop negativo */}
        <View style={styles.card}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            keyboardShouldPersistTaps="handled"
            contentContainerStyle={{ paddingBottom: 40 }}
          >

            {/* Título Login */}
            <Text style={styles.title}>Login</Text>
            <View style={styles.titleUnderline} />

            {/* Subtítulo */}
            <Text style={styles.subtitle}>Que bom lhe ter de volta!</Text>

            {/* EMAIL */}
            <Text style={styles.label}>Email</Text>
            <View style={styles.inputContainer}>
              <FontAwesome name="envelope-o" size={16} color="#BDBDBD" />
              <TextInput
                placeholder="nome@gmail.com"
                placeholderTextColor="#BDBDBD"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
                style={styles.input}
              />
            </View>

            {/* SENHA */}
            <Text style={styles.label}>Senha</Text>
            <View style={styles.inputContainer}>
              <FontAwesome name="lock" size={20} color="#BDBDBD" />
              <TextInput
                placeholder="Qual sua senha?"
                placeholderTextColor="#BDBDBD"
                secureTextEntry={!senhaVisivel}
                value={senha}
                onChangeText={setSenha}
                style={styles.input}
              />
              <TouchableOpacity onPress={() => setSenhaVisivel(!senhaVisivel)}>
                 <Feather
                name={senhaVisivel ? 'eye' : 'eye-off'}
                size={20}
                color="#BFBFBF"
              />
              </TouchableOpacity>
            </View>

            {/* ESQUECEU SENHA */}
            <TouchableOpacity onPress={() => router.push('/esqueci')}>
              <Text style={styles.forgotPassword}>
                esqueceu a senha?{' '}
                <Text style={styles.forgotLink}>clique aqui.</Text>
              </Text>
            </TouchableOpacity>

            {/* LEMBRAR */}
            <TouchableOpacity
              style={styles.rememberContainer}
              onPress={() => setLembrar(!lembrar)}
              activeOpacity={0.7}
            >
              <View style={[styles.radio, lembrar && styles.radioSelected]}>
                {lembrar && (
                  <FontAwesome name="check" size={10} color="#FFFFFF" />
                )}
              </View>
              <Text style={styles.rememberText}>
                Lembrar de mim neste dispositivo
              </Text>
            </TouchableOpacity>

            {/* BOTÃO LOGIN */}
            <TouchableOpacity
              style={styles.loginButton}
              onPress={handleLogin}
              activeOpacity={0.85}
            >
              <Text style={styles.loginButtonText}>Login</Text>
            </TouchableOpacity>

            {/* REGISTRO */}
            <View style={styles.registerContainer}>
              <Text style={styles.registerText}>não possui conta?</Text>
              <TouchableOpacity onPress={() => router.push('/cadastro')}>
                <Text style={styles.registerLink}>Registre-se.</Text>
              </TouchableOpacity>
            </View>

          </ScrollView>
        </View>

      </View>
    </KeyboardAvoidingView>
  );
}

const GREEN = '#00B81D';
const LIGHT_GRAY_TEXT = '#C9C9C9';

const styles = StyleSheet.create({
  container: {
    flex: 1,
   
  },

  topImage: {
    width: '100%',
    height: 320,
  },

  card: {
    flex: 1,
    marginTop: -50,
   
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    paddingHorizontal: 32,
    paddingTop: 30,
  },

  title: {
    fontSize: 42,
    fontWeight: 'bold',
    color: GREEN,
    marginBottom: 4,
  },

  titleUnderline: {
    width: 60,
    height: 3,
    backgroundColor: GREEN,
    borderRadius: 2,
    marginBottom: 10,
  },

  subtitle: {
    fontSize: 14,
    color: LIGHT_GRAY_TEXT,
    fontWeight: '500',
    marginBottom: 24,
  },

  label: {
    fontSize: 17,
    color: '#6F6F6F',
    fontWeight: '600',
    marginTop: 18,
    marginBottom: 6,
  },

  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1.5,
    borderBottomColor: '#000000',
    paddingBottom: 6,
    paddingTop: 2,
  },

  input: {
    flex: 1,
    marginLeft: 10,
    color: '#000',
    fontSize: 14,
    fontWeight: '500',
  },

  forgotPassword: {
    marginTop: 10,
    color: LIGHT_GRAY_TEXT,
    fontSize: 12,
    fontWeight: '500',
  },

  forgotLink: {
    color: GREEN,
    fontWeight: 'bold',
  },

  rememberContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 24,
    marginBottom: 20,
  },

  radio: {
    width: 22,
    height: 22,
    borderRadius: 11,
    borderWidth: 2,
    borderColor: GREEN,
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },

  radioSelected: {
    backgroundColor: GREEN,
    borderColor: GREEN,
  },

  rememberText: {
    fontSize: 12,
    fontWeight: '600',
    color: LIGHT_GRAY_TEXT,
  },

  loginButton: {
    backgroundColor: GREEN,
    height: 56,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },

  loginButtonText: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: 'bold',
    letterSpacing: 0.5,
  },

  registerContainer: {
    alignItems: 'center',
    marginTop: 8,
    gap: 2,
  },

  registerText: {
    color: '#7A7A7A',
    fontSize: 13,
    fontWeight: '600',
  },

  registerLink: {
    color: GREEN,
    fontWeight: 'bold',
    fontSize: 13,
  },
});