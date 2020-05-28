import React from 'react';
import {render} from 'react-dom';
import {SimpleProxyCase} from './hoc-cases';
import {SimpleInheritCase} from './hoc-cases';
import {StyleCase} from './hoc-cases';
import {ConditionCase} from './hoc-cases';
import {HandlePropsCase} from './hoc-cases';
import {RefCase, RefButtonCase} from './hoc-cases';

render(
    <div>
        <SimpleProxyCase/>
        <SimpleInheritCase/>
        <StyleCase title={'Test title'}/>
        <ConditionCase showComponent={true}/>
        <HandlePropsCase/>
        <RefCase/>
        <RefButtonCase />
    </div>, document.getElementById('app')
);
