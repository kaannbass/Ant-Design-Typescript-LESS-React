import type { ColumnsType } from 'antd/es/table';
import { DataType, AddressType } from '../../types'

export const columns: ColumnsType<DataType> = [
    {
        title: 'Name',
        dataIndex: 'firstName',
        sorter: (a, b) => a.firstName.localeCompare(b.firstName),
        render: (text, record) => `${record.firstName} ${record.lastName}`,
    },
    {
        title: 'Address',
        dataIndex: 'address',
        sorter: (a, b) => a.address.address.localeCompare(b.address.address),
        render: (address: AddressType) => `${address.address}, ${address.city}, ${address.state}, ${address.country}`,
    },
    {
        title: 'Phone',
        dataIndex: 'phone',
        sorter: (a, b) => a.phone.localeCompare(b.phone),
    },
    {
        title: 'BirthDate',
        dataIndex: 'birthDate',
        sorter: (a, b) => new Date(a.birthDate).getTime() - new Date(b.birthDate).getTime(),
    },
    {
        title: 'Email',
        dataIndex: 'email',
        render: (text: string) => <a style={{ color: 'black' }} href={`mailto:${text}`}>{text}</a>,
    },
];