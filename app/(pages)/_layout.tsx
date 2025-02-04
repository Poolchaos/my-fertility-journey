import { View, Text, SafeAreaView } from 'react-native';
import { UseEnvironment } from '../../utils/environmentUtils';

export default function RootLayout() {
  const { tailwind } = UseEnvironment();
  return (
    <SafeAreaView style={tailwind('flex-1')}>
      <View style={tailwind('p-4')}>
        <Text style={tailwind('text-lg font-bold')}>Page content here</Text>
      </View>
    </SafeAreaView>
  );
}
