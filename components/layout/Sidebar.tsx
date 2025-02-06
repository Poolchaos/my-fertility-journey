import React from 'react';
import { View, Text, Image } from 'react-native';
import { useRouter, usePathname } from 'expo-router';
import { UseEnvironment } from '../../utils/environmentUtils';
import SidebarItem from './SidebarItem';
import SidebarLogo from './SidebarLogo';
import { MenuItem, menuItemsData } from './Sidebar.data';
import { getCustomStyles } from './styles';
import { useDropdown } from '../../context/DropdownProvider';

import closeSquare from '../../assets/images/close-square.svg';
import caretRight from '../../assets/images/caret-right.svg';
import MedicalIcon from '../../assets/images/medical-briefcase.svg';

const Sidebar: React.FC = () => {
  const { environment, tailwind, breakpoints } = UseEnvironment();
  const router = useRouter();
  const pathname = usePathname();
  const { activeDropdown } = useDropdown();
  const [isCollapsed, setIsCollapsed] = React.useState(true);
  const { width } = environment;
  const customIconColor =
    (tailwind('text-customIcon')?.color as string) || '#67adb9';

  const toggleSidebar = () => setIsCollapsed(!isCollapsed);
  const isNotificationsOpen = activeDropdown === 'notifications';
  const isProfileOpen = activeDropdown === 'profile';

  const sidebarItems: MenuItem[] = React.useMemo(() => {
    return menuItemsData.map((item) => {
      return {
        ...item,
        isVisible:
          isProfileOpen || isNotificationsOpen
            ? [
                'Dashboard',
                'My Profile',
                'Manage Users',
                'Manage Patients',
                'Logs',
              ].includes(item.name)
            : ['Dashboard', 'My Profile', 'Manage Practices', 'Logs'].includes(
                item.name
              ),
      };
    });
  }, [isProfileOpen]);

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
          borderColor: '#e5e8eb',
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
        {isNotificationsOpen && (
          <View
            style={[
              tailwind('flex-row items-center rounded-lg mb-3'),
              {
                backgroundColor: '#f8f8f8',
                paddingVertical: 18,
                paddingHorizontal:
                  isCollapsed && width < breakpoints.md ? 5 : 12,
              },
            ]}
          >
            <View style={tailwind('w-30 items-center')}>
              <Image
                source={MedicalIcon as any}
                style={{ width: 22, height: 22, tintColor: '#578388' }}
              />
            </View>
            <Text
              style={[
                tailwind('font-bold ml-4'),
                {
                  fontSize: 18,
                  color: '#333',
                  opacity: width >= breakpoints.md || !isCollapsed ? 1 : 0,
                },
              ]}
            >
              Cape Fertility Clinic
            </Text>
          </View>
        )}

        {sidebarItems.map((item: MenuItem) => {
          const isActive = pathname === item.path;
          const styles = getCustomStyles(isActive);
          if (!item.isVisible) return null;

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
