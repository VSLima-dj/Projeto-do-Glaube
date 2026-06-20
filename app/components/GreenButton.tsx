import React from 'react';
import {
TouchableOpacity,
Text,
StyleSheet,
} from 'react-native';

type Props = {
title: string;
onPress: () => void;
};

export default function GreenButton({
title,
onPress,
}: Props) {
return ( <TouchableOpacity
   style={styles.button}
   onPress={onPress}
 > <Text style={styles.text}>
{title} </Text> </TouchableOpacity>
);
}

const styles = StyleSheet.create({
button: {
backgroundColor: '#00B612',
height: 55,
borderRadius: 30,
justifyContent: 'center',
alignItems: 'center',
marginTop: 12,
},

text: {
color: '#FFFFFF',
fontSize: 18,
fontWeight: '600',
},
});
