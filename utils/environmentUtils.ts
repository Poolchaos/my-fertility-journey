import { useWindowDimensions, Appearance } from 'react-native';
import { create } from 'tailwind-rn';
import utilities from '../tailwind.json';

export const UseEnvironment = () => {
  const dimensions = useWindowDimensions();
  const colorScheme = Appearance.getColorScheme() || 'light';

  const environment = {
    orientation:
      dimensions.width > dimensions.height
        ? ('landscape' as const)
        : ('portrait' as const),
    colorScheme,
    reduceMotion: false,
    width: dimensions.width,
    height: dimensions.height,
  };

  const tailwind = create(utilities, environment);

  return { environment, tailwind };
};
