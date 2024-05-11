import { Stack } from 'expo-router/stack';
import HomeScreen from '@/screens/HomeScreen';
import GetStartedScreen from '@/screens/GetStartedScreen';
import { Provider } from 'react-redux';
import store from '@/Store/Store';
export default function AppLayout() {
  return (
    <Provider store={store}> 
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(tabs)" />
        <Stack.Screen name="index" />
      </Stack>
    </Provider>
  );
}
