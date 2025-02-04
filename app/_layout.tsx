import { View } from 'react-native';
import { Stack } from 'expo-router';
import { DefaultTheme, ThemeProvider } from '@react-navigation/native';
import Sidebar from '../components/layout/Sidebar';
import { UseEnvironment } from '../utils/environmentUtils';

export default function RootLayout() {
  const { tailwind } = UseEnvironment();

  return (
    <ThemeProvider value={DefaultTheme}>
      <View style={tailwind('flex-row h-full w-full bg-white')}>
        {/* Sidebar handles its own state */}
        <Sidebar />

        {/* Main Content */}
        <View style={tailwind('flex-1')}>
          <Stack screenOptions={{ headerShown: false }} />
        </View>
      </View>
    </ThemeProvider>
  );
}
