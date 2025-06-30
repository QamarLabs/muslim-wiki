import { Card, CardBody, Flex } from '@wordpress/components';
import React from 'react';

export default function ResponsiveContainer({ children, extraClasses }: React.PropsWithChildren<any>) {
    return (
        <Flex 
            className={"responsiveContainer" + (extraClasses ? ` ${extraClasses}` : "")} 
            align="center" 
            justify="center" 
            wrap={true} 
            expanded={false}
        >
            {children}
        </Flex>
    );
}

export function CommonWikiPageTextContainer({ children, ...containerProps }: React.PropsWithChildren<any>) {
    return (
        <Flex 
            className='responsiveTextContainer' 
            direction="column" 
            align="center" 
            justify="center" 
            style={{ minHeight: "100vh", textAlign: 'left' }} 
            {...containerProps}
        >
            {children},
        </Flex>
    );
}

export function CommonWikiPageGridBox({ children, ...containerProps }: React.PropsWithChildren<any>) {
    return (
        <Card {...containerProps}>
            <CardBody className='containerWikiPageGridBox'>
                {children}

            </CardBody>
        </Card>
    );
}