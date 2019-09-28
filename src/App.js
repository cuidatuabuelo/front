// in src/App.js
import React from 'react';
import { Admin, Resource } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import { UserList } from './screens/users/users';
import {landing } from './screens/landing/landing';

const dataProvider = jsonServerProvider('http://jsonplaceholder.typicode.com');
const App = () => (

  <Admin dashboard={landing}  dataProvider={dataProvider}>
    <Resource name="users" list={UserList} />
  </Admin>
  
);
export default App;   