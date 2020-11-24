import React, { Component } from "react";
import { View, ActivityIndicator } from 'react-native';
import { WebView } from 'react-native-webview';
import EStyleSheet from 'react-native-extended-stylesheet';

export default class ViewWebSite extends Component {
    constructor(props) { 
        super(props);
        this.state = {
          alignsecond: false,
        };
        setTimeout(
          () =>
            this.setState({ align: 'flex-start' }, function() {
              this.setState({
                alignsecond: true,
              });
            }),
          5000
        );
      }

  render() {
    return (
      <View style={[sG.container]}>

        {this.state.alignsecond?null:(
          <View style={[sG.cont_100_x_100]}>
            <ActivityIndicator size="large" color="#0ea2ae" />
          </View>
        )}

        <WebView
          bounces={false}
          scrollEnabled={false} 
          source={{ uri: 'https://www.treinta.co/' }} />
      </View>
    );
  }
}

const sG = EStyleSheet.create({
  container: {
    flex: 1,
  },
  cont_100_x_100:{
    height:'100%',
    width:'100%',
    justifyContent: 'center',
    alignItems: 'center',
  }
});