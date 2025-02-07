import React from 'react';
import { View, Image, Text } from 'react-native';
import SidebarItem from './SidebarItem';
import { menuItemsData } from '../../constants/Sidebar.data';
import { UseEnvironment } from '../../utils/environmentUtils';
import { useRouter, usePathname } from 'expo-router';
import { getCustomStyles } from '../../styles/styles';
import { useDropdown } from '../../context/DropdownProvider';
import MedicalIcon from '../../assets/images/medical-briefcase.svg';

interface Props {
  isCollapsed: boolean;
}

const SidebarMenu: React.FC<Props> = ({ isCollapsed }) => {
  const { tailwind, breakpoints, environment } = UseEnvironment();
  const width = environment.width;
  const router = useRouter();
  const pathname = usePathname();
  const { activeDropdown } = useDropdown();

  const isNotificationsOpen = activeDropdown === 'notifications';
  const isProfileOpen = activeDropdown === 'profile';

  const sidebarItems = menuItemsData.map((item) => ({
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
  }));

  return (
    <View
      style={tailwind(isCollapsed && width < breakpoints.md ? 'px-5' : 'px-15')}
    >
      {isNotificationsOpen && (
        <View
          style={[
            tailwind('flex-row items-center rounded-lg mb-3'),
            {
              backgroundColor: '#f8f8f8',
              paddingVertical: 18,
              paddingHorizontal: isCollapsed && width < breakpoints.md ? 5 : 12,
            },
          ]}
        >
          <View style={tailwind('w-30 items-center')}>
            <Image
              source={MedicalIcon as any}
              style={{ width: 22, height: 22 }}
              tintColor="#578388"
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

      {sidebarItems.map((item) => {
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
  );
};

export default SidebarMenu;
