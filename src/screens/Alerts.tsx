import { View, Text, StyleSheet } from 'react-native';
import { useHealthData } from '../hooks/useHealthData';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Alerts() {
  const { fall } = useHealthData();

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Alertas</Text>

      {fall === 1 ? (
        <Text style={styles.alert}>
          🚨 Queda detectada recentemente
        </Text>
      ) : (
        <Text style={styles.ok}>
          Nenhum alerta ativo
        </Text>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  title: { fontSize: 20, fontWeight: 'bold' },
  alert: {
    marginTop: 20,
    color: '#B00020',
    fontSize: 18,
    fontWeight: 'bold',
  },
  ok: {
    marginTop: 20,
    color: '#2E7D32',
    fontSize: 16,
  },
});