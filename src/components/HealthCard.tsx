import { useEffect, useState } from 'react';
import { View, Text } from 'react-native';

export default function HealthCard({
  title,
  value,
  alert = false,
}: {
  title: string;
  value: string;
  alert?: boolean;
}) {
  return (
    <View
      style={{
        padding: 16,
        borderRadius: 12,
        backgroundColor: alert ? '#FFE5E5' : '#F2F2F2',
        marginBottom: 12,
      }}
    >
      <Text style={{ fontSize: 16, fontWeight: '600' }}>{title}</Text>
      <Text style={{ fontSize: 22, fontWeight: 'bold' }}>{value}</Text>
    </View>
  );
}