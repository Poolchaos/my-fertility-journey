import React from 'react';
import { Slot } from 'expo-router';
import { DropdownProvider } from '../context/DropdownProvider';
import Layout from '../components/layout/Layout';

export default function RootLayout() {
  return (
    <DropdownProvider>
      <Layout>
        <Slot />
      </Layout>
    </DropdownProvider>
  );
}
