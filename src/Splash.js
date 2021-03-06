import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Dimensions
} from 'react-native';

import Login from './Login';

var {width, height} = Dimensions.get('window');// 屏幕宽度
console.log('w[' + width + '],h[' + height + ']');

export default  class Splash extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    setTimeout(()=>{this._openPage()}, 3000)
  }

  _openPage() {
    this.props.navigator.push({
      title: 'Login',
      component: Login
    })
  }
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', backgroundColor: '#FFFFFF' }}>
        <Image
          style={{width: width, height: height}}
          source={require('./res/splash_logo.png')}>

          <TouchableOpacity onPress={this._openPage.bind(this)}>
            <Text style={{ color: '#55ACEE' }}>Open New Page</Text>
          </TouchableOpacity>

        </Image>
      </View>
    );
  }
}

