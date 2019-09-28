// in src/App.js
import React from 'react';
import { Admin, Resource } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import { UserList } from './screens/users/users';
import { homePage } from './screens/home/home';
import { API_URL } from './conf';
import { authProvider } from './services/auth/auth';
import spanishMessages from 'ra-language-spanish';

const messages = {
  es: spanishMessages,
}

const i18nProvider = locale => messages[locale];

const dataProvider = jsonServerProvider(API_URL);
const App = () => (
  <Admin locale="es" i18nProvider={i18nProvider} dashboard={homePage} dataProvider={dataProvider} authProvider={authProvider}>
    <Resource name="users" list={UserList} />
  </Admin>
);

export default App;