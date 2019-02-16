import React, {Component} from 'react';
import { View, Text, SafeAreaView, ScrollView, Dimensions, Image } from 'react-native';
import { createDrawerNavigator, DrawerItems} from 'react-navigation';
import { Card, CardSection } from './common';
import EmployeeList from './EmployeeList';
import EmployeeCreate from './EmployeeCreate';


class Home extends Component {

  render(){
    return(
      <AppDrawerNavigator/>
    );
  }
}

const CustomDrawerComponent = (props) => (
  <SafeAreaView style = {{ flex:1 }}>
    <View style={{height:150, backgroundcolor:'white', alignItems:'center', justifyContent:'center'}}>
      <Image source={require('../images/image1.jpeg')} style={{height:120, width:120, borderRadius:60}}/>
    </View>
    <ScrollView>
      <DrawerItems {...props} />
    </ScrollView>
  </SafeAreaView>
);

const AppDrawerNavigator = createDrawerNavigator({
  Home: EmployeeList,
  Add: EmployeeCreate,
},
{
  contentComponent:CustomDrawerComponent
}
);


export default Home;
