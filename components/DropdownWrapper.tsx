import React from 'react';
import { View } from 'react-native';
import { UseEnvironment } from '../utils/environmentUtils';
import { getStyle } from './layout/styles';

interface DropdownWrapperProps {
  children: React.ReactNode;
  maxWidth: number;
  positionFromTop: number;
  narrowPositionFromTop: number;
}

const DropdownWrapper: React.FC<DropdownWrapperProps> = ({
  children,
  maxWidth,
  positionFromTop,
  narrowPositionFromTop,
}) => {
  const { environment, tailwind } = UseEnvironment();
  const { width } = environment;

  return (
    <View
      style={[
        tailwind(`absolute right-0 w-80 rounded-lg z-50 `),
        {
          top:
            width < maxWidth
              ? `${narrowPositionFromTop}px`
              : `calc(100% + ${positionFromTop / 2}px)`,
          backgroundColor: getStyle('bg-white'),
          boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.2)',
          right: width < maxWidth ? 'unset' : '0',
          left: width < maxWidth ? '0' : 'unset',
        },
      ]}
    >
      <View
        style={{
          position: 'absolute',
          top: -8,
          right: width < maxWidth ? maxWidth - width + 15 : 15,
          width: 0,
          height: 0,
          borderLeftWidth: 8,
          borderLeftColor: 'transparent',
          borderRightWidth: 8,
          borderRightColor: 'transparent',
          borderTopWidth: 8,
          borderTopColor: 'white',
          transform: [{ rotate: '180deg' }],
          zIndex: 500,
        }}
      />

      <View>{children}</View>
    </View>
  );
};

export default DropdownWrapper;
