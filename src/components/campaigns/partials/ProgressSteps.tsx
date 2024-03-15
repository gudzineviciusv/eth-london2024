import React from 'react';

import {Col, Row, Steps} from 'antd';

interface ProgressStepsProps {
    step: number;
}

const ProgressSteps: React.FC<ProgressStepsProps> = ({step}) => {
    return (
        <>
            <Row>
                <Col span={12} offset={6}>
                    <Steps
                        current={step - 1}
                        items={[
                            {
                                title: 'Stage 1',
                                description: 'Create a Campaign',
                            },
                            {
                                title: 'Stage 2',
                                description: 'Add to Marketplace',
                            },
                        ]}
                    />
                </Col>
            </Row>
        </>
    );
};

export default ProgressSteps;
