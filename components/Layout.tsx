import React from 'react';
import { View } from 'react-native';
import { DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { UseEnvironment } from '../utils/environmentUtils';
import Sidebar from './layout/Sidebar';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { tailwind } = UseEnvironment();

  return (
    <ThemeProvider value={DefaultTheme}>
      <View style={tailwind('flex-row h-full w-full bg-white')}>
        <Sidebar />

        <View
          style={[tailwind('flex-1 overflow-hidden'), { minWidth: '235px' }]}
        >
          {children}
        </View>
      </View>
    </ThemeProvider>
  );
};

export default Layout;
