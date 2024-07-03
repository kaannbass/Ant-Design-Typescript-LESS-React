import React, { useState } from 'react';
import { Layout, theme, Grid, Drawer } from 'antd';
import { Header, RouterNameText, Sidebar } from '../components';
import { Outlet } from 'react-router-dom';

const { Content } = Layout;
const { useBreakpoint } = Grid;

const CustomLayout: React.FC = () => {
    const [collapsed, setCollapsed] = useState(false);
    const [drawerOpen, setDrawerOpen] = useState(false);
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();
    const screens = useBreakpoint();

    const toggleCollapse = () => setCollapsed(!collapsed);
    const toggleDrawer = () => setDrawerOpen(!drawerOpen);

    let drawerWidth: number | string = 256;
    switch (true) {
        case screens.xs:
            drawerWidth = '44.95%';
            break;
        case screens.sm:
            drawerWidth = '21.5%';
            break;
        case screens.md:
            drawerWidth = 320;
            break;
        default:
            drawerWidth = 256;
            break;
    }
    return (
        <Layout style={{ minHeight: '100vh' }}>
            {screens.lg ? (
                <Sidebar collapsed={collapsed} />
            ) : (
                <Drawer
                    title="Menu"
                    placement="left"
                    closable={true}
                    onClose={toggleDrawer}
                    open={drawerOpen}
                    styles={{ body: { padding: 0 } }}
                    width={drawerWidth}
                >
                    <Sidebar collapsed={false} />
                </Drawer>
            )}
            <Layout>
                <Header
                    collapsed={collapsed}
                    onToggle={toggleCollapse}
                    drawerOpen={drawerOpen}
                    onDrawerToggle={toggleDrawer}
                />
                <RouterNameText />
                <Content
                    style={{
                        margin: '15px 16px',
                        padding: 24,
                        minHeight: 280,
                        background: colorBgContainer,
                        borderRadius: borderRadiusLG,
                    }}
                >
                    <Outlet />
                </Content>
            </Layout>
        </Layout>
    );
};

export default CustomLayout;
