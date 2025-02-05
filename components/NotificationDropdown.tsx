import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { FontAwesome5, MaterialIcons } from '@expo/vector-icons';
import { UseEnvironment } from '../utils/environmentUtils';
import mockNotifications from '../app/mocks/notifications';
import DropdownWrapper from './DropdownWrapper';

interface Notification {
  id: number;
  title: string;
  name: string;
  date: string;
  image: string;
}

const NotificationDropdown: React.FC<{ isVisible: boolean }> = ({
  isVisible,
}) => {
  const { tailwind } = UseEnvironment();
  const [notifications, setNotifications] = useState<Notification[]>([]);

  useEffect(() => {
    setTimeout(() => {
      setNotifications(mockNotifications);
    }, 1000);
  }, []);

  return (
    <DropdownWrapper
      isVisible={isVisible}
      maxWidth={535}
      positionFromTop={84}
      narrowPositionFromTop={84}
    >
      <Text style={tailwind('text-gray-600 font-bold text-lg mb-2')}>
        Notifications
      </Text>
      <Text style={tailwind('text-gray-400 text-sm mb-4')}>
        You have {notifications.length} unread messages
      </Text>

      {notifications.map((notif) => (
        <View key={notif.id} style={tailwind('flex-row items-center mb-3')}>
          <Image
            source={{ uri: notif.image }}
            style={tailwind('w-35 h-35 rounded-full mr-3')}
          />
          <View style={tailwind('flex-1')}>
            <Text style={tailwind('font-bold')}>{notif.title}</Text>
            <Text>{notif.name}</Text>
            <View style={tailwind('flex-row items-center mt-1')}>
              <FontAwesome5 name="clock" size={12} color="#414141" />
              <Text style={tailwind('ml-1 text-gray-500 text-xs')}>
                {notif.date}
              </Text>
            </View>
          </View>
          <TouchableOpacity>
            <MaterialIcons name="delete" size={20} color="#ff4d4d" />
          </TouchableOpacity>
        </View>
      ))}
      <TouchableOpacity style={tailwind('mt-4 items-center')}>
        <Text style={tailwind('text-customIcon font-bold')}>Clear All</Text>
      </TouchableOpacity>
    </DropdownWrapper>
  );
};

export default NotificationDropdown;
