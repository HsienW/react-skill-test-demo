import React from 'react';
import {render} from 'react-dom';
// import {SimpleProxyCase} from './hoc-cases';
// import {SimpleInheritCase} from './hoc-cases';
// import {StyleCase} from './hoc-cases';
// import {ConditionCase} from './hoc-cases';
// import {HandlePropsCase} from './hoc-cases';
// import {RefCase, RefButtonCase} from './hoc-cases';
// import {ProxyControlStateCase, InheritControlStateCase} from './hoc-cases';
// import {LogCase} from './hoc-cases';
// import {TwoWayBindingCase} from './hoc-cases';
// import {TokenCustomHookCase} from './hook-cases';
// import {LogCustomHookCase} from './hook-cases';
import {InitCustomHookCase} from './hook-cases';

render(
    <div>
        <InitCustomHookCase/>
    </div>, document.getElementById('app')
);
