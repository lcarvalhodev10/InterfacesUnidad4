import { Pressable, StyleSheet, Text } from 'react-native';

type PressableButtonProps = {
  texto: string;
  onPress: () => void;
};

export default function PressableButton({ texto, onPress }: PressableButtonProps) {
  return (
    <Pressable
      accessibilityRole="button"
      onPress={onPress}
      style={({ pressed }) => [styles.button, pressed && styles.pressed]}
    >
      <Text style={styles.label}>{texto}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    minHeight: 52,
    justifyContent: 'center',
    paddingHorizontal: 18,
    borderRadius: 6,
    backgroundColor: '#173D32',
  },
  label: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '700',
  },
  pressed: {
    opacity: 0.72,
  },
});