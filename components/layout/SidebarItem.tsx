import React from 'react';
import { Text, TouchableOpacity, Image, View } from 'react-native';
import { MenuItem } from './Sidebar.data';
import { UseEnvironment } from '../../utils/environmentUtils';

interface Props {
  item: MenuItem;
  onPress: () => void;
  backgroundColor: string | undefined;
  textColor: string;
  iconColor: string;
  isCollapsed: boolean;
}

const SidebarItem: React.FC<Props> = ({
  item,
  onPress,
  backgroundColor,
  textColor,
  iconColor,
  isCollapsed,
}) => {
  // ✅ Ensure hooks are always called first
  const { tailwind } = UseEnvironment();

  return (
    <TouchableOpacity
      style={[
        tailwind('flex-row items-center rounded-lg'),
        {
          backgroundColor:
            backgroundColor || tailwind('bg-customActive').backgroundColor,
          paddingVertical: 15,
          paddingHorizontal: 12,
          height: 48,
          justifyContent: isCollapsed ? 'center' : 'flex-start',
        },
      ]}
      onPress={onPress}
    >
      <View style={tailwind('w-30 items-center')}>
        <Image
          source={item.icon}
          style={{ width: item.width || 22, height: 22 }}
          tintColor={iconColor}
        />
      </View>

      {!isCollapsed &&
        typeof item.name === 'string' &&
        item.name.trim() !== '' && (
          <Text
            style={[
              tailwind('text-lg font-medium ml-4'),
              { color: textColor, fontSize: 15, lineHeight: 15 },
            ]}
          >
            {item.name}
          </Text>
        )}
    </TouchableOpacity>
  );
};

export default SidebarItem;
