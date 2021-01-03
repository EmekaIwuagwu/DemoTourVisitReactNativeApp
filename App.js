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

import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';
import Icon from 'react-native-vector-icons/SimpleLineIcons';

import Splash from './src/Splash';
import DubaiVisaRequest from './src/DubaiVisaRequest';
import HotelReserveRequest from './src/HotelReserveRequest';
import Login from './src/Login';
import FlightReservation from './src/FlightReservation';
import TourBooking from './src/TourBooking';
import Announcements from './src/Announcements';

logoutApp = () => {
  this.props.navigation.navigate('Login');
};


const AnnouncementsNavigator = createStackNavigator({
  'Announcements': {
    screen: Announcements,
    navigationOptions: ({navigation}) => ({
      headerLeft: () => (
        <TouchableOpacity
          style={{marginLeft: 20}}
          onPress={() => navigation.toggleDrawer()}>
          <Icon name="menu" size={12} />
        </TouchableOpacity>
      ),
    }),
  },
});

const FlightReservNavigator = createStackNavigator({
  'Flight Reservation': {
    screen: FlightReservation,
    navigationOptions: ({navigation}) => ({
      headerLeft: () => (
        <TouchableOpacity
          style={{marginLeft: 20}}
          onPress={() => navigation.toggleDrawer()}>
          <Icon name="menu" size={12} />
        </TouchableOpacity>
      ),
    }),
  },
});

const TourismBookingNavigator = createStackNavigator({
  'Tour Booking': {
    screen: TourBooking,
    navigationOptions: ({navigation}) => ({
      headerLeft: () => (
        <TouchableOpacity
          style={{marginLeft: 20}}
          onPress={() => navigation.toggleDrawer()}>
          <Icon name="menu" size={12} />
        </TouchableOpacity>
      ),
    }),
  },
});

const LogoutNavigator = createStackNavigator({
  'Log In': {
    screen: Login,
    navigationOptions: ({navigation}) => ({
      headerLeft: () => (
        <TouchableOpacity
          style={{marginLeft: 20}}
          onPress={() =>
            this.props.navigation.navigate('Login')
          }></TouchableOpacity>
      ),
    }),
  },
});

const DubaiVisaReqNavigator = createStackNavigator({
  'Dubai Visa Request': {
    screen: DubaiVisaRequest,
    navigationOptions: ({navigation}) => ({
      headerLeft: () => (
        <TouchableOpacity
          style={{marginLeft: 20}}
          onPress={() => navigation.toggleDrawer()}>
          <Icon name="menu" size={12} />
        </TouchableOpacity>
      ),
    }),
  },
});


const DrawerNavigator = createDrawerNavigator({
  Announcements: {
    navigationOptions: {
      drawerIcon: (
        <Image
          source={{uri: 'asset:/icons/megaphone.png'}}
          style={{width: 21, height: 21}}
        />
      ),
      drawerLabel: 'Announcements',
    },
    screen: AnnouncementsNavigator,
  },

  DubaiVisaRequest: {
    navigationOptions: {
      drawerIcon: (
        <Image
          source={{uri: 'asset:/icons/web.png'}}
          style={{width: 21, height: 21}}
        />
      ),
      drawerLabel: 'Dubai Visas',
    },
    screen: DubaiVisaReqNavigator,
  },

  TourBooking: {
    navigationOptions: {
      drawerIcon: (
        <Image
          source={{uri: 'asset:/icons/travel.png'}}
          style={{width: 21, height: 21}}
        />
      ),
      drawerLabel: 'Tour Booking',
    },
    screen: TourismBookingNavigator,
  },

  FlightReservRequest: {
    navigationOptions: {
      drawerIcon: (
        <Image
          source={{uri: 'asset:/icons/plane.png'}}
          style={{width: 21, height: 21}}
        />
      ),
      drawerLabel: 'Flight Request',
    },
    screen: FlightReservNavigator,
  },

  Logout: {
    navigationOptions: {
      drawerIcon: (
        <Image
          source={{uri: 'asset:/icons/logout.png'}}
          style={{width: 21, height: 21}}
        />
      ),
      drawerLabel: 'Logout',
    },
    screen: LogoutNavigator,
  },
});

const AppSwitchNavigator = createSwitchNavigator(
  {
    Splash: {screen: Splash},
    Login: {screen: Login},
    Drawer: {screen: DrawerNavigator},
  },
  {
    initialRouteName: 'Splash',
  },
);

const App = createAppContainer(AppSwitchNavigator);

export default App;
