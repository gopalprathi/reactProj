import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/Login'
import EmployeeData from './components/EmployeeData';
import Clock from './components/Clock';
import LifeCycleMethods from './components/LifeCycleMethods'

function App() {
  return (
    <div className="App">
    <Login/>
      <h1>Emp Data</h1>
      <EmployeeData />
      <hr/>
      <p>Clock Component Example</p>
      <Clock />
      <hr/>
      <p>LifeCycle Method Example</p>
      <LifeCycleMethods myNumber='10'/>
    </div>
  );
}

export default App;
