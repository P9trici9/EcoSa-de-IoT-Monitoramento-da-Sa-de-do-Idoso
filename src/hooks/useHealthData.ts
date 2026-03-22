import { useEffect, useRef, useState } from 'react';
import * as Notifications from 'expo-notifications';
import { Platform } from 'react-native';
import { getHealthData } from '../services/api';

export function useHealthData() {
  const [temperature, setTemperature] = useState(0);
  const [heartRate, setHeartRate] = useState(0);
  const [fall, setFall] = useState(0);

  const lastFall = useRef(0);

  useEffect(() => {

  async function loadNow() {
    const data = await getHealthData();
    setTemperature(data.temperature);
    setHeartRate(data.heartRate);
    setFall(data.fall);
  }

  loadNow(); 

  const interval = setInterval(loadNow, 2000);

  return () => clearInterval(interval);

}, []);


  return { temperature, heartRate, fall };
}

async function triggerFallNotification() {
  await Notifications.scheduleNotificationAsync({
    content: {
      title: '🚨 Queda detectada!',
      body: 'Possível queda do idoso. Verifique imediatamente.',
      sound: 'true',
    },
    trigger: null,
  });
}