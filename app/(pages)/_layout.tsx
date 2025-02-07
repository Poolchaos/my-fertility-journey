import React from 'react';
import { View, SafeAreaView, ScrollView } from 'react-native';
import { UseEnvironment } from '../../utils/environmentUtils';
import Navbar from '../../components/layout/Navbar';
import { Slot } from 'expo-router';
import { useDropdown } from '../../context/DropdownProvider';

const RootLayout: React.FC = () => {
  const { tailwind } = UseEnvironment();
  const { activeDropdown } = useDropdown();

  return (
    <SafeAreaView style={tailwind('flex-1 bg-white')}>
      <Navbar />
      <ScrollView
        contentContainerStyle={tailwind('flex-1')}
        keyboardShouldPersistTaps="handled"
      >
        <View style={[tailwind('p-4 flex-1 bg-customBackground')]}>
          <View
            style={[
              tailwind(`${activeDropdown ? 'opacity-0' : 'opacity-100'}`),
              activeDropdown ? { pointerEvents: 'none' } : {},
            ]}
          >
            <Slot />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default RootLayout;
