import React from 'react';
import { View } from 'react-native';
import { useSidebar } from './SidebarContext';
import SidebarMenu from './SidebarMenu';
import SidebarLogo from './SidebarLogo';
import { UseEnvironment } from '../../utils/environmentUtils';
import closeSquare from '../../assets/images/close-square.svg';
import caretRight from '../../assets/images/caret-right.svg';
import SidebarItem from './SidebarItem';

const Sidebar: React.FC = () => {
  const { isCollapsed, toggleSidebar } = useSidebar();
  const { environment, breakpoints, tailwind } = UseEnvironment();
  const { width } = environment;

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
            iconColor={
              (tailwind('text-customIcon')?.color as string) || '#67adb9'
            }
            isCollapsed={false}
          />
        </View>
      ) : (
        <SidebarLogo />
      )}

      <SidebarMenu isCollapsed={isCollapsed} />
    </View>
  );
};

export default Sidebar;
