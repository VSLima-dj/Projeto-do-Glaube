import React from 'react';
import {
View,
Text,
StyleSheet,
} from 'react-native';

export default function Home() {
return ( <View style={styles.container}> <Text style={styles.title}>
Bem-vindo à Home </Text>


</View>


);
}

const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: '#FAFAFA',
justifyContent: 'center',
alignItems: 'center',
paddingHorizontal: 20,
},

title: {
fontSize: 28,
fontWeight: '700',
color: '#00B612',
marginBottom: 10,
},


});
