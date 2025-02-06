import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import DashboardWidgets from '../../components/DashboardWidgets';
import StatusOverview from '../../components/StatusOverview';
import NewestPracticesTable from '../../components/NewestPracticesTable';
import { UseEnvironment } from '../../utils/environmentUtils';

const Dashboard: React.FC = () => {
  const { tailwind } = UseEnvironment();
  return (
    <ScrollView style={tailwind('p-4')}>
      {/* Section 1: Welcome */}
      <View style={tailwind('mb-6')}>
        <Text style={tailwind('text-2xl font-bold text-gray-800')}>
          Welcome Andrew!
        </Text>
        <Text style={tailwind('text-gray-600 mt-2')}>
          Nulla ut aliquam metus. Integer at diam sem. Nunc finibus nibh vel
          risus eleifend laoreet.
        </Text>
      </View>

      {/* Section 2: Widget Stats */}
      <DashboardWidgets />

      {/* Section 3: Status Overview */}
      <StatusOverview />

      {/* Section 4: Newest Practices Table */}
      <NewestPracticesTable />
    </ScrollView>
  );
};

export default Dashboard;
