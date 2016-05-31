import React, {Component} from 'react';

import {
  Text,
  View,
  WebView,
  StyleSheet
} from 'react-native';

var styles = StyleSheet.create({
  container: {
    flex: 1,
    color: "#F6F6EF",
    flexDirection: 'column'
  }
});

class Web extends Component {
  render(){
    return (
      <View style={styles.container}>
        < WebView source={{uri: this.props.url}} />
      </View>
    );
  }
}

Web.propTypes = {
  url: React.PropTypes.string.isRequired
};

module.exports = Web;
