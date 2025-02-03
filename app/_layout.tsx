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
        {/* Sidebar */}
        <View
          style={[
            tailwind(`h-full bg-white border-r w-280`),
            {
              borderColor:
                tailwind('border-customBorder')?.borderColor || '#e5e8eb',
            },
          ]}
        >
          <Sidebar />
        </View>

        {/* Main Content */}
        <View style={tailwind('flex-1')}>
          <Stack screenOptions={{ headerShown: false }} />
        </View>
      </View>
    </ThemeProvider>
  );
}
