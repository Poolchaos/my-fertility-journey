import React, { useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { UseEnvironment } from '../../utils/environmentUtils';
import { newestPracticesData } from '../../components/features/dashboard/newestPractices.data';
import { dashboardWidgetsData } from '../../components/features/dashboard/dashboardWidgets.data';
import DashboardWidgets from '../../components/features/dashboard/DashboardWidgets';
import StatusOverview from '../../components/features/dashboard/StatusOverview';
import NewestPractices from '../../components/features/dashboard/NewestPractices';

const Dashboard: React.FC = () => {
  const { tailwind } = UseEnvironment();
  const [practices, setPractices] = useState(newestPracticesData);

  const handleToggleStatus = (index: number) => {
    const updatedPractices = [...practices];
    updatedPractices[index].active = !updatedPractices[index].active;
    setPractices(updatedPractices);
  };

  const handleEdit = (index: number) => {
    console.log('Edit clicked for index:', index);
  };

  const handleDelete = (index: number) => {
    const updatedPractices = practices.filter((_, i) => i !== index);
    setPractices(updatedPractices);
  };

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

      <DashboardWidgets data={dashboardWidgetsData} />
      <StatusOverview />
      <NewestPractices
        data={practices}
        onToggleStatus={handleToggleStatus}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </ScrollView>
  );
};

export default Dashboard;
