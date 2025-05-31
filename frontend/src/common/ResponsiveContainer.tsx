import { Flex } from '@wordpress/components';
import React from 'react';

export default function ResponsiveContainer({ children }: React.PropsWithChildren<any>) {
    return (
        <Flex className="responsiveContainer"  align="center" justify="center" wrap={true} expanded={false}>
            {children}
        </Flex>
    );
}