// TopBar
// 
import React, { Component } from 'react';
import  {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image
} from 'react-native';

class TopBar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      title: ''
    };
  }


  _back() {
    this.props.navigator.pop();
  }

  render() {
    return(
      <View style={styles.view}>
        <TouchableOpacity
            onPress={() => _back()}
            style={styles.btnLeft}>
            <Image
              source={ this.state.index > 0 ?  require('./res/_nav_icon_back.png') : require('./res/_nav_icon_user.png')}
              style={styles.img}
            />
        </TouchableOpacity>

        <Text style={styles.title}>{route.title}</Text>

        <TouchableOpacity
            onPress={() => _back()}
            style={styles.btnRight}>
            <Image
              source={require('./res/nav_icon_call.png')}
              style={styles.img}
            />
        </TouchableOpacity>

      </View>
      );

  }

}

const styles = StyleSheet.create({
  view:{
    flex: 1, flexDirection: 'row',height: 60
  },
  title: {
    flex: 1,    alignItems: 'center',    justifyContent: 'center'
  },
  btnLeft: {
     flex: 1, width: 30, height: 30, alignItems: 'center', justifyContent: 'center'
  },
  btnRight: {
    flex: 1, width: 30, height: 30, alignItems: 'center', justifyContent: 'center'
  },
  img: {
    width: 30, height: 30
  }
});

export default TopBar;