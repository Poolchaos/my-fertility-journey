import React from 'react';
import { View, Text } from 'react-native';
import { UseEnvironment } from '../../utils/environmentUtils';

const Patients: React.FC = () => {
  const { tailwind } = UseEnvironment();
  return (
    <View style={tailwind('p-4')}>
      <Text style={tailwind('text-2xl font-bold text-gray-800')}>
        Manage Patients
      </Text>
    </View>
  );
};

export default Patients;
