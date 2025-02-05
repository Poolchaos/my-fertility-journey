import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { UseEnvironment } from '../utils/environmentUtils';
import mockUser from '../app/mocks/user';
import { getstyle } from './layout/styles';

import CaretUp from '../assets/images/caret-up.svg';
import CaretDown from '../assets/images/caret-down.svg';
import DropdownWrapper from './DropdownWrapper';

interface User {
  initials: string;
  fullName: string;
}

const ProfileDropdown: React.FC = () => {
  const { environment, tailwind } = UseEnvironment();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [user] = useState<User>(mockUser);
  const { width } = environment;
  const widthSwitch = 390;

  return (
    <View style={{ position: width < widthSwitch ? 'static' : 'relative' }}>
      {/* Profile Section */}
      <TouchableOpacity
        onPress={() => setIsOpen(!isOpen)}
        style={tailwind('flex-row items-center')}
      >
        <View
          style={[
            tailwind(
              'w-15 h-15 rounded-full flex items-center justify-center mx-10 p-20'
            ),
            { backgroundColor: getstyle('bg-customActive') },
          ]}
        >
          <Text
            style={[
              tailwind(' font-bold text-lg text-xs'),
              { color: getstyle('text-customActiveText') },
            ]}
          >
            {user.initials}
          </Text>
        </View>
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
            tintColor={getstyle('text-customIcon')}
          />
        </View>

        {isOpen && (
          <DropdownWrapper
            isVisible={isOpen}
            maxWidth={widthSwitch}
            positionFromTop={60}
            narrowPositionFromTop={71}
          >
            <TouchableOpacity style={tailwind('mb-2')}>
              <Text style={tailwind('text-gray-700 font-bold')}>Profile</Text>
            </TouchableOpacity>
            <TouchableOpacity style={tailwind('mb-2')}>
              <Text style={tailwind('text-gray-700 font-bold')}>Settings</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={tailwind('text-red-500 font-bold')}>Logout</Text>
            </TouchableOpacity>
          </DropdownWrapper>
        )}
      </TouchableOpacity>
    </View>
  );
};

export default ProfileDropdown;
