// in src/App.js
import React from 'react';
import { Admin, Resource } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import { UserList } from './screens/users/users';

import {landing } from './screens/landing/landing';
import { API_URL } from './conf';
import { authProvider } from './services/auth/auth';


const dataProvider = jsonServerProvider(API_URL);
const App = () => (
  <Admin dashboard={landing} dataProvider={dataProvider} authprovider={authProvider}>
    <Resource name="users" list={UserList} />
  </Admin>
);

export default App;