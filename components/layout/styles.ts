import { UseEnvironment } from '../../utils/environmentUtils';

const removeOpacity = (colorString: string | undefined) => {
  if (
    colorString &&
    (colorString.includes('var(--tw-bg-opacity') ||
      colorString.includes('var(--tw-text-opacity'))
  ) {
    return colorString
      .replace(/\s*\/ var\(--tw-bg-opacity,\s*1\)/, '')
      .replace(/\s*\/ var\(--tw-text-opacity,\s*1\)/, '');
  }
  return colorString;
};

export const getStyle = (className: string) => {
  const { tailwind } = UseEnvironment();
  const style = tailwind(className);
  return removeOpacity(
    (style.color || style.backgroundColor) as string | undefined
  );
};

export const getCustomStyles = (isActive: boolean) => {
  const { tailwind } = UseEnvironment();

  if (!tailwind) {
    console.error('tailwind function is not available in UseEnvironment hook.');
    return {
      backgroundColor: undefined,
      color: undefined,
      iconColor: undefined,
    };
  }

  const activeStyles = tailwind('bg-customActive text-customActiveText');
  const inactiveTextStyles = tailwind('text-customInactiveText');
  const inactiveIconStyles = tailwind('text-customIcon');

  const backgroundColor = isActive
    ? removeOpacity(activeStyles.backgroundColor as string | undefined)
    : undefined;
  const color = isActive
    ? removeOpacity(activeStyles.color as string | undefined)
    : removeOpacity(inactiveTextStyles.color as string | undefined);
  const iconColor = isActive
    ? removeOpacity(activeStyles.color as string | undefined)
    : removeOpacity(inactiveIconStyles.color as string | undefined);

  return {
    backgroundColor,
    color,
    iconColor,
  };
};
