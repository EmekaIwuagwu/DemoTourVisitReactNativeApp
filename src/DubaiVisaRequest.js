/* eslint-disable prettier/prettier */
import React, {Component, useState} from 'react';
import {Platform , StyleSheet, Text, View , Image, TextInput, TouchableOpacity,Alert} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import {ScrollView} from 'react-native-gesture-handler';
import DatePicker from '@react-native-community/datetimepicker';

export default class DubaiVisaRequest extends Component {

    constructor(props){
        super(props);

        this.state ={
          FullName: '',
          passport_num: '',
          issue_date: '',
          expiry_date: '',
          phone : '',
          Address : ''
        }
    }

    state = {
        visaType :'pSel',
        date : new Date(),
    }

    selectDate = (date) =>{
        this.setState({date: date});
    }

    SubmitVisaApplication = () => {

      const { FullName }  = this.state ;
      const { passport_num }  = this.state ;
      const { issue_date }  = this.state ;
      const { expiry_date }  = this.state ;
      const { phone }  = this.state ;
      const { Address }  = this.state ;

      fetch('https://uncoiled-crust.000webhostapp.com/rest/insertDubaiVisaApp.php',{
          method: 'POST' , 
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            Fullname: FullName,
            passport_num: passport_num,
            issue_date : issue_date,
            expiry_date : expiry_date,
            phone : phone,
            Address, Address
              })
          }).then((response) => response.json())
          .then((responseJson) => {
            if(responseJson ==='Saved')
            {
              Alert.alert('Visa Application Submitted');
            }else
            {
              Alert.alert(responseJson);
            }
          }).catch((error) => {
            console.error(error);
          });
    }

  render() 
  {
      const { date } = this.state;
    return (
      <View>
        <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center',alignItems:'center' }}>
        <Picker style={{width:'85%', marginTop:15, marginLeft:20,marginRight:20, borderColor: '#009999', borderBottonWidth:1,borderRadius:9,alignSelf:'center'}}
        selectedValue={this.state.visaType}
        onValueChange={(itemValue,itemIndex) => this.setState({visaType:itemValue})}
        >
        <Picker.Item label="Select visa Type" value="pSel" />
        <Picker.Item label="Single Entry" value="sEntry" />
        <Picker.Item label="Long Term Single Entry" value="lSentry" />
        </Picker>
        <TextInput
        placeholder = "Full Name"
        onChangeText={FullName => this.setState({FullName})}
        style={styles.input}
        />

        <TextInput
        placeholder = "Passport #"
        onChangeText={passport_num => this.setState({passport_num})}
        style={styles.input}
        />

        <TextInput
        placeholder = "Passport Issue mm/dd/yyyy"
        onChangeText={issue_date => this.setState({issue_date})}
        style={styles.input}
        />

        <TextInput
        placeholder = "Passport Expiry mm/dd/yyyy"
        onChangeText={expiry_date => this.setState({expiry_date})}
        style={styles.input}
        />

        <TextInput
        placeholder = "Phone"
        onChangeText={phone => this.setState({phone})}
        style={styles.input}
        />

        <TextInput
            placeholder=" Address"
            numberOfLines = {6}
            multiline = {true}
            onChangeText={(Address) => this.setState({Address})}
            style={styles.input}
          />

        <TouchableOpacity onPress={() => {this.SubmitVisaApplication();}} style={styles.button}>
        <Text style={styles.loginbtn}> Submit Request </Text>
         </TouchableOpacity>

        </ScrollView>
      </View>
    );
  }
}


const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent :'center',
        alignItems:'center'
    },

    input:{
        width:300,
        margin:10,
        borderRadius:9,
        borderColor:'#009999',
        borderWidth: 2
    },

    button:{
        width:300,
        padding:10,
        borderRadius:5,
        backgroundColor:'#009999',
        alignItems: 'center'
    },

    loginbtn:{
        color:'#ffff'
    },

    logo:{
    width:150,
    height:150
    }
});