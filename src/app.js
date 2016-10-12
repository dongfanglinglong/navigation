/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

 import React, { Component } from 'react';
 import {
   AppRegistry,
   StyleSheet,
   Text,
   View,
   Platform,
   TouchableOpacity,
   Navigator,
   Image
 } from 'react-native';

import Splash from './Splash';

const defaultRoute = {
  component: Splash
};

class navigation extends Component {
  _renderScene(route, navigator) {
    let DComponent = route.component;
    return (
      <DComponent {...route.params} navigator={navigator} />
    );
  }
  _renderNavBar() {
    const styles = {
      title: {
        flex: 1, flexDirection: 'row',textAlign: 'center', alignItems: 'center'
      },
      button: {
        flex: 1, width: 50, alignItems: 'center', justifyContent: 'center'
      },
      buttonText: {
        fontSize: 18, color: '#888', fontWeight: '400'
      },
      img: {
        width: 30, height: 30
      }
    }

    var routeMapper = {
      LeftButton(route, navigator, index, navState) {
        return (
          <TouchableOpacity
            onPress={() => navigator.pop()}
            style={styles.button}>
            <Image
              source={ index > 0 ?  require('./res/_nav_icon_back.png') : require('./res/_nav_icon_user.png')}
              style={styles.img}
            />
          </TouchableOpacity>
        );
      },

      RightButton(route, navigator, index, navState) {
        return (
          <TouchableOpacity
            // onPress={() => navigator.pop()}
            style={styles.button}>
            <Image
              source={require('./res/nav_icon_call.png')}
              style={styles.img}
            />
          </TouchableOpacity>
        );
      },

      Title(route, navigator, index, navState) {
        return (
          <View style={styles.title}>
            <Text style={styles.buttonText}>{route.title ? route.title : 'Splash'}</Text>
          </View>
        );
      }
    };

    return (
      <Navigator.NavigationBar
        style={{
          alignItems: 'center',
          backgroundColor: '#fff',
          shadowOffset:{
              width: 1,
              height: 0.5,
          },
          shadowColor: '#fff',
          shadowOpacity: 0.8,
          }}
        routeMapper={routeMapper}
      />
    );
  }
  render() {
    return (
      <Navigator
        initialRoute={defaultRoute}
        renderScene={this._renderScene}
        sceneStyle={{paddingTop: (Platform.OS === 'android' ? 60 : 74)}}
        navigationBar={this._renderNavBar()} />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('navigation', () => navigation);
