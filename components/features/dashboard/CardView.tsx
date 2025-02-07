import React from 'react';
import { View, Text, TouchableOpacity, Image, Switch } from 'react-native';
import PencilIcon from '../../../assets/images/pencil.svg';
import DeleteIcon from '../../../assets/images/trash.svg';
import { UseEnvironment } from '../../../utils/environmentUtils';

interface CardProps {
  row: {
    name: string;
    phone: string;
    email: string;
    date: string;
    active: boolean;
  };
  toggleStatus: () => void;
}

export const CardView: React.FC<CardProps> = ({ row, toggleStatus }) => {
  const { tailwind } = UseEnvironment();

  return (
    <View style={tailwind('p-4 mb-4 rounded-lg p-4')}>
      <Text style={tailwind('text-lg font-bold mb-2')}>{row.name}</Text>
      <Text style={tailwind('text-sm text-gray-600')}>{row.phone}</Text>
      <Text style={tailwind('text-sm text-gray-600')}>{row.email}</Text>
      <Text style={tailwind('text-sm text-gray-600 mb-2')}>
        Created: {row.date}
      </Text>
      <View style={tailwind('flex-row items-center justify-between')}>
        <View style={tailwind('flex-row items-center')}>
          <Switch
            value={row.active}
            onValueChange={toggleStatus}
            trackColor={{ false: '#ccc', true: '#CEE4E8' }}
            thumbColor={row.active ? '#67adb9' : '#fff'}
          />
          <Text style={tailwind('ml-2')}>
            {row.active ? 'Active' : 'Disabled'}
          </Text>
        </View>

        <View style={tailwind('flex-row')}>
          <TouchableOpacity style={tailwind('mr-3')}>
            <Image
              source={PencilIcon as any}
              style={{ width: 14, height: 14 }}
              tintColor="#67adb9"
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={DeleteIcon as any}
              style={{ width: 14, height: 14 }}
              tintColor="#67adb9"
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
