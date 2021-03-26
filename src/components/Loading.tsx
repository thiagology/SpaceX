import React from 'react';
import { Card } from 'react-bulma-components';

export default function Loading() {
    return (
        <Card>
            <h1>Loading</h1>
            <Card.Image scr='../images/rocket_launch.gif'>
            </Card.Image>
        </Card>
    )
}
