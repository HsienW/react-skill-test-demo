import React from 'react';
import {render} from 'react-dom';
import {SimpleProxy} from './hoc-cases';
import {SimpleInherit} from './hoc-cases';

render(
    <div>
        <SimpleProxy/>
        <SimpleInherit/>
    </div>, document.getElementById('app')
);
