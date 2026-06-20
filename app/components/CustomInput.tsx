import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

type Props = {
icon: React.ReactNode;
placeholder: string;
value: string;
onChangeText: (text: string) => void;
keyboardType?: 'default' | 'email-address' | 'numeric';
};

export default function CustomInput({
icon,
placeholder,
value,
onChangeText,
keyboardType = 'default',
}: Props) {
return ( <View style={styles.container}>
{icon}


  <TextInput
    style={styles.input}
    placeholder={placeholder}
    placeholderTextColor="#9E9E9E"
    value={value}
    onChangeText={onChangeText}
    keyboardType={keyboardType}
  />
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
