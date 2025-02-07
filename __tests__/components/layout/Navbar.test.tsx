import React from 'react';
const { View, Text } = require('react-native');
import { render, screen, fireEvent } from '@testing-library/react-native';
import Navbar from '../../../components/layout/Navbar';
import { useDropdown } from '../../../context/DropdownProvider';

jest.mock('../../../context/DropdownProvider', () => ({
  useDropdown: jest.fn(),
}));

jest.mock('@expo/vector-icons', () => ({
  FontAwesome5: (props: {
    name: string;
    size: number;
    color: string;
    solid?: boolean;
  }) => {
    return (
      <View testID={`${props.name}-icon`}>
        <Text>{props.name}</Text>
      </View>
    );
  },
}));

jest.mock('expo-font', () => ({
  loadAsync: jest.fn(),
}));

describe('Navbar Component', () => {
  let mockToggleDropdown: jest.Mock;

  beforeEach(() => {
    jest.clearAllMocks();
    mockToggleDropdown = jest.fn();
    (useDropdown as jest.Mock).mockReturnValue({
      activeDropdown: null,
      toggleDropdown: mockToggleDropdown,
    });

    const mockedFontAwesome5 = require('@expo/vector-icons/FontAwesome5');
    mockedFontAwesome5.defaultProps = { solid: true };
  });

  it('renders Navbar correctly', () => {
    render(<Navbar />);

    expect(screen.getAllByTestId('bell-icon').length).toBeGreaterThan(0);
    expect(screen.getByTestId('profile-icon')).toBeTruthy();
  });

  it('toggles the notification dropdown on bell icon press', () => {
    render(<Navbar />);

    const bellIcons = screen.getAllByTestId('bell-icon');
    const bellIcon = bellIcons[0];

    fireEvent.press(bellIcon);

    expect(mockToggleDropdown).toHaveBeenCalledTimes(1);
    expect(mockToggleDropdown).toHaveBeenCalledWith('notifications');
  });

  it('renders NotificationDropdown when active', () => {
    (useDropdown as jest.Mock).mockReturnValue({
      activeDropdown: 'notifications',
      toggleDropdown: mockToggleDropdown,
    });

    render(<Navbar />);
    expect(screen.getByTestId('notification-dropdown')).toBeTruthy();
  });

  it('toggles the profile dropdown on profile icon press', () => {
    render(<Navbar />);

    const profileIcon = screen.getByTestId('profile-icon');
    fireEvent.press(profileIcon);

    expect(mockToggleDropdown).toHaveBeenCalledTimes(1);
    expect(mockToggleDropdown).toHaveBeenCalledWith('profile');
  });

  it('matches snapshot', () => {
    const { toJSON } = render(<Navbar />);
    expect(toJSON()).toMatchSnapshot();
  });
});
