import { useRef, useState } from 'react';
import { Alert, Platform, Pressable, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Index = () => {
  const [count, setCount] = useState(0);
  const clickCount = useRef(0);

  const handlePress = (change: 1 | -1) => {
    setCount((currentCount) => currentCount + change);

    const totalClicks = clickCount.current + 1;
    clickCount.current = totalClicks;

    if (totalClicks % 10 === 0) {
      const message = `Enhorabuena, llevas ${totalClicks} clicks`;
      if (Platform.OS === 'web') {
        globalThis.alert(message);
      } else {
        Alert.alert('Enhorabuena', message);
      }
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.counterPanel}>
        <Text style={styles.eyebrow}>CONTADOR</Text>
        <Text accessibilityLiveRegion="polite" style={styles.title}>
          Contador: {count}
        </Text>
        <View style={styles.actions}>
          <Pressable
            accessibilityRole="button"
            accessibilityLabel="Decrementar contador"
            onPress={() => handlePress(-1)}
            style={({ pressed }) => [styles.button, styles.decrementButton, pressed && styles.pressed]}>
            <Ionicons name="remove-circle" size={24} color="white" />
            <Text style={styles.buttonText}>Decrementar</Text>
          </Pressable>
          <Pressable
            accessibilityRole="button"
            accessibilityLabel="Incrementar contador"
            onPress={() => handlePress(1)}
            style={({ pressed }) => [styles.button, styles.incrementButton, pressed && styles.pressed]}>
            <Text style={styles.buttonText}>Incrementar</Text>
            <Ionicons name="add-circle" size={24} color="white" />
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
    backgroundColor: '#f5f5f5',
  },
  counterPanel: {
    width: '100%',
    maxWidth: 480,
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingVertical: 36,
    borderRadius: 12,
    backgroundColor: '#ffffff',
    elevation: 3,
    shadowColor: '#17231e',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
  },
  eyebrow: {
    color: '#59645f',
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 1,
  },
  title: {
    marginTop: 12,
    marginBottom: 28,
    color: '#182622',
    fontSize: 28,
    fontWeight: '700',
  },
  actions: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: 12,
  },
  button: {
    minHeight: 52,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    paddingHorizontal: 18,
    borderRadius: 8,
  },
  decrementButton: {
    backgroundColor: '#455b67',
  },
  incrementButton: {
    backgroundColor: '#176b59',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 15,
    fontWeight: '600',
  },
  pressed: {
    opacity: 0.78,
  },
});

export default Index;
