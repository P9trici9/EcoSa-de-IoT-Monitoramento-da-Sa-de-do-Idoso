import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Dashboard from './src/screens/Dashboard';
import History from './src/screens/History';
import Alerts from './src/screens/Alerts';
import Settings from './src/screens/Settings';

import * as Notifications from 'expo-notifications';
import { useEffect } from 'react';
import { Platform } from 'react-native';

const Tab = createBottomTabNavigator();

Notifications.setNotificationHandler({
  handleNotification: async () => {
    return {
      shouldShowBanner: true, 
      shouldShowList: true,   
      shouldPlaySound: true,
      shouldSetBadge: false,
    };
  },
});

export default function App() {
  useEffect(() => {
    async function setupNotifications() {
      const { status } =
        await Notifications.requestPermissionsAsync();

      if (status !== 'granted') {
        alert('Permissão negada!');
        return;
      }

      if (Platform.OS === 'android') {
        await Notifications.setNotificationChannelAsync(
          'fall-alerts',
          {
            name: 'Alertas de Queda',
            importance:
              Notifications.AndroidImportance.MAX,
            sound: 'default',
            vibrationPattern: [0, 300, 300],
            enableVibrate: true,
          }
        );
      }
    }

    setupNotifications();
  }, []);

  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen name="Dashboard" component={Dashboard} />
        <Tab.Screen name="Histórico" component={History} />
        <Tab.Screen name="Alertas" component={Alerts} />
        <Tab.Screen name="Configurações" component={Settings} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
