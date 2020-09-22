import React from 'react';
import AppNavBar from './components/AppNavBar';
import ProjectList from './components/ProjectList';

import { Provider } from 'react-redux';
import store from './store';

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <AppNavBar />
        <ProjectList />
      </div>
    </Provider>
  );
}

export default App;
