import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  Image,
  Switch,
} from 'react-native';
import { Row } from 'react-native-table-component';
import { CardView } from './CardView';
import WidgetWrapper from '../../ui/WidgetWrapper';
import { PracticeData } from './newestPractices.data';
import caretRight from '../../../assets/images/caret-right.svg';
import PencilIcon from '../../../assets/images/pencil.svg';
import TrashIcon from '../../../assets/images/trash.svg';
import { UseEnvironment } from '../../../utils/environmentUtils';

interface NewestPracticesProps {
  data: PracticeData[];
  onToggleStatus: (id: string) => void;
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
}

const NewestPractices: React.FC<NewestPracticesProps> = ({
  data,
  onToggleStatus,
  onEdit,
  onDelete,
}) => {
  const { tailwind } = UseEnvironment();
  const { width } = useWindowDimensions();

  const isMobileView = width < 1100;

  const renderTable = () => (
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
          key={row.id || `row-${index}`} // ✅ Use unique `id` or fallback to index
          data={[
            row.name,
            row.phone,
            row.email,
            row.date,
            <View style={tailwind('items-start')}>
              <Switch
                testID={`toggle-switch-${row.id || index}`}
                value={row.active}
                onValueChange={() => onToggleStatus(row.id || index.toString())}
                trackColor={{ false: '#ccc', true: '#67adb9' }}
                thumbColor={'#fff'}
              />
            </View>,
            <View style={tailwind('flex-row justify-end')}>
              <TouchableOpacity
                testID={`edit-button-${row.id || index}`}
                style={tailwind('mr-3')}
                onPress={() => onEdit(row.id || index.toString())}
              >
                <Image
                  source={PencilIcon as any}
                  style={{ width: 14, height: 14 }}
                  tintColor="#67adb9"
                />
              </TouchableOpacity>

              <TouchableOpacity
                testID={`delete-button-${row.id || index}`}
                onPress={() => onDelete(row.id || index.toString())}
              >
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
  );

  const renderCards = () => (
    <View style={tailwind('flex flex-wrap justify-start flex-row')}>
      {data.map((row, index) => (
        <CardView
          key={row.id || `card-${index}`}
          row={row}
          toggleStatus={() => onToggleStatus(row.id || index.toString())}
          onEdit={() => onEdit(row.id || index.toString())}
          onDelete={() => onDelete(row.id || index.toString())}
        />
      ))}
    </View>
  );

  return (
    <WidgetWrapper style={tailwind('rounded-lg')}>
      <Text style={tailwind('text-lg font-bold px-4 pt-4')}>
        Newest Practices
      </Text>
      {isMobileView ? renderCards() : renderTable()}
      <TouchableOpacity
        testID="see-all-button"
        style={tailwind('my-4 self-end flex flex-row mr-4')}
      >
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

export default NewestPractices;
