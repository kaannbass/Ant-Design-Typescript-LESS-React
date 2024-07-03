import React from 'react';
import { Alert, Flex, Spin } from 'antd';

const Loading: React.FC = () => (
  <Flex gap="small" vertical>
    <Spin>
      <Alert
        message="Loading"
        description="Data in the table is loading, please wait."
        type="info"
      />
    </Spin>
  </Flex>
);

export default Loading;
