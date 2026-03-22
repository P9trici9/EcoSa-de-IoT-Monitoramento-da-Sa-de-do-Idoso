import {View,Text, FlatList,TouchableOpacity,} from 'react-native';
import { useEffect, useState } from 'react';
import {getFallHistory,confirmFall,} from '../services/api';
import { SafeAreaView } from 'react-native-safe-area-context';

type FallEvent = {
  id: string;
  time: string;
  confirmed: boolean;
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleString('pt-BR', {
    timeZone: 'America/Manaus',
    dateStyle: 'short',
    timeStyle: 'medium',
  });
}

export default function History() {
  const [events, setEvents] = useState<FallEvent[]>([]);

  useEffect(() => {
    loadHistory();
  }, []);

  async function loadHistory() {
    const data = await getFallHistory();
    setEvents(data);
  }

  async function handleConfirm(id: string) {
    await confirmFall(id);
    setEvents(events =>
      events.map(e =>
        e.id === id ? { ...e, confirmed: true } : e
      )
    );
    
  }

  return (
    <SafeAreaView
      style={{
        flex: 1,
        padding: 20,
        backgroundColor: '#F7F7F7',
      }}
      edges={['top']}
    >
      <Text
        style={{
          fontSize: 22,
          fontWeight: 'bold',
          marginBottom: 12,
        }}
      >
        Histórico de Quedas
      </Text>

      <FlatList
        data={events}
        keyExtractor={(item) => item.id}
        ListEmptyComponent={
          <Text style={{ color: '#666', marginTop: 20 }}>
            Nenhuma queda registrada.
          </Text>
        }
        renderItem={({ item }) => (
          <View
            style={{
              backgroundColor: item.confirmed
                ? '#E8F5E9'
                : '#FFEAEA',
              padding: 14,
              borderRadius: 12,
              marginBottom: 12,
              borderLeftWidth: 5,
              borderLeftColor: item.confirmed
                ? '#43A047'
                : '#E53935',
              elevation: 2,
            }}
          >
            <Text
              style={{
                fontSize: 16,
                fontWeight: 'bold',
              }}
            >
              {item.confirmed
                ? '✅ Queda confirmada'
                : '🚨 Queda detectada'}
            </Text>

            <Text
              style={{
                marginTop: 4,
                color: '#555',
              }}
            >
              {formatDate(item.time)}
            </Text>

            {!item.confirmed && (
              <TouchableOpacity
                style={{
                  marginTop: 10,
                  backgroundColor: '#43A047',
                  padding: 10,
                  borderRadius: 6,
                }}
                onPress={() => handleConfirm(item.id)}
              >
                <Text
                  style={{
                    color: '#FFF',
                    textAlign: 'center',
                    fontWeight: 'bold',
                  }}
                >
                  Confirmar queda
                </Text>
              </TouchableOpacity>
            )}
          </View>
        )}
      />
    </SafeAreaView>
  );
}