// in src/customRoutes.js
import React from 'react';
import { Route } from 'react-router-dom';
import {
    PostList,
} from './posts';
import {
    UserList,
} from './users';
/* eslint-disable */
export default [
    <Route path="/posts/" component={PostList} />,
    <Route path="/users/" component={UserList} />,
];
