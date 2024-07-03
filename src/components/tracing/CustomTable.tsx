import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Table } from 'antd';
import type { TablePaginationConfig } from 'antd/es/table';
import { RootState } from '../../store';
import { DataType, CustomTableProps } from '../../types';
import { columns } from './ColumnsData';

const CustomTable: React.FC<CustomTableProps> = () => {
    const users = useSelector((state: RootState) => state.data.users) as unknown as DataType[];
    const filterCriteria = useSelector((state: RootState) => state.data.filterCriteria);

    const filteredUsers = users.filter(user =>
        user.username.toLowerCase().includes(filterCriteria.toLowerCase()) ||
        user.phone.toLowerCase().includes(filterCriteria.toLowerCase()) ||
        user.birthDate.includes(filterCriteria) ||
        user.email.toLowerCase().includes(filterCriteria.toLowerCase()) ||
        user.address.address.toLowerCase().includes(filterCriteria.toLowerCase()) ||
        user.address.city.toLowerCase().includes(filterCriteria.toLowerCase()) ||
        user.address.state.toLowerCase().includes(filterCriteria.toLowerCase()) ||
        user.address.country.toLowerCase().includes(filterCriteria.toLowerCase()) ||
        user.address.postalCode.includes(filterCriteria)
    );
    const [pagination, setPagination] = useState<TablePaginationConfig>({
        current: 1,
        pageSize: 10,
        showSizeChanger: true,
        position: ['bottomCenter'],
        className: 'custom-pagination'
    });

    const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);

    const handleTableChange = (pagination: TablePaginationConfig) => {
        setPagination(pagination);
    };

    const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
        setSelectedRowKeys(newSelectedRowKeys);
    };

    const rowSelection = {
        selectedRowKeys,
        onChange: onSelectChange,
    };

    return (
        <div className="table-container">
            <Table<DataType>
                columns={columns}
                dataSource={filteredUsers.map((user, index) => ({ ...user, key: index }))}
                rowSelection={rowSelection}
                onChange={handleTableChange}
                pagination={pagination}
                scroll={{ x: 'max-content' }}
            />
        </div>
    );
};

export default CustomTable;
