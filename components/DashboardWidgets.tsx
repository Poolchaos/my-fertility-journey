import React from 'react';
import { View, Text, Image } from 'react-native';
import { UseEnvironment } from '../utils/environmentUtils';
import WidgetWrapper from './WidgetWrapper';

import LineChartIcon from '../assets/images/line-chart.svg';
import StethoscopeIcon from '../assets/images/stethoscope.svg';
import TrolleyIcon from '../assets/images/trolley.svg';
import PlasterIcon from '../assets/images/plaster.svg';
import PaperPenIcon from '../assets/images/paper-pen.svg';
import BulbIcon from '../assets/images/bulb.svg';

const data = [
  { name: 'Total Practices', count: 11, icon: StethoscopeIcon },
  { name: 'Total Subscribers', count: 261, icon: TrolleyIcon },
  { name: 'Total Treatments', count: 135, icon: PlasterIcon },
  { name: 'Total Consents', count: 135, icon: PaperPenIcon },
  { name: 'Total Consents Signed', count: 2159, icon: PaperPenIcon },
  { name: 'Total Fact Sheets Read', count: 2159, icon: BulbIcon },
];

const DashboardWidgets: React.FC = () => {
  const { tailwind } = UseEnvironment();

  return (
    <View style={tailwind('flex flex-row flex-wrap -mx-3')}>
      {data.map((item, index) => (
        <View
          key={index}
          style={{ ...tailwind('w-1/3 px-3 mb-6'), minWidth: 220 }} // ✅ Ensures each item has min-width 220px
        >
          <WidgetWrapper style={tailwind('p-4')}>
            <View style={[tailwind('flex flex-row'), { color: '#414141' }]}>
              <View style={tailwind('flex-1')}>
                <Text style={tailwind('text-sm text-gray-500')}>
                  {item.name}
                </Text>
                <View style={tailwind('flex-row items-center mt-2 mb-2')}>
                  <View
                    style={[
                      tailwind(
                        'rounded-full w-24 h-24 flex items-center justify-center mr-1'
                      ),
                      {
                        backgroundColor: '#E3F8DD',
                      },
                    ]}
                  >
                    <Image
                      source={LineChartIcon as any}
                      style={tailwind('w-12 h-12')}
                      tintColor="#66DA42"
                    />
                  </View>
                  <Text style={tailwind('text-xs')}>+15%</Text>
                </View>
                <Text style={[tailwind('font-bold'), { fontSize: '30px' }]}>
                  {item.count}
                </Text>
              </View>

              <View style={tailwind('flex items-center justify-center')}>
                <View
                  style={[
                    tailwind(
                      'rounded-full w-64 h-64 flex items-center justify-center mr-1'
                    ),
                    {
                      backgroundColor: '#E4F7F9',
                    },
                  ]}
                >
                  <Image
                    source={item.icon as any}
                    style={tailwind('w-25 h-25')}
                    tintColor="#578388"
                  />
                </View>
              </View>
            </View>
          </WidgetWrapper>
        </View>
      ))}
    </View>
  );
};

export default DashboardWidgets;
