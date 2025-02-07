import React from 'react';
import { View, Text } from 'react-native';
import { Svg, Circle, G } from 'react-native-svg';
import { UseEnvironment } from '../../utils/environmentUtils';

interface PieChartProps {
  percentage: number;
  color: string;
}

const PieChart: React.FC<PieChartProps> = ({ percentage, color }) => {
  const { tailwind } = UseEnvironment();
  const radius = 40;
  const strokeWidth = 8;
  const circumference = 2 * Math.PI * radius;
  const progress = (percentage / 100) * circumference;

  return (
    <View style={tailwind('items-center')}>
      <Svg width={90} height={90} viewBox="0 0 100 100">
        <G rotation="-90" origin="50,50">
          <Circle
            cx="50"
            cy="50"
            r={radius}
            stroke="#E4E4E4"
            strokeWidth={strokeWidth}
            fill="none"
          />
          <Circle
            cx="50"
            cy="50"
            r={radius}
            stroke={color}
            strokeWidth={strokeWidth}
            fill="none"
            strokeDasharray={circumference}
            strokeDashoffset={circumference - progress}
            strokeLinecap="round"
          />
        </G>
      </Svg>
      <Text style={[tailwind('absolute'), { top: 35 }]}>{percentage}%</Text>
    </View>
  );
};

export default PieChart;
