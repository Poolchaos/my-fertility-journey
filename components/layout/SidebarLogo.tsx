import React from 'react';
import { View, Image } from 'react-native';
import { UseEnvironment } from '../../utils/environmentUtils';
import logo from '../../assets/images/logo.png';

const SidebarLogo: React.FC = () => {
  const { tailwind } = UseEnvironment();

  return (
    <View style={tailwind(`pl-15 pt-15`)}>
      <Image
        source={logo}
        style={tailwind(`w-88 h-34 mt-7 mb-40`)}
        resizeMode="contain"
      />
    </View>
  );
};

export default SidebarLogo;
