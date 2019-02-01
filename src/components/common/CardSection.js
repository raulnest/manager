import React from 'react';
import { View } from 'react-native';

const CardSection = (props) => {
  return (
    //the right most style overrides, in the below case props.style overrides the style  
      <View style={[styles.containerStyle, props.style]}>
        {props.children}
      </View>
  );
};

const styles = {
  containerStyle: {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#ddd',
    position: 'relative'
  }
};


export  { CardSection };
