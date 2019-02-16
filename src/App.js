import React, {Component} from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from '@firebase/app';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import LoginForm from './components/LoginForm';
import Router from './Router';

class App extends Component {

  componentWillMount(){
    // Initialize Firebase
    const config = {
      apiKey: "AIzaSyDnBqjhg5Ct9__HwfStbd4VaA2UebErCkg",
      authDomain: "manager-62c3f.firebaseapp.com",
      databaseURL: "https://credito-62c3f.firebaseio.com",
      projectId: "manager-62c3f",
      storageBucket: "manager-62c3f.appspot.com",
      messagingSenderId: "151289919723"
    };
    firebase.initializeApp(config);
  }

  render(){
    const store= createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (

      <Provider store={store}>
          <Router/>
      </Provider>

    );
  }
}


export default App;
