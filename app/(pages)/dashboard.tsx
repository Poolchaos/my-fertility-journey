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

  const handleToggleStatus = (id: string) => {
    setPractices((prev) =>
      prev.map((practice) =>
        practice.id === id
          ? { ...practice, active: !practice.active }
          : practice
      )
    );
  };

  const handleEdit = (id: string) => {
    console.log(`Editing practice with ID: ${id}`);
  };

  const handleDelete = (id: string) => {
    setPractices((prev) => prev.filter((practice) => practice.id !== id));
    console.log(`Deleted practice with ID: ${id}`);
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
