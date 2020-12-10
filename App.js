/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { Provider } from 'react-redux'
import {MainApp} from './src/navigation';
import store from './src/redux/createStore'
const App = () => {
  return (
    <Provider store={store}>

    <MainApp/>
     </Provider>
  )
}

export default App;
