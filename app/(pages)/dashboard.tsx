import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import DashboardWidgets from '../../components/features/dashboard/DashboardWidgets';
import StatusOverview from '../../components/features/dashboard/StatusOverview';
import NewestPracticesTable from '../../components/features/dashboard/NewestPracticesTable';
import { UseEnvironment } from '../../utils/environmentUtils';

const Dashboard: React.FC = () => {
  const { tailwind } = UseEnvironment();
  return (
    <ScrollView style={tailwind('p-4')}>
      <View style={tailwind('mb-6')}>
        <Text style={tailwind('text-2xl font-bold text-gray-800')}>
          Welcome Andrew!
        </Text>
        <Text style={tailwind('text-gray-600 mt-2')}>
          Nulla ut aliquam metus. Integer at diam sem. Nunc finibus nibh vel
          risus eleifend laoreet.
        </Text>
      </View>

      <DashboardWidgets />
      <StatusOverview />
      <NewestPracticesTable />
    </ScrollView>
  );
};

export default Dashboard;
