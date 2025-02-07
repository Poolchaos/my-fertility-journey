import { useState, useEffect } from 'react';
import { useWindowDimensions } from 'react-native';
import { breakpoints } from '../constants/Breakpoints';

const useSidebarState = () => {
  const { width } = useWindowDimensions();

  const [isSidebarOpen, setSidebarOpen] = useState(width >= breakpoints.md);

  useEffect(() => {
    if (width < breakpoints.md) {
      setSidebarOpen(false);
    } else {
      setSidebarOpen(true);
    }
  }, [width]);

  return { isSidebarOpen, setSidebarOpen, breakpoints, width };
};

export default useSidebarState;
