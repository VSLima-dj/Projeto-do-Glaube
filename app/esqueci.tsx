import React, { useRef, useState } from 'react';
import {
View,
Text,
StyleSheet,
TextInput,
TouchableOpacity,
} from 'react-native';
import { router } from 'expo-router';
import { AntDesign } from '@expo/vector-icons';

import GreenButton from './components/GreenButton';

export default function EsqueciSenha() {
const [codigo, setCodigo] = useState([
'',
'',
'',
'',
'',
'',
]);

const inputs = useRef<TextInput[]>([]);

const handleChange = (
text: string,
index: number
) => {
const novoCodigo = [...codigo];


novoCodigo[index] = text;

setCodigo(novoCodigo);

if (text && index < 5) {
  inputs.current[index + 1]?.focus();
}


};

function handleVerificar() {
router.push('/recuperar');
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
    Esqueceu sua senha?
  </Text>

  <Text style={styles.description}>
    Digite o código enviado para seu e-mail.
  </Text>

  <View style={styles.codeContainer}>
    {codigo.map((valor, index) => (
      <TextInput
        key={index}
        ref={(ref) => {
          if (ref) {
            inputs.current[index] = ref;
          }
        }}
        style={styles.codeInput}
        keyboardType="numeric"
        maxLength={1}
        value={valor}
        onChangeText={(text) =>
          handleChange(text, index)
        }
      />
    ))}
  </View>

  <GreenButton
    title="Verificar"
    onPress={handleVerificar}
  />
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

codeContainer: {
flexDirection: 'row',
justifyContent: 'space-between',
marginBottom: 45,
},

codeInput: {
width: 48,
height: 58,
borderWidth: 1,
borderColor: '#D9D9D9',
borderRadius: 12,
backgroundColor: '#FFF',
textAlign: 'center',
fontSize: 22,
fontWeight: '600',
},
});
