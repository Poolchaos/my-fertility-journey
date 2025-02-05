import React, { useState } from 'react';
import { View } from 'react-native';
import { useRouter, usePathname } from 'expo-router';
import { UseEnvironment } from '../../utils/environmentUtils';
import SidebarItem from './SidebarItem';
import SidebarLogo from './SidebarLogo';
import { MenuItem, menuItemsData } from './Sidebar.data';
import { getCustomStyles } from './styles';

import closeSquare from '../../assets/images/close-square.svg';
import caretRight from '../../assets/images/caret-right.svg';

const Sidebar: React.FC = () => {
  const { environment, tailwind, breakpoints } = UseEnvironment();
  const router = useRouter();
  const pathname = usePathname();
  const [isCollapsed, setIsCollapsed] = useState(true);
  const { width } = environment;
  const customIconColor =
    (tailwind('text-customIcon')?.color as string) || '#67adb9';

  const toggleSidebar = () => setIsCollapsed(!isCollapsed);

  return (
    <View
      style={[
        tailwind('h-full bg-white border-r absolute'),
        {
          width:
            width < breakpoints.md
              ? isCollapsed
                ? 50
                : width > 280
                  ? 280
                  : '100%'
              : 280,
          transition: 'width 0.3s ease-in-out',
          zIndex: 50,
          position: 'relative',
        },
      ]}
    >
      {width < breakpoints.md ? (
        <View style={tailwind('flex-row items-start justify-between')}>
          {!isCollapsed && <SidebarLogo />}

          <SidebarItem
            item={{
              name: '',
              icon: isCollapsed ? caretRight : closeSquare,
              path: '',
            }}
            onPress={toggleSidebar}
            backgroundColor="transparent"
            textColor="black"
            iconColor={customIconColor}
            isCollapsed={false}
          />
        </View>
      ) : (
        <SidebarLogo />
      )}

      <View
        style={tailwind(
          isCollapsed && width < breakpoints.md ? 'px-5' : 'px-15'
        )}
      >
        {/* Sidebar Items */}
        {menuItemsData.map((item: MenuItem) => {
          const isActive = pathname === item.path;
          const styles = getCustomStyles(isActive);

          return (
            <SidebarItem
              key={item.path}
              item={item}
              onPress={() => router.push(item.path as any)}
              backgroundColor={styles.backgroundColor}
              textColor={styles.color ?? 'black'}
              iconColor={styles.iconColor ?? 'gray'}
              isCollapsed={isCollapsed && width < breakpoints.md}
            />
          );
        })}
      </View>
    </View>
  );
};

export default Sidebar;
