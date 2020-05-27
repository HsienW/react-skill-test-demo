import React from 'react';
import {render} from 'react-dom';
import {SimpleProxyCase} from './hoc-cases';
import {SimpleInheritCase} from './hoc-cases';
import {StyleCase} from './hoc-cases';

render(
    <div>
        <SimpleProxyCase/>
        <SimpleInheritCase/>
        <StyleCase title={'Test title'}/>
    </div>, document.getElementById('app')
);
