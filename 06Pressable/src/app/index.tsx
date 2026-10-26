import { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

import PressableButton from '../components/PressableButton';

export default function HomeScreen() {
	const [seleccion, setSeleccion] = useState('');

	return (
		<SafeAreaView style={styles.screen}>
			<View style={styles.content}>
				<Text style={styles.eyebrow}>PRÁCTICA 06 · REACT NATIVE</Text>
				<Text style={styles.title}>Botones con props</Text>
				<Text style={styles.description}>
					El mismo componente recibe un texto diferente en cada botón.
				</Text>

				<View style={styles.buttonList}>
					<PressableButton texto="Inicio" onPress={() => setSeleccion('Inicio')} />
					<PressableButton texto="Perfil" onPress={() => setSeleccion('Perfil')} />
					<PressableButton texto="Ajustes" onPress={() => setSeleccion('Ajustes')} />
					<PressableButton texto="Ayuda" onPress={() => setSeleccion('Ayuda')} />
				</View>

				<Text style={styles.feedback} accessibilityLiveRegion="polite">
					{seleccion ? `Has pulsado: ${seleccion}` : 'Pulsa un botón para probarlo.'}
				</Text>
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
		paddingTop: 48,
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
		fontSize: 30,
		lineHeight: 36,
		fontWeight: '800',
	},
	description: {
		maxWidth: 420,
		marginTop: 8,
		color: '#53635A',
		fontSize: 15,
		lineHeight: 22,
	},
	buttonList: {
		gap: 12,
		marginTop: 32,
	},
	feedback: {
		minHeight: 60,
		marginTop: 20,
		padding: 18,
		borderLeftWidth: 4,
		borderLeftColor: '#D17850',
		backgroundColor: '#FFFFFF',
		color: '#34433B',
		fontSize: 15,
	},
});
