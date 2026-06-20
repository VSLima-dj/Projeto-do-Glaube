import React, { useState } from 'react';
import {
View,
Text,
StyleSheet,
Image,
TouchableOpacity,
Alert,
} from 'react-native';
import { router } from 'expo-router';

import { FontAwesome } from '@expo/vector-icons';

import CustomInput from './components/CustomInput';
import PasswordInput from './components/PasswordInput';
import GreenButton from './components/GreenButton';

export default function Login() {
const [email, setEmail] = useState('');
const [senha, setSenha] = useState('');
const [lembrar, setLembrar] = useState(false);

function handleLogin() {
if (!email.trim() || !senha.trim()) {
Alert.alert(
'Campos obrigatórios',
'Preencha e-mail e senha.'
);
return;
}

router.push('./home');


}

return ( <View style={styles.container}>
  <Image
    source={require('../assets/images/react-logo.png')}
    style={styles.topImage}
    resizeMode="contain"
  />


  <View style={styles.content}>
    <Text style={styles.title}>Olá,</Text>

    <Text style={styles.subtitle}>
      Bem-vindo de volta!
    </Text>

    <View style={styles.form}>
      <CustomInput
        icon={
          <FontAwesome
            name="envelope-o"
            size={20}
            color="#A0A0A0"
          />
        }
        placeholder="E-mail"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />

      <PasswordInput
        icon={
          <FontAwesome
            name="lock"
            size={20}
            color="#A0A0A0"
          />
        }
        placeholder="Senha"
        value={senha}
        onChangeText={setSenha}
      />

      <View style={styles.optionsRow}>
        <TouchableOpacity
          style={styles.rememberContainer}
          onPress={() => setLembrar(!lembrar)}
        >
          <View
            style={[
              styles.radio,
              lembrar && styles.radioSelected,
            ]}
          />

          <Text style={styles.rememberText}>
            Lembrar de mim neste dispositivo
          </Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        onPress={() => router.push('./esqueci')}
      >
        <Text style={styles.forgotPassword}>
          Esqueceu sua senha?
        </Text>
      </TouchableOpacity>

      <GreenButton
        title="Entrar"
        onPress={handleLogin}
      />

      <View style={styles.registerRow}>
        <Text style={styles.registerText}>
          Não possui conta?
        </Text>

        <TouchableOpacity
          onPress={() => router.push('/cadastro')}
        >
          <Text style={styles.registerLink}>
            {' '}Registrar-se
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  </View>
</View>


);
}

const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: '#FAFAFA',
},

topImage: {
width: '100%',
height: 260,
alignSelf: 'center',
},

content: {
flex: 1,
paddingHorizontal: 32,
marginTop: -10,
},

title: {
fontSize: 34,
fontWeight: '700',
color: '#000',
},

subtitle: {
fontSize: 18,
color: '#5A5A5A',
marginTop: 4,
marginBottom: 35,
},

form: {
marginTop: 10,
},

optionsRow: {
marginTop: -10,
marginBottom: 15,
},

rememberContainer: {
flexDirection: 'row',
alignItems: 'center',
},

radio: {
width: 18,
height: 18,
borderRadius: 9,
borderWidth: 2,
borderColor: '#00B612',
marginRight: 8,
},

radioSelected: {
backgroundColor: '#00B612',
},

rememberText: {
fontSize: 13,
color: '#555',
},

forgotPassword: {
textAlign: 'right',
color: '#00B612',
fontWeight: '600',
marginBottom: 25,
},

registerRow: {
flexDirection: 'row',
justifyContent: 'center',
marginTop: 22,
},

registerText: {
color: '#555',
},

registerLink: {
color: '#00B612',
fontWeight: '700',
},
});
