import StethoscopeIcon from '../../../assets/images/stethoscope.svg';
import TrolleyIcon from '../../../assets/images/trolley.svg';
import PlasterIcon from '../../../assets/images/plaster.svg';
import PaperPenIcon from '../../../assets/images/paper-pen.svg';
import BulbIcon from '../../../assets/images/bulb.svg';

export interface WidgetData {
  name: string;
  count: number;
  icon: any;
  iconBgColor: string;
  iconColor: string;
  changePercentage?: string;
  widgetIcon: any;
  widgetIconColor: string;
  widgetBgColor: string;
}

export const dashboardWidgetsData: WidgetData[] = [
  {
    name: 'Total Practices',
    count: 11,
    icon: StethoscopeIcon,
    iconBgColor: '#E3F8DD',
    iconColor: '#66DA42',
    changePercentage: '+15%',
    widgetIcon: StethoscopeIcon,
    widgetIconColor: '#578388',
    widgetBgColor: '#E4F7F9',
  },
  {
    name: 'Total Subscribers',
    count: 261,
    icon: TrolleyIcon,
    iconBgColor: '#E3F8DD',
    iconColor: '#66DA42',
    changePercentage: '+15%',
    widgetIcon: TrolleyIcon,
    widgetIconColor: '#578388',
    widgetBgColor: '#E4F7F9',
  },
  {
    name: 'Total Treatments',
    count: 135,
    icon: PlasterIcon,
    iconBgColor: '#E3F8DD',
    iconColor: '#66DA42',
    changePercentage: '+15%',
    widgetIcon: PlasterIcon,
    widgetIconColor: '#578388',
    widgetBgColor: '#E4F7F9',
  },
  {
    name: 'Total Consents',
    count: 135,
    icon: PaperPenIcon,
    iconBgColor: '#E3F8DD',
    iconColor: '#66DA42',
    changePercentage: '+15%',
    widgetIcon: PaperPenIcon,
    widgetIconColor: '#578388',
    widgetBgColor: '#E4F7F9',
  },
  {
    name: 'Total Consents Signed',
    count: 2159,
    icon: PaperPenIcon,
    iconBgColor: '#E3F8DD',
    iconColor: '#66DA42',
    changePercentage: '+15%',
    widgetIcon: PaperPenIcon,
    widgetIconColor: '#578388',
    widgetBgColor: '#E4F7F9',
  },
  {
    name: 'Total Fact Sheets Read',
    count: 2159,
    icon: BulbIcon,
    iconBgColor: '#E3F8DD',
    iconColor: '#66DA42',
    changePercentage: '+15%',
    widgetIcon: BulbIcon,
    widgetIconColor: '#578388',
    widgetBgColor: '#E4F7F9',
  },
];
