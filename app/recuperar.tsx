import React, { useState } from 'react';
import {
View,
Text,
StyleSheet,
TouchableOpacity,
Alert,
} from 'react-native';

import { router } from 'expo-router';
import { AntDesign, FontAwesome } from '@expo/vector-icons';

import PasswordInput from './components/PasswordInput';
import GreenButton from './components/GreenButton';

export default function RecuperarSenha() {
const [novaSenha, setNovaSenha] = useState('');
const [confirmarSenha, setConfirmarSenha] = useState('');

function handleAlterarSenha() {
if (
!novaSenha.trim() ||
!confirmarSenha.trim()
) {
Alert.alert(
'Campos obrigatórios',
'Preencha todos os campos.'
);
return;
}


if (novaSenha !== confirmarSenha) {
  Alert.alert(
    'Erro',
    'As senhas não coincidem.'
  );
  return;
}

Alert.alert(
  'Sucesso',
  'Senha alterada com sucesso!'
);

router.replace('/login');


}

return ( <View style={styles.container}>
<TouchableOpacity
style={styles.backButton}
onPress={() => router.back()}
> <AntDesign
       name="left"
       size={26}
       color="#000"
     /> </TouchableOpacity>


  <Text style={styles.title}>
    Criar nova senha
  </Text>

  <Text style={styles.description}>
    Digite sua nova senha e confirme-a.
  </Text>

  <View style={styles.form}>
    <PasswordInput
      icon={
        <FontAwesome
          name="lock"
          size={20}
          color="#A0A0A0"
        />
      }
      placeholder="Nova senha"
      value={novaSenha}
      onChangeText={setNovaSenha}
    />

    <PasswordInput
      icon={
        <FontAwesome
          name="lock"
          size={20}
          color="#A0A0A0"
        />
      }
      placeholder="Confirmar senha"
      value={confirmarSenha}
      onChangeText={setConfirmarSenha}
    />

    <GreenButton
      title="Alterar Senha"
      onPress={handleAlterarSenha}
    />
  </View>
</View>


);
}

const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: '#FAFAFA',
paddingHorizontal: 30,
paddingTop: 70,
},

backButton: {
marginBottom: 35,
},

title: {
fontSize: 32,
fontWeight: '700',
color: '#000',
marginBottom: 10,
},

description: {
fontSize: 16,
color: '#666',
marginBottom: 40,
},

form: {
marginTop: 10,
},
});
