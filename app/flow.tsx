import { View, Text, Image, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { router } from 'expo-router';

export default function WelcomeScreen() {
  return (
    <View style={{ flex: 1, backgroundColor: "#F4F4F4" }}>
      
      <Image
       source={require("./src/ImagemDec.png")} 
        style={{
          width: "100%",
          height: "60%",
          resizeMode: "cover",
        }}
      />

      <View
        style={{
          paddingHorizontal: 24,
          marginTop: -10,
        }}
      >
        <Text
          style={{
            color: "#00B81D",
            fontSize: 40,
            fontWeight: "bold",
          }}
        >
          Bem vindo...
        </Text>

        <Text
          style={{
            color: "#9A9A9A",
            marginTop: 16,
            fontSize: 13,
          }}
        >
          Creio que aqui começa um grande vínculo entre nós...
        </Text>
      </View>

      <TouchableOpacity
        onPress={() => router.push('/cadastro')}
        style={{
          position: "absolute",
          right: 45,
          
          bottom: 120,        
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          source={require('./src/seta.png')}
          style={{
            width: 83,
            height: 61,
  }}
/>
      </TouchableOpacity>
    </View>
  );
}