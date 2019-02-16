import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';
import EmployeeEdit from './components/EmployeeEdit';

import Home from './components/Home';

const RouterComponent = () => {
  return (
    <Router style={{ paddingTop: 65 }}>
      <Scene key="root" hideNavBar>
        <Scene key="auth">
          <Scene key="login" component={LoginForm} title="Please Login" initial/>
        </Scene>
        <Scene key="main">
          <Scene
          rightTitle="Add"
          onRight={() => { Actions.employeeCreate()}}
          key="home"
          component={Home}
          title="Credito"
          initial
          tabs
          />
          <Scene
            rightTitle="Add"
            onRight={() => { Actions.employeeCreate()}}
            key="employeeList1"
            component={EmployeeList}
            title="Employees"
          />
          <Scene
            key="employeeCreate"
            component={EmployeeCreate}
            title="Create Employee"
          />
          <Scene
            key="employeeEdit"
            component={EmployeeEdit}
            title="Edit Employee"
          />
        </Scene>
      </Scene>


    </Router>
  );
};


const styles = {
  routerStyle: {
    paddingTop:65
  }
};

export default RouterComponent;
