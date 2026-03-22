import { useEffect, useState } from 'react';
import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';


export default function Settings() {
  return (
    <SafeAreaView style={{ padding: 16 }}>
      <Text style={{ fontSize: 22, fontWeight: 'bold' }}>
        Configurações
      </Text>
      <Text style={{ marginTop: 12 }}>
        Ajustes do sistema ecoSaúde.
      </Text>
    </SafeAreaView>
  );
}