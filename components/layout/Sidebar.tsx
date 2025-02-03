import React from 'react';
import { View, Text } from 'react-native'; // Import Text
import { useRouter, usePathname } from 'expo-router';
import { UseEnvironment } from '../../utils/environmentUtils';
import SidebarItem from './SidebarItem';
import SidebarLogo from './SidebarLogo';
import { MenuItem, menuItemsData } from './Sidebar.data';
import { getMenuItemStyles } from './Sidebar.styles';

const Sidebar: React.FC = () => {
  const { tailwind } = UseEnvironment();
  const router = useRouter();
  const pathname = usePathname();

  if (!tailwind) {
    return <Text>Loading...</Text>;
  }

  return (
    <View style={tailwind('h-full bg-white p-4')}>
      <SidebarLogo />
      {menuItemsData.map((item: MenuItem) => {
        const isActive = pathname === item.path;
        const styles = getMenuItemStyles(isActive);

        return (
          <SidebarItem
            key={item.path}
            item={item}
            onPress={() => router.push(item.path as any)}
            backgroundColor={styles.backgroundColor}
            textColor={styles.color ?? 'black'}
            iconColor={styles.iconColor ?? 'gray'}
          />
        );
      })}
    </View>
  );
};

export default Sidebar;
