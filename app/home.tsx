import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Modal,
  Pressable,
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import { router } from 'expo-router';

export default function Home() {
  const [menuAberto, setMenuAberto] = useState(false);

  function handleSair() {
    setMenuAberto(false);
    router.replace('/');
  }

  return (
    <View style={styles.container}>

      {/* Botão hamburguer */}
      <TouchableOpacity
        style={styles.menuButton}
        onPress={() => setMenuAberto(true)}
        activeOpacity={0.7}
      >
        <Feather name="menu" size={28} color="#333" />
      </TouchableOpacity>

      {/* Conteúdo central */}
      <View style={styles.center}>
        <Text style={styles.title}>Bem vindo!</Text>
        <View style={styles.line} />
      </View>

      {/* Gaveta lateral (drawer) */}
      <Modal
        visible={menuAberto}
        transparent
        animationType="fade"
        onRequestClose={() => setMenuAberto(false)}
      >
        {/* Fundo escurecido — toca pra fechar */}
        <Pressable style={styles.overlay} onPress={() => setMenuAberto(false)}>

          {/* Painel lateral — bloqueia o toque para não fechar ao clicar dentro */}
          <Pressable style={styles.drawer} onPress={(e) => e.stopPropagation()}>

            {/* Topo: hamburguer */}
            <View style={styles.drawerTop}>
              <TouchableOpacity onPress={() => setMenuAberto(false)} activeOpacity={0.7}>
                <Feather name="menu" size={28} color="#ccc" />
              </TouchableOpacity>
            </View>

            {/* Rodapé: Sair */}
            <TouchableOpacity style={styles.sairButton} onPress={handleSair}>
              <Text style={styles.sairText}>Sair</Text>
            </TouchableOpacity>

          </Pressable>
        </Pressable>
      </Modal>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA',
  },

  menuButton: {
    position: 'absolute',
    top: 52,
    left: 20,
    zIndex: 10,
    padding: 4,
  },

  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  title: {
    fontSize: 45,
    fontWeight: '700',
    color: '#00B612',
    marginBottom: 10,
  },

  line: {
    width: 110,
    height: 3,
    backgroundColor: '#00b612',
    marginTop: -6,
    borderRadius: 2,
  },

  // Fundo escurecido
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.45)',
    flexDirection: 'row',
  },

  // Painel lateral esquerdo
  drawer: {
    width: '58%',
    height: '100%',
    backgroundColor: '#4a4a4a',
    paddingTop: 52,
    paddingHorizontal: 20,
    justifyContent: 'space-between',
    paddingBottom: 40,
  },

  drawerTop: {
    paddingTop: 8,
  },

  sairButton: {
    paddingVertical: 10,
  },

  sairText: {
    fontSize: 18,
    color: '#FFFFFF',
    fontWeight: '600',
  },
});