import { View, Text, useWindowDimensions, Appearance } from 'react-native';
import { Stack } from 'expo-router';
import { DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { create } from 'tailwind-rn';
import utilities from '../tailwind.json';

export default function RootLayout() {
  // ✅ Move Hooks to the top level
  const dimensions = useWindowDimensions();
  const colorScheme = Appearance.getColorScheme() || 'light';

  // ✅ Use environment as a plain object (not a function call inside render)
  const environment = {
    orientation:
      dimensions.width > dimensions.height
        ? ('landscape' as const)
        : ('portrait' as const),
    colorScheme,
    reduceMotion: false,
    width: dimensions.width,
    height: dimensions.height,
  };

  // ✅ Tailwind function must be inside the component
  const tailwind = create(utilities, environment);

  return (
    <ThemeProvider value={DefaultTheme}>
      <View style={tailwind('flex-row h-full w-full bg-white')}>
        {/* Sidebar */}
        <View
          style={tailwind('w-1/5 h-full bg-white border-r border-gray-300')}
        >
          <Text style={tailwind('text-lg font-bold p-4')}>Sidebar</Text>
        </View>

        {/* Main Content */}
        <View style={tailwind('flex-1 p-4')}>
          <Stack screenOptions={{ headerShown: false }} />
        </View>
      </View>
    </ThemeProvider>
  );
}
