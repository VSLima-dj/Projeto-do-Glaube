import React, { useRef, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { router } from 'expo-router';
import { AntDesign } from '@expo/vector-icons';

const GREEN = '#00b612';
const DIGITS = 6;

export default function EsqueciSenha() {
  const EXEMPLO = ['1', '9', '0', '1', '2', '6'];
  const [codigo, setCodigo] = useState<string[]>(Array(DIGITS).fill(''));
  const inputs = useRef<(TextInput | null)[]>([]);

  function handleChange(text: string, index: number) {
    // Aceita só número
    const digito = text.replace(/[^0-9]/g, '').slice(-1);
    const novoCodigo = [...codigo];
    novoCodigo[index] = digito;
    setCodigo(novoCodigo);

    // Avança para o próximo campo automaticamente
    if (digito && index < DIGITS - 1) {
      inputs.current[index + 1]?.focus();
    }
  }

  function handleKeyPress(key: string, index: number) {
    // Volta campo ao apagar
    if (key === 'Backspace' && !codigo[index] && index > 0) {
      inputs.current[index - 1]?.focus();
    }
  }

  function handleVerificar() {
    const codigoCompleto = codigo.join('');
    if (codigoCompleto.length < DIGITS) {
      Alert.alert('Código incompleto', 'Preencha todos os 6 dígitos do código.');
      return;
    }
    router.push('/recuperar');
  }

  function handleReenviar() {
    setCodigo(Array(DIGITS).fill(''));
    inputs.current[0]?.focus();
    Alert.alert('Código reenviado', 'Um novo código foi enviado para seu e-mail.');
  }

  return (
    <View style={styles.container}>

      {/* Botão Voltar */}
      <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
        <AntDesign name="left" size={24} color="#666" />
      </TouchableOpacity>

      {/* Título */}
      <Text style={styles.title}>
        Altere sua{'\n'}
        <Text style={styles.titleUnderline}>sen</Text>
        <Text>ha</Text>
      </Text>

      {/* Descrição */}
      <Text style={styles.description}>
        Enviaremos um código para seu Email. Confirme o código para alterarmos para uma nova senha para sua conta.
      </Text>

      {/* Campos de código */}
      <View style={styles.codeContainer}>
        {codigo.map((valor, index) => (
          <TextInput
            key={index}
            ref={(ref) => { inputs.current[index] = ref; }}
            style={[
              styles.codeInput,
              valor !== '' && styles.codeInputFilled,
            ]}
            keyboardType="numeric"
            maxLength={1}
            value={valor}
            placeholder={EXEMPLO[index]}
            placeholderTextColor="#adadadff"
            onChangeText={(text) => handleChange(text, index)}
            onKeyPress={({ nativeEvent }) => handleKeyPress(nativeEvent.key, index)}
            selectTextOnFocus
          />
        ))}
      </View>

      {/* Reenviar código */}
      <View style={styles.reenviarContainer}>
        <Text style={styles.reenviarTexto}>Não recebeu o código?  </Text>
        <TouchableOpacity onPress={handleReenviar}>
          <Text style={styles.reenviarLink}>clique aqui para reenviar.</Text>
        </TouchableOpacity>
      </View>

      {/* Botão Alterar senha */}
      <TouchableOpacity style={styles.button} onPress={handleVerificar} activeOpacity={0.85}>
        <Text style={styles.buttonText}>Alterar senha</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    paddingHorizontal: 30,
    paddingTop: 70,
  },

  backButton: {
    marginBottom: 140,
    alignSelf: 'flex-start',
  },

  title: {

    fontSize: 40,
    fontWeight: '800',
    color: GREEN,
    marginBottom: 16,
    lineHeight: 46,
  },

  titleUnderline: {
    textDecorationLine: 'underline',
    color: GREEN,
    fontWeight: '800',
    fontSize: 38,
  },

  description: {
    marginTop: -10,
    fontSize: 13,
    width: 300,
    color: '#c9c9c9',
    fontWeight: '600',
    lineHeight: 20,
    marginBottom: 48,
  },

  codeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },

  codeInput: {
    width: 52,
    height: 64,
    borderWidth: 1.5,
    borderColor: '#D9D9D9',
    borderRadius: 10,
    backgroundColor: '#FFF',
    textAlign: 'center',
    fontSize: 24,
    fontWeight: '600',
    color: '#BDBDBD',
  },

  codeInputFilled: {
    borderColor: GREEN,
    borderWidth: 2,
    color: '#BDBDBD',
  },

  reenviarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 48,
    flexWrap: 'wrap',
  },

  reenviarTexto: {
    fontSize: 12,
    color: '#c9c9c9',
    fontWeight: '600',
  },

  reenviarLink: {
    fontSize: 12,
    color: GREEN,
    fontWeight: 'bold',
  },

  button: {
    backgroundColor: GREEN,
    height: 60,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonText: {
    color: '#FFF',
    fontSize: 20,
    fontWeight: 'bold',
    letterSpacing: 0.3,
  },
});