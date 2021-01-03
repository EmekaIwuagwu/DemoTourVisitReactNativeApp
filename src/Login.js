/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View , Image, TextInput, TouchableOpacity,Alert} from 'react-native';

class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
        user: '',
        password: ''
    };

    FunctionLogin = () =>
    {
        const {user} = this.state;
        const {password} = this.state;
        fetch('https://uncoiled-crust.000webhostapp.com/rest/login.php',{
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                user: user,
                password: password
              })
        }).then((response) =>response.json())
        .then((responseJson) => {
            if(responseJson === 'OK')
            {
                this.props.navigation.navigate('Announcements');
            }
            else
            {
                Alert.alert(responseJson);
            }
        }).catch((error) =>{
            console.error(error);
        });
    }
  }

  render() 
  {
      return (
      <View style={styles.container}>
        <Image source={{uri:'asset:/logo/f88afa24-3560-412d-9d22-7fe89ade93e2_200x200.png'}}
        style={styles.logo} />

        <Text style={{textAlign:'left',fontSize:40,color: '#009999'}}> Sign In</Text>
        <TextInput
        placeholder = "Username"
        onChangeText={user => this.setState({user})}
        style={styles.input}
        />

        <TextInput
        placeholder = "Password"
        onChangeText={password => this.setState({password})}
        style={styles.input}
        secureTextEntry={true} />

        <TouchableOpacity onPress={() => {FunctionLogin();}} style={styles.button}>
        <Text style={styles.loginbtn}> Login </Text>
         </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent :"center",
        alignItems:"center"
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

export default Login;