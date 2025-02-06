import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { UseEnvironment } from '../utils/environmentUtils';
import mockUser from '../app/mocks/user';
import { getStyle } from './layout/styles';
import CaretUp from '../assets/images/caret-up.svg';
import CaretDown from '../assets/images/caret-down.svg';
import DropdownWrapper from './DropdownWrapper';
import { useDropdown } from '../context/DropdownProvider';

interface User {
  initials: string;
  fullName: string;
}

const ProfileDropdown: React.FC = () => {
  const { environment, tailwind } = UseEnvironment();
  const [user] = useState<User>(mockUser);

  const { activeDropdown, toggleDropdown } = useDropdown();
  const { width } = environment;
  const widthSwitch = 390;

  const isOpen = activeDropdown === 'profile';

  return (
    <View style={[tailwind('flex flex-row'), { position: 'static' }]}>
      <View
        style={[
          tailwind(
            'w-15 h-15 rounded-full flex items-center justify-center mx-10 p-20'
          ),
          { backgroundColor: getStyle('bg-customActive') },
        ]}
      >
        <Text
          style={[
            tailwind(' font-bold text-lg text-xs'),
            { color: getStyle('text-customActiveText') },
          ]}
        >
          {user.initials}
        </Text>
      </View>

      <TouchableOpacity
        onPress={() => toggleDropdown('profile')}
        style={[
          tailwind('flex-row items-center'),
          { position: width < widthSwitch ? 'static' : 'relative' },
        ]}
      >
        <View
          style={tailwind('h-15 rounded-full flex items-center justify-center')}
        >
          <Text
            style={tailwind(
              'text-customInactiveText font-semibold text-lightGray text-xs'
            )}
          >
            {user.fullName}
          </Text>
        </View>
        <View style={tailwind('w-30 items-center')}>
          <Image
            source={isOpen ? (CaretUp as any) : (CaretDown as any)}
            style={{ width: 22, height: 22 }}
            tintColor={getStyle('text-customIcon')}
          />
        </View>

        {isOpen && (
          <DropdownWrapper
            maxWidth={widthSwitch}
            positionFromTop={60}
            narrowPositionFromTop={85}
          >
            <View
              style={[
                tailwind('px-35 py-28'),
                { borderBottomWidth: 2, borderBottomColor: '#f2f2f2' },
              ]}
            >
              <Text
                style={[
                  tailwind('font-bold'),
                  { color: '#616161', fontSize: 20 },
                ]}
              >
                Adrian Stefan
              </Text>
              <Text
                style={[
                  tailwind('mt-2'),
                  { color: '#adadad', fontSize: 18, lineHeight: 14 },
                ]}
              >
                adrian.stefan@example.com
              </Text>
            </View>

            <TouchableOpacity
              style={[
                tailwind('px-6 py-3 m-13 rounded-lg'),
                { backgroundColor: '#f8f8f8' },
              ]}
            >
              <Text style={{ color: '#616161', fontSize: 18 }}>Profile</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                tailwind('px-9 py-25'),
                {
                  borderTopWidth: 2,
                  borderTopColor: '#f2f2f2',
                },
              ]}
            >
              <Text style={{ color: '#616161', fontSize: 18 }}>Logout</Text>
            </TouchableOpacity>
          </DropdownWrapper>
        )}
      </TouchableOpacity>
    </View>
  );
};

export default ProfileDropdown;
