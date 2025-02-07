import React, { createContext, useContext, useState, useCallback } from 'react';

interface DropdownContextProps {
  activeDropdown: string | null;
  toggleDropdown: (dropdown: string) => void;
  closeDropdown: () => void;
}

const DropdownContext = createContext<DropdownContextProps | undefined>(
  undefined
);

export const DropdownProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleDropdown = useCallback((dropdown: string) => {
    setActiveDropdown((prev) => (prev === dropdown ? null : dropdown));
  }, []);

  const closeDropdown = useCallback(() => {
    setActiveDropdown(null);
  }, []);

  return (
    <DropdownContext.Provider
      value={{ activeDropdown, toggleDropdown, closeDropdown }}
    >
      {children}
    </DropdownContext.Provider>
  );
};

export const useDropdown = () => {
  const context = useContext(DropdownContext);
  if (!context) {
    throw new Error('useDropdown must be used within a DropdownProvider');
  }
  return context;
};
