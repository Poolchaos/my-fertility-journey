import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { MenuItem } from './Sidebar.data';
import { UseEnvironment } from '../../utils/environmentUtils';

interface Props {
  item: MenuItem;
  onPress: () => void;
  backgroundColor: string | undefined;
  textColor: string;
  iconColor: string;
}

const SidebarItem: React.FC<Props> = ({
  item,
  onPress,
  backgroundColor,
  textColor,
  iconColor,
}) => {
  const { tailwind } = UseEnvironment();
  const iconWidth =
    item.path === '/users' ? 22 : item.path === '/logs' ? 15 : 18;
  const bgColor =
    backgroundColor || tailwind('bg-customActive').backgroundColor;
  const txtColor = textColor || tailwind('text-customActiveText').color;

  return (
    <TouchableOpacity
      style={[
        tailwind('flex-row items-center rounded-lg'),
        {
          backgroundColor: bgColor,
          paddingTop: 15,
          paddingBottom: 15,
          paddingLeft: 18,
          height: 48,
        },
      ]}
      onPress={onPress}
    >
      <View
        style={[
          tailwind('mr-4'),
          { width: iconWidth, height: 18, alignItems: 'center' },
        ]}
      >
        <Image
          source={item.icon}
          style={{
            width: iconWidth,
            height: 18,
          }}
          tintColor={iconColor}
        />
      </View>
      <Text
        style={[
          tailwind('text-lg font-medium'),
          {
            color: txtColor,
            fontSize: 14,
            lineHeight: 14,
          },
        ]}
      >
        {item.name}
      </Text>
    </TouchableOpacity>
  );
};

export default SidebarItem;
