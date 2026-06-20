import React, { useState } from 'react';
import {
View,
Text,
StyleSheet,
Image,
TouchableOpacity,
Alert,
ScrollView,
} from 'react-native';
import { router } from 'expo-router';

import {
FontAwesome,
FontAwesome5,
MaterialCommunityIcons,
} from '@expo/vector-icons';

import CustomInput from './components/CustomInput';
import PasswordInput from './components/PasswordInput';
import GreenButton from './components/GreenButton';

export default function Cadastro() {
const [nome, setNome] = useState('');
const [telefone, setTelefone] = useState('');
const [email, setEmail] = useState('');
const [senha, setSenha] = useState('');
const [confirmarSenha, setConfirmarSenha] = useState('');

function handleCadastro() {
if (
!nome.trim() ||
!telefone.trim() ||
!email.trim() ||
!senha.trim() ||
!confirmarSenha.trim()
) {
Alert.alert(
'Campos obrigatórios',
'Preencha todos os campos.'
);
return;
}


if (senha !== confirmarSenha) {
  Alert.alert(
    'Erro',
    'As senhas não coincidem.'
  );
  return;
}

Alert.alert(
  'Sucesso',
  'Conta criada com sucesso!'
);

router.replace('/login');


}

return ( <ScrollView
   style={styles.container}
   showsVerticalScrollIndicator={false}
 >
<Image
source={require('./src/ImagemDec.png')}
style={styles.topImage}
resizeMode="contain"
/>


  <View style={styles.content}>
    <Text style={styles.title}>
      Criar Conta
    </Text>

    <View style={styles.form}>
      <CustomInput
        icon={
          <FontAwesome5
            name="smile"
            size={18}
            color="#A0A0A0"
          />
        }
        placeholder="Nome"
        value={nome}
        onChangeText={setNome}
      />

      <CustomInput
        icon={
          <MaterialCommunityIcons
            name="cellphone"
            size={22}
            color="#A0A0A0"
          />
        }
        placeholder="Telefone"
        value={telefone}
        onChangeText={setTelefone}
        keyboardType="numeric"
      />

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

      <PasswordInput
        icon={
          <FontAwesome
            name="lock"
            size={20}
            color="#A0A0A0"
          />
        }
        placeholder="Confirmar Senha"
        value={confirmarSenha}
        onChangeText={setConfirmarSenha}
      />

      <GreenButton
        title="Criar Conta"
        onPress={handleCadastro}
      />

      <View style={styles.loginRow}>
        <Text style={styles.loginText}>
          Já possui conta?
        </Text>

        <TouchableOpacity
          onPress={() => router.push('/login')}
        >
          <Text style={styles.loginLink}>
            {' '}Entrar
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  </View>
</ScrollView>


);
}

const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: '#FAFAFA',
},

topImage: {
width: '100%',
height: 230,
alignSelf: 'center',
},

content: {
paddingHorizontal: 32,
marginTop: -10,
paddingBottom: 40,
},

title: {
fontSize: 32,
fontWeight: '700',
color: '#000',
marginBottom: 35,
},

form: {
marginTop: 10,
},

loginRow: {
flexDirection: 'row',
justifyContent: 'center',
marginTop: 25,
},

loginText: {
color: '#555',
},

loginLink: {
color: '#00B612',
fontWeight: '700',
},
});
