import React from 'react';
import { Layout, Menu, Image } from 'antd';
import menuItems from './MenuItems';
import Logo from '../../assets/Logo.png';

const { Sider } = Layout;

interface SidebarProps {
  collapsed: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ collapsed }) => {
  return (
    <Sider
      trigger={null}
      collapsible
      collapsed={collapsed}
      breakpoint="lg"
      className="custom-sider"
    >
      <div className="logo-container">
        <Image
          width={100}
          src={Logo}
          preview={false}
        />
      </div>
      <Menu className='custom-sider' mode="inline" defaultSelectedKeys={['1']} items={menuItems} />
    </Sider>
  );
};

export default Sidebar;
