import React, { Component } from 'react';
import { AppRegistry, StyleSheet, FlatList, Text, View, Alert, ActivityIndicator, Platform} from 'react-native';

export default class Announcements extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
    return fetch('https://uncoiled-crust.000webhostapp.com/rest/values.php')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          isLoading: false,
          dataSource: responseJson
        }, function() {
          // In this block you can do something with new state.
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  FlatListItemSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: "100%",
          backgroundColor: "#607D8B",
        }}
      />
    );
  }
  GetFlatListItem (information) {
  Alert.alert(information);
  }

  render() {
    if (this.state.isLoading) {
        return (
          <View style={{flex: 1, paddingTop: 20}}>
            <ActivityIndicator />
          </View>
        );
      }
    return (
      <View>
          
       <FlatList
       data={ this.state.dataSource }
       ItemSeparatorComponent = {this.FlatListItemSeparator}
       renderItem={({item}) => <Text style={styles.FlatListItemStyle} onPress={this.GetFlatListItem.bind(this, item.information)} > {item.information} </Text>}
       keyExtractor={(item, index) => {
        return item.id;
      }}  
      />
      </View>
    );
  }
}


const styles = StyleSheet.create({
    MainContainer :{ 
    justifyContent: 'center',
    flex:1,
    margin: 10,
    paddingTop: (Platform.OS === 'ios') ? 20 : 0,
    },
     
    FlatListItemStyle: {
        padding: 10,
        fontSize: 15,
        height: 200,
      },
     
    });