import React from 'react';
import { View, SafeAreaView } from 'react-native';
import { UseEnvironment } from '../../utils/environmentUtils';
import Navbar from '../../components/Navbar';

const RootLayout: React.FC = () => {
  const { tailwind } = UseEnvironment();

  return (
    <SafeAreaView style={tailwind('flex-1 bg-white')}>
      <Navbar />
      <View style={tailwind('p-4')}>{/* Page content here */}</View>
    </SafeAreaView>
  );
};

export default RootLayout;
