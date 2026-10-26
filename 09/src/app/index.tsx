import { useState } from 'react';
import { Alert, Modal, Pressable, StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen() {
  const [modalVisible, setModalVisible] = useState(false);

  function chooseOption(option: 'Aceptar' | 'Cancelar') {
    setModalVisible(false);
    Alert.alert('Decisión', `Ha pulsado usted ${option}.`);
  }

  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.content}>
        <Text style={styles.eyebrow}>EJERCICIO 09</Text>
        <Text style={styles.title}>Una decisión</Text>
        <Text style={styles.description}>
          Abre el cuadro y elige cómo continuar.
        </Text>
        <Pressable
          accessibilityRole="button"
          onPress={() => setModalVisible(true)}
          style={({ pressed }) => [styles.openButton, pressed && styles.pressed]}>
          <Text style={styles.openButtonText}>Abrir modal</Text>
        </Pressable>
      </View>

      <Modal
        animationType="fade"
        transparent
        visible={modalVisible}
        onRequestClose={() => chooseOption('Cancelar')}>
        <SafeAreaProvider>
          <SafeAreaView style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalEyebrow}>CONFIRMACIÓN</Text>
              <Text style={styles.modalTitle}>¿Desea continuar?</Text>
              <Text style={styles.modalDescription}>
                Seleccione Aceptar o Cancelar.
              </Text>
              <View style={styles.actions}>
                <Pressable
                  accessibilityRole="button"
                  onPress={() => chooseOption('Cancelar')}
                  style={({ pressed }) => [
                    styles.cancelButton,
                    pressed && styles.pressed,
                  ]}>
                  <Text style={styles.cancelButtonText}>Cancelar</Text>
                </Pressable>
                <Pressable
                  accessibilityRole="button"
                  onPress={() => chooseOption('Aceptar')}
                  style={({ pressed }) => [
                    styles.acceptButton,
                    pressed && styles.pressed,
                  ]}>
                  <Text style={styles.acceptButtonText}>Aceptar</Text>
                </Pressable>
              </View>
            </View>
          </SafeAreaView>
        </SafeAreaProvider>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#f4f5f0',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 32,
  },
  eyebrow: {
    color: '#47756b',
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 1.5,
  },
  title: {
    marginTop: 12,
    color: '#18342e',
    fontSize: 38,
    fontWeight: '700',
  },
  description: {
    marginTop: 10,
    color: '#586b65',
    fontSize: 16,
  },
  openButton: {
    alignSelf: 'flex-start',
    marginTop: 28,
    minHeight: 52,
    justifyContent: 'center',
    paddingHorizontal: 22,
    borderRadius: 8,
    backgroundColor: '#24584d',
  },
  openButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '700',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
    backgroundColor: 'rgba(19, 37, 32, 0.48)',
  },
  modalView: {
    width: '100%',
    maxWidth: 420,
    padding: 28,
    borderRadius: 12,
    backgroundColor: '#fffefa',
  },
  modalEyebrow: {
    color: '#47756b',
    fontSize: 11,
    fontWeight: '700',
    letterSpacing: 1.3,
  },
  modalTitle: {
    marginTop: 12,
    color: '#18342e',
    fontSize: 25,
    fontWeight: '700',
  },
  modalDescription: {
    marginTop: 8,
    color: '#586b65',
    fontSize: 15,
    lineHeight: 22,
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    gap: 12,
    marginTop: 28,
  },
  cancelButton: {
    minHeight: 46,
    justifyContent: 'center',
    paddingHorizontal: 16,
    borderRadius: 7,
    backgroundColor: '#e9ede9',
  },
  cancelButtonText: {
    color: '#29423b',
    fontSize: 15,
    fontWeight: '600',
  },
  acceptButton: {
    minHeight: 46,
    justifyContent: 'center',
    paddingHorizontal: 18,
    borderRadius: 7,
    backgroundColor: '#24584d',
  },
  acceptButtonText: {
    color: '#ffffff',
    fontSize: 15,
    fontWeight: '700',
  },
  pressed: {
    opacity: 0.78,
  },
});
