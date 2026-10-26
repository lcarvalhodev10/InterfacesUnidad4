import { ScrollView, StyleSheet, Text, View } from 'react-native';

const activities = [
  { time: '08:00', title: 'Desayuno', detail: 'Empieza el día con calma y energía.' },
  { time: '09:30', title: 'Paseo por el centro', detail: 'Descubre las calles y plazas del barrio.' },
  { time: '11:00', title: 'Visita al museo', detail: 'Una pausa para aprender algo nuevo.' },
  { time: '13:30', title: 'Comida', detail: 'Prueba un plato local en un sitio tranquilo.' },
  { time: '15:00', title: 'Jardín botánico', detail: 'Un recorrido entre plantas y senderos.' },
  { time: '17:00', title: 'Café y lectura', detail: 'Tómate un descanso antes de continuar.' },
  { time: '18:30', title: 'Mercado local', detail: 'Explora los puestos y sus productos.' },
  { time: '20:00', title: 'Atardecer', detail: 'Busca un buen mirador para cerrar el día.' },
  { time: '21:00', title: 'Cena', detail: 'Termina la jornada compartiendo una buena comida.' },
];

export default function HomeScreen() {
  return (
    <ScrollView
      style={styles.screen}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator
    >
      <View style={styles.header}>
        <Text style={styles.eyebrow}>PLAN PARA HOY</Text>
        <Text style={styles.title}>Un día para descubrir</Text>
        <Text style={styles.description}>
          Un recorrido tranquilo, de la mañana a la noche.
        </Text>
      </View>

      <View style={styles.timeline}>
        {activities.map((activity, index) => (
          <View key={activity.time} style={styles.activity}>
            <View style={styles.timeColumn}>
              <Text style={styles.time}>{activity.time}</Text>
              {index < activities.length - 1 && <View style={styles.connector} />}
            </View>
            <View style={styles.activityBody}>
              <Text style={styles.activityTitle}>{activity.title}</Text>
              <Text style={styles.activityDetail}>{activity.detail}</Text>
            </View>
          </View>
        ))}
      </View>
      <Text style={styles.footer}>Fin del recorrido</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#f4f5f0',
  },
  content: {
    width: '100%',
    maxWidth: 760,
    alignSelf: 'center',
    paddingHorizontal: 24,
    paddingTop: 34,
    paddingBottom: 48,
  },
  header: {
    paddingBottom: 30,
  },
  eyebrow: {
    color: '#34705e',
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 1.2,
  },
  title: {
    marginTop: 12,
    color: '#1d302b',
    fontSize: 32,
    fontWeight: '700',
  },
  description: {
    marginTop: 8,
    color: '#596b64',
    fontSize: 16,
    lineHeight: 23,
  },
  timeline: {
    gap: 2,
  },
  activity: {
    minHeight: 88,
    flexDirection: 'row',
  },
  timeColumn: {
    width: 74,
    alignItems: 'flex-start',
  },
  time: {
    color: '#34705e',
    fontSize: 14,
    fontWeight: '700',
  },
  connector: {
    width: 1,
    flex: 1,
    marginTop: 10,
    marginLeft: 4,
    backgroundColor: '#c9d5cc',
  },
  activityBody: {
    flex: 1,
    minHeight: 76,
    marginBottom: 12,
    padding: 16,
    borderRadius: 8,
    backgroundColor: '#ffffff',
  },
  activityTitle: {
    color: '#1d302b',
    fontSize: 16,
    fontWeight: '700',
  },
  activityDetail: {
    marginTop: 5,
    color: '#62716b',
    fontSize: 14,
    lineHeight: 20,
  },
  footer: {
    paddingTop: 14,
    color: '#34705e',
    fontSize: 13,
    fontWeight: '700',
    textAlign: 'center',
  },
});
