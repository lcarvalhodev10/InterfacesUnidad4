import { useRef, useState } from 'react';
import { Alert, FlatList, Platform, Pressable, StyleSheet, Text, View } from 'react-native';

import { Persona } from '../models/entities/persona';
import { PersonasViewModel } from '../viewmodels/personasViewModel';

export default function PersonasView() {
  const viewModel = useRef(new PersonasViewModel()).current;
  const [, refreshView] = useState(0);

  const seleccionarPersona = (persona: Persona) => {
    viewModel.personaSeleccionada = persona;
    refreshView((value) => value + 1);

    const nombreCompleto = `${persona.nombre} ${persona.apellidos}`;

    if (Platform.OS === 'web') {
      window.alert(nombreCompleto);
    } else {
      Alert.alert('Persona seleccionada', nombreCompleto);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de personas</Text>
      <Text style={styles.subtitle}>Selecciona una persona</Text>

      <FlatList
        data={viewModel.listaPersonas}
        keyExtractor={(persona) => persona.id}
        renderItem={({ item }) => (
          <Pressable
            onPress={() => seleccionarPersona(item)}
            style={({ pressed }) => [styles.personRow, pressed && styles.pressedRow]}
          >
            <Text style={styles.personName}>
              {item.nombre} {item.apellidos}
            </Text>
            <Text style={styles.selectHint}>Pulsa para ver</Text>
          </Pressable>
        )}
        contentContainerStyle={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 24, backgroundColor: '#f5f5f5' },
  title: { marginTop: 24, color: '#222', fontSize: 26, fontWeight: 'bold', textAlign: 'center' },
  subtitle: { marginTop: 8, marginBottom: 16, color: '#666', fontSize: 16, textAlign: 'center' },
  list: { gap: 12 },
  personRow: { padding: 18, borderRadius: 10, backgroundColor: '#fff', borderWidth: 1, borderColor: '#ddd' },
  pressedRow: { opacity: 0.7 },
  personName: { color: '#222', fontSize: 18, fontWeight: '600' },
  selectHint: { marginTop: 4, color: '#666', fontSize: 13 },
});
