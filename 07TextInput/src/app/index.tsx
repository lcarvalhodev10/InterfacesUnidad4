import { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native';

export default function HomeScreen() {
  const [texto, setTexto] = useState('');

  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.content}>
        <Text style={styles.eyebrow}>PRÁCTICA 07 · REACT NATIVE</Text>
        <Text style={styles.title}>Escribe y mira.</Text>
        <Text style={styles.description}>
          Lo que escribas en el campo aparecerá al instante debajo.
        </Text>

        <View style={styles.inputSection}>
          <Text style={styles.label}>TU TEXTO</Text>
          <TextInput
            accessibilityLabel="Escribe un texto"
            value={texto}
            onChangeText={setTexto}
            placeholder="Empieza a escribir aquí..."
            placeholderTextColor="#718078"
            style={styles.input}
            returnKeyType="done"
          />
        </View>

        <View style={styles.previewSection}>
          <View style={styles.previewHeading}>
            <Text style={styles.previewLabel}>VISTA PREVIA</Text>
            <Text style={styles.characterCount}>{texto.length} caracteres</Text>
          </View>
          <Text style={[styles.previewText, !texto && styles.previewPlaceholder]}>
            {texto || 'Tu texto aparecerá aquí'}
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#F3F4EF',
  },
  content: {
    width: '100%',
    maxWidth: 620,
    alignSelf: 'center',
    paddingHorizontal: 24,
    paddingTop: 54,
  },
  eyebrow: {
    color: '#527063',
    fontSize: 11,
    fontWeight: '800',
    letterSpacing: 1,
  },
  title: {
    marginTop: 12,
    color: '#183D32',
    fontSize: 34,
    lineHeight: 40,
    fontWeight: '800',
  },
  description: {
    maxWidth: 400,
    marginTop: 8,
    color: '#53635A',
    fontSize: 15,
    lineHeight: 22,
  },
  inputSection: {
    marginTop: 42,
  },
  label: {
    marginBottom: 9,
    color: '#53635A',
    fontSize: 11,
    fontWeight: '800',
    letterSpacing: 0.8,
  },
  input: {
    minHeight: 54,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: '#BCC8BF',
    borderRadius: 6,
    backgroundColor: '#FFFFFF',
    color: '#1D2B24',
    fontSize: 16,
  },
  previewSection: {
    minHeight: 150,
    marginTop: 18,
    padding: 18,
    borderLeftWidth: 4,
    borderLeftColor: '#D17850',
    backgroundColor: '#FFFFFF',
  },
  previewHeading: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 12,
  },
  previewLabel: {
    color: '#53635A',
    fontSize: 10,
    fontWeight: '800',
    letterSpacing: 0.8,
  },
  characterCount: {
    color: '#718078',
    fontSize: 11,
  },
  previewText: {
    marginTop: 18,
    color: '#1D2B24',
    fontSize: 20,
    lineHeight: 28,
  },
  previewPlaceholder: {
    color: '#9AA69E',
    fontStyle: 'italic',
  },
});