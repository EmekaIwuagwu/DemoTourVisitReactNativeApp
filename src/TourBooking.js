/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
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

export default class TourBooking extends Component {
    state = {
        tourPackage: 'pleaseSelpack',
        numTourPeeps : 'pleaseSelNum',
      };


      ShowUnderConstructionMessage = () =>{
        alert('Service is Currently unavailable.');
      }

    render() {
        return (
            <View>
                <ScrollView contentContainerStyle={{
            flexGrow: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
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
            <Picker.Item label=" Select Tour Package" value="pleaseSelpack" />
            <Picker.Item label=" Zanzibar Tour Package" value="zantour" />
            <Picker.Item label=" Rwanda Tour Package" value="rwandatour" />
            <Picker.Item label=" Nairobi Tour Package" value="nairobiTour" />
            <Picker.Item label=" Antananarivo Tour " value="madagascarTour" />
            <Picker.Item label=" Cape Verde Tour" value="capeverdeTour" />
          </Picker>

          <TextInput
            placeholder=" Full Name"
            onChangeText={(UserID) => this.setState({UserID})}
            style={styles.input}
          />

            <TextInput
            placeholder=" Passport #"
            onChangeText={(UserID) => this.setState({UserID})}
            style={styles.input}
          />

            <TextInput
            placeholder=" Expiry mm-dd-yyyy"
            onChangeText={(UserID) => this.setState({UserID})}
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
            <Picker.Item label=" Additional Passengers" value="pleaseSelNum" />
            <Picker.Item label=" 1" value="1" />
            <Picker.Item label=" 5+" value="5plus" />
            <Picker.Item label=" 10+" value="10plus" />
            <Picker.Item label=" 20+" value="20plus" />
        </Picker> 
            
        <TextInput
            placeholder=" Email"
            onChangeText={(UserID) => this.setState({UserID})}
            style={styles.input}
          />

        <TextInput
            placeholder=" Telephone"
            onChangeText={(UserID) => this.setState({UserID})}
            style={styles.input}
          />

        <TextInput
            placeholder=" Address"
            numberOfLines = {6}
            multiline = {true}
            onChangeText={(UserID) => this.setState({UserID})}
            style={styles.input}
          />

            <TouchableOpacity
            onPress={() => {
              this.ShowUnderConstructionMessage();
              
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