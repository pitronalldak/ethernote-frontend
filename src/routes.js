import React from 'react';
import { Route, IndexRoute } from 'react-router';

import BaseComponent from './components/component';
import MainComponent from './components/main/component';
import DocComponent from './components/doc/component';

import NotFoundComponent from './components/notFound/component';

export const urls = {
    index: {
        path: '/'
    },
    doc: {
        path: 'doc/:id'
    }
};

export default (
    <Route>
        <Route path={urls.index.path} component={BaseComponent}>
            <IndexRoute component={MainComponent} />
            <Route path={urls.doc.path} component={DocComponent}/>
        </Route>
        <Route path="*" component={NotFoundComponent} />
    </Route>
);
