import React from 'react';
import { View, Text } from 'react-native';
import PieChart from '../../ui/PieChart';
import { UseEnvironment } from '../../../utils/environmentUtils';
import WidgetWrapper from '../../ui/WidgetWrapper';

const statusData = [
  { percentage: 24, label: 'Pending', color: '#FF966B' },
  { percentage: 56, label: 'Registered', color: '#54D62C' },
  { percentage: 20, label: 'Post Treatment', color: '#1890FF' },
];

const StatusOverview: React.FC = () => {
  const { tailwind } = UseEnvironment();

  return (
    <WidgetWrapper style={tailwind('mb-6 p-4')}>
      <View style={tailwind('flex-row flex-wrap justify-start -mx-3')}>
        {statusData.map((item, index) => (
          <View
            key={index}
            style={{
              ...tailwind('px-3 flex flex-row items-center justify-center'),
              minWidth: 200,
              flexBasis: '30%',
              flexGrow: 1,
            }}
          >
            <PieChart percentage={item.percentage} color={item.color} />
            <View style={tailwind('ml-6 flex-1')}>
              <Text
                style={[
                  tailwind('text-xl font-bold text-left mb-1'),
                  { color: '#414141' },
                ]}
              >
                {item.percentage}%
              </Text>
              <Text
                style={[
                  tailwind('text-gray-500 text-left text-sm'),
                  { color: '#747474' },
                ]}
              >
                {item.label}
              </Text>
            </View>
          </View>
        ))}
      </View>
    </WidgetWrapper>
  );
};

export default StatusOverview;
