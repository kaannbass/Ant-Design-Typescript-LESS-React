import { useState, useEffect } from 'react';
import { Input, Col, Row, Select, DatePicker } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import { setData } from '../../store/features/dataSlice';
import { fetchData } from '../../api/data';

import { setFilterCriteria } from '../../store/features/dataSlice';
const Filter = () => {
    const dispatch = useDispatch();

    const onSearch = (value: string) => {
        dispatch(setFilterCriteria(value)); 
    };
    const [users, setUsers] = useState<any[]>([]);
    const [emails, setEmails] = useState<any[]>([]);

    useEffect(() => {
        const fetchUsersData = async () => {
            try {
                const userData = await fetchData();

                const mappedUsers = userData.map((user: any) => ({
                    value: user.id,
                    label: `${user.firstName} ${user.lastName} ${user.maidenName}`,
                    key: user.id,
                }));

                const mappedEmails = userData.map((user: any) => ({
                    value: user.email,
                    label: user.email,
                    key: user.id,
                }));

                setUsers(mappedUsers);
                setEmails(mappedEmails);

                dispatch(setData(userData));
            } catch (error) {
                console.error('Error fetching users:', error);
            }
        };

        fetchUsersData();
    }, [dispatch]);

    const onChange = (value: string) => {
        console.log("selected:", value);
    };

    const onSelect = (value: string) => {
        console.log('search:', value);
    };

    return (
        <Row gutter={[16, 16]}>
            <Col xs={24} sm={24} md={12} lg={12}>
                <Row gutter={[16, 16]}>
                    <Col xs={24} sm={24} md={12} lg={6}>
                        <Select
                            style={{ width: '100%' }}
                            size="large"
                            variant="filled"
                            showSearch
                            className='custom-input'
                            placeholder="Select a person"
                            optionFilterProp="label"
                            onChange={onChange}
                            onSearch={onSelect}
                            options={users}
                        />
                    </Col>
                    <Col xs={24} sm={24} md={12} lg={6}>
                        <DatePicker style={{ width: '100%' }} className='custom-input' size="large" placeholder="Select a date" variant="filled" />
                    </Col>
                    <Col xs={24} sm={24} md={12} lg={9}>
                        <Select
                            style={{ width: '100%' }}
                            size="large"
                            variant="filled"
                            showSearch
                            className='custom-input'
                            placeholder="Select an email"
                            optionFilterProp="label"
                            onChange={onChange}
                            onSearch={onSearch}
                            options={emails}
                        />
                    </Col>
                </Row>
            </Col>
            <Col xs={24} sm={24} md={12} lg={12}>
                <Input className='custom-input' size="large" placeholder="Search..." suffix={<SearchOutlined />} variant="filled"    onChange={(e) => onSearch(e.target.value)} />
            </Col>
        </Row>
    );
};

export default Filter;
