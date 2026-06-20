import React, { useState } from 'react';
import {
View,
TextInput,
StyleSheet,
TouchableOpacity,
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';

type Props = {
icon: React.ReactNode;
placeholder: string;
value: string;
onChangeText: (text: string) => void;
};

export default function PasswordInput({
icon,
placeholder,
value,
onChangeText,
}: Props) {
const [showPassword, setShowPassword] = useState(false);

return ( <View style={styles.container}>
{icon}

  <TextInput
    style={styles.input}
    placeholder={placeholder}
    placeholderTextColor="#9E9E9E"
    value={value}
    onChangeText={onChangeText}
    secureTextEntry={!showPassword}
  />

  <TouchableOpacity
    onPress={() => setShowPassword(!showPassword)}
  >
    <AntDesign
      name={showPassword ? 'eye' : 'eye-invisible'}
      size={22}
      color="#9E9E9E"
    />
  </TouchableOpacity>
</View>


);
}

const styles = StyleSheet.create({
container: {
flexDirection: 'row',
alignItems: 'center',
borderBottomWidth: 1,
borderBottomColor: '#D9D9D9',
paddingBottom: 8,
marginBottom: 24,
},

input: {
flex: 1,
marginLeft: 12,
fontSize: 16,
},
});
