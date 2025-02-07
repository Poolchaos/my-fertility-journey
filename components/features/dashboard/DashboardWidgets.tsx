import React from 'react';
import { View, Text, Image } from 'react-native';
import { WidgetData } from './dashboardWidgets.data';
import { UseEnvironment } from '../../../utils/environmentUtils';
import WidgetWrapper from '../../ui/WidgetWrapper';
import LineChartIcon from '../../../assets/images/line-chart.svg';

interface DashboardWidgetsProps {
  data: WidgetData[];
}

const DashboardWidgets: React.FC<DashboardWidgetsProps> = ({ data }) => {
  const { tailwind } = UseEnvironment();

  return (
    <View style={tailwind('flex flex-row flex-wrap -mx-3')}>
      {data.map((item) => (
        <View
          key={item.name}
          style={{ ...tailwind('w-1/3 px-3 mb-6'), minWidth: 220 }}
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
                      { backgroundColor: item.iconBgColor },
                    ]}
                  >
                    <Image
                      source={LineChartIcon as any}
                      style={tailwind('w-12 h-12')}
                      tintColor={item.iconColor}
                    />
                  </View>
                  <Text style={tailwind('text-xs')}>
                    {item.changePercentage}
                  </Text>
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
                    { backgroundColor: item.widgetBgColor },
                  ]}
                >
                  <Image
                    source={item.widgetIcon as any}
                    style={tailwind('w-25 h-25')}
                    tintColor={item.widgetIconColor}
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
