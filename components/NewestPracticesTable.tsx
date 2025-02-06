import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  Image,
  Switch,
} from 'react-native';
import { Row } from 'react-native-table-component';
import { UseEnvironment } from '../utils/environmentUtils';
import WidgetWrapper from './WidgetWrapper';
import { CardView } from './layout/CardView';
import caretRight from '../assets/images/caret-right.svg';
import PencilIcon from '../assets/images/pencil.svg';
import TrashIcon from '../assets/images/trash.svg';

const tableData = [
  {
    name: 'Cape Fertility Clinic',
    phone: '+21 794 3956',
    email: 'info@capefertility.co.za',
    date: '04/10/2021',
    active: true,
  },
  {
    name: 'Cape Fertility Clinic',
    phone: '+21 794 3956',
    email: 'info@capefertility.co.za',
    date: '04/10/2021',
    active: true,
  },
  {
    name: 'Cape Fertility Clinic',
    phone: '+21 794 3956',
    email: 'info@capefertility.co.za',
    date: '04/10/2021',
    active: false,
  },
];

const NewestPracticesTable: React.FC = () => {
  const { tailwind } = UseEnvironment();
  const [data, setData] = useState(tableData);
  const { width } = useWindowDimensions();

  const toggleStatus = (index: number) => {
    const updatedData = [...data];
    updatedData[index].active = !updatedData[index].active;
    setData(updatedData);
  };

  const isMobileView = width < 1100;

  return (
    <WidgetWrapper style={tailwind('rounded-lg')}>
      <Text style={tailwind('text-lg font-bold px-4 pt-4')}>
        Newest Practices
      </Text>

      {isMobileView ? (
        <View style={tailwind('flex flex-wrap justify-between gap-x-4')}>
          {data.map((row, index) => (
            <CardView
              key={index}
              row={row}
              toggleStatus={() => toggleStatus(index)}
            />
          ))}
        </View>
      ) : (
        <View
          style={{
            ...tailwind('py-4 px-4 bg-white border-b'),
            borderColor: '#e5e8eb',
            width: '100%',
          }}
        >
          <Row
            data={[
              'Practice Name',
              'Tel No',
              'Email',
              'Date Created',
              'Status',
              'Actions',
            ]}
            style={{
              ...tailwind('py-3 px-4'),
              backgroundColor: '#F5F5F5',
              width: '100%',
            }}
            textStyle={{ ...tailwind('text-left') }}
            widthArr={[0, 0, 0, 120, 100, 50]}
          />

          {data.map((row, index) => (
            <Row
              key={index}
              data={[
                row.name,
                row.phone,
                row.email,
                row.date,
                <View style={tailwind('items-start')}>
                  <Switch
                    value={row.active}
                    onValueChange={() => toggleStatus(index)}
                    trackColor={{ false: '#ccc', true: '#67adb9' }}
                    thumbColor={'#fff'}
                  />
                </View>,
                <View style={tailwind('flex-row justify-end')}>
                  <TouchableOpacity style={tailwind('mr-3')}>
                    <Image
                      source={PencilIcon as any}
                      style={{ width: 14, height: 14 }}
                      tintColor="#67adb9"
                    />
                  </TouchableOpacity>

                  <TouchableOpacity>
                    <Image
                      source={TrashIcon as any}
                      style={{ width: 14, height: 14 }}
                      tintColor="#67adb9"
                    />
                  </TouchableOpacity>
                </View>,
              ]}
              style={{ ...tailwind('py-3 px-4 w-full') }}
              textStyle={{ ...tailwind('text-left') }}
              widthArr={[0, 0, 0, 120, 100, 50]}
            />
          ))}
        </View>
      )}

      {/* "See All" Button */}
      <TouchableOpacity style={tailwind('my-4 self-end flex flex-row mr-4')}>
        <Text style={[tailwind('text-blue-500'), { color: '#67adb9' }]}>
          See All
        </Text>

        <Image
          source={caretRight as any}
          style={{ width: 20, height: 20 }}
          tintColor="#67adb9"
        />
      </TouchableOpacity>
    </WidgetWrapper>
  );
};

export default NewestPracticesTable;
