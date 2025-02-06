import HomeIcon from '../../assets/images/home.svg';
import ProfileIcon from '../../assets/images/profile.svg';
import UsersIcon from '../../assets/images/users.svg';
import MedicalIcon from '../../assets/images/medical-briefcase.svg';
import DocumentIcon from '../../assets/images/document.svg';

export interface MenuItem {
  name: string;
  path: string;
  icon: any;
  width?: number;
  isVisible?: boolean;
  backgroundColor?: string;
  color?: string;
  iconColor?: string;
}

export const menuItemsData: MenuItem[] = [
  {
    name: 'Dashboard',
    path: '/',
    icon: HomeIcon,
  },
  {
    name: 'My Profile',
    path: '/profile',
    icon: ProfileIcon,
  },
  {
    name: 'Manage Users',
    path: '/users',
    icon: UsersIcon,
    width: 28,
  },
  {
    name: 'Manage Practices',
    path: '/patients',
    icon: MedicalIcon,
  },
  {
    name: 'Manage Patients',
    path: '/patients',
    icon: MedicalIcon,
  },
  {
    name: 'Logs',
    path: '/logs',
    icon: DocumentIcon,
    width: 17,
  },
];
