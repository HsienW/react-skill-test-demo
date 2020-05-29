import React from 'react';
import {render} from 'react-dom';
import {SimpleProxyCase} from './hoc-cases';
import {SimpleInheritCase} from './hoc-cases';
import {StyleCase} from './hoc-cases';
import {ConditionCase} from './hoc-cases';
import {HandlePropsCase} from './hoc-cases';
import {RefCase, RefButtonCase} from './hoc-cases';
import {ProxyControlStateCase, InheritControlStateCase} from './hoc-cases';
import {LogCase} from './hoc-cases';
import {TwoWayBindingCase} from './hoc-cases';

render(
    <div>
        <SimpleProxyCase/>
        <SimpleInheritCase/>
        <StyleCase title={'Test title'}/>
        <ConditionCase showComponent={true}/>
        <HandlePropsCase/>
        <RefCase/>
        <RefButtonCase/>
        <ProxyControlStateCase/>
        <InheritControlStateCase checkProps={'I am props value'}/>
        <LogCase/>
        <TwoWayBindingCase/>
    </div>, document.getElementById('app')
);
