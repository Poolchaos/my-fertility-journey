import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { UseEnvironment } from '../utils/environmentUtils';
import NotificationDropdown from './NotificationDropdown';
import ProfileDropdown from './ProfileDropdown';
import { getStyle } from './layout/styles';
import { useDropdown } from '../context/DropdownProvider';

FontAwesome5.defaultProps.solid = true;

const Navbar: React.FC = () => {
  const { environment, tailwind } = UseEnvironment();
  const { activeDropdown, toggleDropdown } = useDropdown();

  return (
    <View
      style={[
        tailwind('flex-row justify-end items-center px-4 py-13 z-50'),
        { backgroundColor: getStyle('bg-white') },
      ]}
    >
      {/* Notifications */}
      <View
        style={[
          tailwind('z-50'),
          { position: environment.width < 535 ? 'static' : 'relative' },
        ]}
      >
        <TouchableOpacity
          onPress={() => toggleDropdown('notifications')}
          style={[tailwind('relative mr-4'), { zIndex: 51 }]}
        >
          <FontAwesome5 name="bell" size={15} color="#9d9d9d" />
          {/* Notification Badge */}
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
        {activeDropdown === 'notifications' && <NotificationDropdown />}
      </View>

      {/* Profile Dropdown */}
      <ProfileDropdown />
    </View>
  );
};

export default React.memo(Navbar);
