import React, { useMemo } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { UseEnvironment } from '../../utils/environmentUtils';
import DropdownWrapper from '../ui/DropdownWrapper';
import mockNotifications from '../../constants/notifications';
import trashIcon from '../../assets/images/trash.svg';

const NotificationDropdown: React.FC = () => {
  const { tailwind } = UseEnvironment();

  const notifications = useMemo(() => mockNotifications, []);

  return (
    <View testID="notification-dropdown">
      <DropdownWrapper
        maxWidth={535}
        positionFromTop={84}
        narrowPositionFromTop={84}
      >
        <View
          style={[
            tailwind('px-18 py-20'),
            { borderBottomWidth: 2, borderBottomColor: '#f2f2f2' },
          ]}
        >
          <Text
            style={[tailwind('font-bold'), { color: '#414141', fontSize: 18 }]}
          >
            Notifications
          </Text>
          <Text
            style={[
              tailwind('mt-1'),
              { color: '#747474', fontSize: 16, lineHeight: 14 },
            ]}
          >
            You have {notifications.length} unread messages
          </Text>
        </View>

        {notifications.map((notif) => (
          <View
            key={notif.id}
            style={[
              tailwind('flex-row items-center px-14 py-25'),
              {
                borderBottomWidth: 2,
                borderBottomColor: '#f2f2f2',
              },
            ]}
          >
            <Image
              source={{ uri: notif.image }}
              style={tailwind('w-35 h-35 rounded-full mr-3')}
            />
            <View style={tailwind('flex-1')}>
              <Text style={[tailwind('font-bold'), { color: '#414141' }]}>
                {notif.title}
              </Text>
              <Text style={{ color: '#747474' }}>{notif.name}</Text>
              <View style={tailwind('flex-row items-center mt-1')}>
                <FontAwesome5 name="clock" size={12} color="#BCBCBC" />
                <Text style={[tailwind('ml-1 text-xs'), { color: '#BCBCBC' }]}>
                  {notif.date}
                </Text>
              </View>
            </View>
            <TouchableOpacity>
              <Image
                source={trashIcon as any}
                style={{ width: 22, height: 22 }}
                tintColor="#BCBCBC"
              />
            </TouchableOpacity>
          </View>
        ))}

        <TouchableOpacity style={tailwind('my-20 items-center')}>
          <Text style={[tailwind('font-bold'), { color: '#67ADB9' }]}>
            Clear All
          </Text>
        </TouchableOpacity>
      </DropdownWrapper>
    </View>
  );
};

export default React.memo(NotificationDropdown);
