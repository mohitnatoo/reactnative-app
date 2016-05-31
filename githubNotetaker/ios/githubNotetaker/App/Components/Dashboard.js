import React, { Component } from 'react';
import Profile from './Profile.js';

import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight
} from 'react-native';

var styles = {
  container: {
    marginTop: 65,
    flex: 1
  },
  image: {
    height: 350
  },
  buttonText: {
    fontSize: 24,
    color: 'white',
    alignText: 'center'
  }
};

class Dashboard extends Component {

  makeBackground(buttonIndex){
    var obj = {
      flexDirection: 'row',
      alignSelf: 'stretch',
      justifyContent: 'center',
      flex: 1
    };

    if(buttonIndex === 0){
      obj.backgroundColor = '#48BBEC';
    } else if (buttonIndex === 1) {
      obj.backgroundColor = '#E77AAE';
    } else {
      obj.backgroundColor = '#758BF4';
    }

    return obj;
  }

  goToProfile(){
    this.props.navigator.push({
      title: `Profile`,
      component: Profile,
      passProps: {userInfo: this.props.userInfo}
    })
  }

  goToRepos(){

  }

  goToNotes(){

  }

  render(){
    return(
      <View style={styles.container}>
        <Image source={{uri: this.props.userInfo.avatar_url}} style={styles.image} />
        <TouchableHighlight
          style={this.makeBackground(0)}
          onPress={this.goToProfile.bind(this)}
          underlayColor="#88D4F5"
          >
          <Text style={styles.buttonText}> View Profile </Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={this.makeBackground(1)}
          onPress={this.goToRepos.bind(this)}
          underlayColor="#88D4F5"
          >
          <Text style={styles.buttonText}> View Repos </Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={this.makeBackground(2)}
          onPress={this.goToNotes.bind(this)}
          underlayColor="#88D4F5"
          >
          <Text style={styles.buttonText}> Add Notes </Text>
        </TouchableHighlight>
      </View>
    );
  }

}


module.exports = Dashboard;
