import * as Notifications from 'expo-notifications';

export async function notifyFallDetected() {
  await Notifications.scheduleNotificationAsync({
    content: {
      title: '⚠️ Queda Detectada',
      body: 'Possível queda detectada. Verifique imediatamente.',
      sound: true,
      priority: Notifications.AndroidNotificationPriority.MAX,
    },
    trigger: null, // dispara imediatamente
  });
}
