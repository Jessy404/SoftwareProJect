import { Stack } from 'expo-router/stack';
import HomeScreen from '@/screens/HomeScreen';
import GetStartedScreen from '@/screens/GetStartedScreen';
export default function AppLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="(tabs)" />
      <Stack.Screen name="index" />
    </Stack>
  );
}
