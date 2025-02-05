import React, { useState } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { UseEnvironment } from '../utils/environmentUtils';
import NotificationDropdown from './NotificationDropdown';
import ProfileDropdown from './ProfileDropdown';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { getstyle } from './layout/styles';
console.log(' ::>> FontAwesome >>>>> ', { FontAwesome, FontAwesome5 });
FontAwesome5.defaultProps.solid = true;

const Navbar: React.FC = () => {
  const { environment, tailwind } = UseEnvironment();
  const [isNotifOpen, setIsNotifOpen] = useState(false);
  const { width } = environment;

  return (
    <View
      style={[
        tailwind('flex-row justify-end items-center px-4 py-13'),
        { backgroundColor: getstyle('bg-white') },
      ]}
    >
      <View
        style={[
          tailwind('z-50'),
          { position: width < 535 ? 'static' : 'relative' },
        ]}
      >
        {/* Notifications Icon */}
        <TouchableOpacity
          onPress={() => setIsNotifOpen(!isNotifOpen)}
          style={[tailwind('relative mr-4'), { zIndex: 51 }]}
        >
          <FontAwesome5
            name="bell"
            size={15}
            color="#9d9d9d"
            backgroundColor="#9d9d9d"
          />
          <View
            style={[
              tailwind(
                'absolute -top-3 -right-3 bg-red-500 rounded-full w-18 h-18 flex items-center justify-center'
              ),
              { backgroundColor: '#ff5651' },
            ]}
          >
            <Text
              style={[
                tailwind('text-white text-xxs font-bold'),
                { color: '#ffffff' },
              ]}
            >
              2
            </Text>
          </View>
        </TouchableOpacity>
        {isNotifOpen && <NotificationDropdown isVisible={isNotifOpen} />}
      </View>

      <ProfileDropdown />
    </View>
  );
};

export default Navbar;
