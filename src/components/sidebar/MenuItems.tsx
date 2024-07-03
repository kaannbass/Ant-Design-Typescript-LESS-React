import { ContainerFilled, HomeFilled, TruckFilled, SettingFilled, RiseOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const menuItems = [
  {
    key: '1',
    icon: <HomeFilled />,
    label: <Link to="/">Tracking</Link>,
  },
  {
    key: '2',
    icon: <TruckFilled />,
    label: <Link to="/investing">TruckOut</Link>,
  },
  {
    key: '3',
    icon: <RiseOutlined />,
    label: <Link to="/rise">Rise</Link>,
  },
  {
    key: '4',
    icon: <ContainerFilled />,
    label: <Link to="/container">Container</Link>,
  },
  {
    key: '5',
    icon: <SettingFilled />,
    label: <Link to="/settings">Settings</Link>,
  },
];

export default menuItems;
