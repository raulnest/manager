import React, {Component} from 'react';
import {Picker, Platform, Text, View } from 'react-native';
import { connect } from 'react-redux';
import { employeeUpdate } from '../actions';
import { CardSection, Input } from './common';


class EmployeeForm extends Component {
  render(){
    return(
     <View>
      <CardSection>
        <Input
          label="Name"
          placeholder="Jane"
          value={this.props.name}
          onChangeText={value => this.props.employeeUpdate({prop:'name', value})} // refactored from onChangeText={text => this.props.employeeUpdate({prop:'name', value:text})}
        />
      </CardSection>

      <CardSection>
        <Input
          label="Phone"
          placeholder="555-555-5555"
          value={this.props.phone}
          onChangeText={value => this.props.employeeUpdate({prop:'phone', value})}
        />
      </CardSection>

      <CardSection>
        <View style={styles.pickerContainer} >
          <Text style={styles.pickerText}>Shift</Text>
          <Picker
            style={styles.picker}
            selectedValue={this.props.shift}
            onValueChange={value => this.props.employeeUpdate({ prop: 'shift', value })}
          >
            <Picker.Item label='Monday' value='Monday' />
            <Picker.Item label='Tuesday' value='Tuesday' />
            <Picker.Item label='Wednesday' value='Wednesday' />
            <Picker.Item label='Thursday' value='Thursday' />
            <Picker.Item label='Friday' value='Friday' />
            <Picker.Item label='Saturday' value='Saturday' />
            <Picker.Item label='Sunday' value='Sunday' />
          </Picker>
        </View>
      </CardSection>
     </View>
    );
  }
}

const styles = {
  pickerText: {
    fontSize: 18,
    paddingLeft: 20,
    ...Platform.select({
      android: {
        flex: 1,
      }
    })
  },
  picker: {
    ...Platform.select({
      ios: {
        flex: 1
      },
      android: {
        color: '#000',
        paddingRight: 5,
        paddingLeft: 5,
        flex: 2,
      }
    })
  },
  pickerContainer: {
    ...Platform.select({
      ios: {
        flexDirection: 'column'
      },
      android: {
        height: 40,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
      }
    })
  }
}

const mapStateToProps = (state) => {
  const { name, phone, shift } = state.employeeForm;

  return { name, phone, shift };
};

export default connect(mapStateToProps, {employeeUpdate}) (EmployeeForm);
