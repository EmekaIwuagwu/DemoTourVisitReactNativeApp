/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {Picker} from '@react-native-picker/picker';

export default class FlightReservation extends Component {
  
  constructor(props)
  { 
      super(props);
      
      this.state ={
        from_area : '',
        to_area : '',
        passport_num :'',
        departure_date : '',
        return_date :'',
      }
  }
  
  state = {
    flightType: 'pSel2',
  };

  SubmitFlightReservation = () => {

    const { from_area }  = this.state ;
    const { to_area }  = this.state ;
    const { passport_num }  = this.state ;
    const { departure_date }  = this.state ;
    const { return_date }  = this.state ;

    fetch('https://uncoiled-crust.000webhostapp.com/rest/flightTicketReservation.php',{
        method: 'POST' , 
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from_area: from_area,
          to_area: to_area,
          passport_num : passport_num,
          departure_date : departure_date,
          return_date : return_date,
            })
        }).then((response) => response.json())
        .then((responseJson) => {
          if(responseJson ==='OK')
          {
            Alert.alert('Ticket Reserved');
          }else
          {
            Alert.alert(responseJson);
          }
        }).catch((error) => {
          console.error(error);
        });
  }

  render() {
    return (
      <View style={{borderColor: '#009999'}}>
        <ScrollView
          // eslint-disable-next-line react-native/no-inline-styles
          contentContainerStyle={{
            flexGrow: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <TextInput
            placeholder=" From"
            onChangeText={(from_area) => this.setState({from_area})}
            style={styles.input}
          />

          <TextInput
            placeholder=" To"
            onChangeText={(to_area) => this.setState({to_area})}
            style={styles.input}
          />

          <TextInput
            placeholder=" Passport #"
            onChangeText={(passport_num) => this.setState({passport_num})}
            style={styles.input}
          />

          <TextInput
            placeholder=" Departure Date mm-dd-yyyy"
            onChangeText={(departure_date) => this.setState({departure_date})}
            style={styles.input}
          />

          <TextInput
            placeholder=" Return Date mm-dd-yyyy"
            onChangeText={(return_date) => this.setState({return_date})}
            style={styles.input}
          />

          <Picker
            style={{
              width: '85%',
              height: 50,
              width: 298,
              borderColor: '#009999',
              borderRadius: 9,
            }}
            selectedValue={this.state.visaType}
            onValueChange={(itemValue, itemIndex) =>
              this.setState({visaType: itemValue})
            }>
            <Picker.Item label=" Select Flight type" value="pSel2" />
            <Picker.Item label=" Economy" value="economy" />
            <Picker.Item label=" Premium Economy" value="premiumeconomy" />
            <Picker.Item label=" Business" value="business" />
          </Picker>

          <TouchableOpacity
            onPress={() => {
              this.SubmitFlightReservation();
            }}
            style={styles.button}>
            <Text style={styles.loginbtn}> Submit Request </Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  input: {
    width: 300,
    margin: 10,
    borderRadius: 9,
    borderColor: '#009999',
    borderWidth: 2,
  },

  button: {
    width: 300,
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#009999',
    alignItems: 'center',
  },

  loginbtn: {
    color: '#ffff',
  },

  logo: {
    width: 150,
    height: 150,
  },
});
