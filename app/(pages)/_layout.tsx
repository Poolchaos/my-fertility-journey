import { View, Text } from 'react-native';
import { useTailwind } from 'tailwind-rn';

export default function RootLayout() {
  const tailwind = useTailwind();

  return (
    <View style={tailwind('p-4')}>
      <Text style={tailwind('text-lg font-bold')}>Page content here</Text>
    </View>
  );
}
