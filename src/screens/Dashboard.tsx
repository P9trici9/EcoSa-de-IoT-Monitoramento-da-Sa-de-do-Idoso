import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useHealthData } from '../hooks/useHealthData';

export default function Dashboard() {
  const { temperature, heartRate, fall } = useHealthData();

  return (
    <SafeAreaView style={styles.container}>
      
      {/* Cabeçalho */}
      <Text style={styles.header}>EcoSaúde</Text>
      <Text style={styles.subtitle}>Monitoramento em tempo real</Text>

      {/* Temperatura */}
      <View style={styles.card}>
        <Text style={styles.icon}>🌡</Text>

        <View>
          <Text style={styles.label}>Temperatura</Text>
          <Text style={styles.value}>
            {temperature > 0
              ? `${temperature.toFixed(1)} °C`
              : 'Sensor não ativo'}
          </Text>
        </View>
      </View>

      {/* Batimentos */}
      <View style={styles.card}>
        <Text style={styles.icon}>❤️</Text>

        <View>
          <Text style={styles.label}>Batimentos Cardíacos</Text>
          <Text style={styles.value}>
            {heartRate >= 45 && heartRate <= 160
              ? `${heartRate} BPM`
              : 'Aguardando dedo...'}
          </Text>
        </View>
      </View>

      {/* Queda */}
      <View style={[styles.card, fall === 1 && styles.alertCard]}>
        <Text style={styles.icon}>🚨</Text>

        <View>
          <Text style={styles.label}>Status de Queda</Text>
          <Text style={[styles.value, fall === 1 && styles.alertText]}>
            {fall === 1 ? 'QUEDA DETECTADA!' : 'Normal'}
          </Text>
        </View>
      </View>

    </SafeAreaView>
  );
}

/* ===================== ESTILO MODERNO ===================== */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 22,
    backgroundColor: '#F2F5F9',
  },

  header: {
    fontSize: 30,
    fontWeight: '800',
    textAlign: 'center',
    color: '#222',
    marginTop: 10,
  },

  subtitle: {
    fontSize: 15,
    textAlign: 'center',
    color: '#666',
    marginBottom: 30,
  },

  card: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,

    backgroundColor: '#FFF',
    padding: 20,
    borderRadius: 18,
    marginBottom: 18,

    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },

    elevation: 3,
  },

  icon: {
    fontSize: 32,
  },

  label: {
    fontSize: 15,
    color: '#777',
    fontWeight: '600',
  },

  value: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 4,
    color: '#222',
  },

  alertCard: {
    backgroundColor: '#FFE5E5',
    borderWidth: 1,
    borderColor: '#FF4D4D',
  },

  alertText: {
    color: '#D60000',
  },
});
