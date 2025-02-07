import React from 'react';
import { View } from 'react-native';
import { UseEnvironment } from '../../utils/environmentUtils';
import { Style } from 'tailwind-rn';

const WidgetWrapper: React.FC<{
  children: React.ReactNode;
  style?: Style | Style[];
}> = ({ children, style }) => {
  const { tailwind } = UseEnvironment();

  return (
    <View
      style={[
        tailwind('rounded-lg'),
        {
          backgroundColor: '#fff',
          boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.1)',
        },
        style,
      ]}
    >
      {children}
    </View>
  );
};

export default WidgetWrapper;
