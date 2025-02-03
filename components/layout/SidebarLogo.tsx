import React from 'react';
import { Image } from 'react-native';
import { UseEnvironment } from '../../utils/environmentUtils';

const SidebarLogo: React.FC = () => {
  const { tailwind } = UseEnvironment();
  return (
    <Image
      source={require('../../assets/images/logo.png')}
      style={tailwind('w-88 h-34 mt-7 mb-40')}
      resizeMode="contain"
    />
  );
};

export default SidebarLogo;
