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
      title: this.state.title
    };
  }


  _back() {
    // this.props.navigator.pop();
  }

  render() {
    return(
      <View style={styles.view}>
        <TouchableOpacity
            onPress={this._back()}
            style={styles.btnLeft}>
            <Image
              source={ this.state.index > 0 ?  require('./res/_nav_icon_back.png') : require('./res/_nav_icon_user.png')}
              style={styles.img}
            />
        </TouchableOpacity>

        <View style={styles.titleView}>
          <Text style={{backgroundColor: 'skyblue', fontSize: 20, }}>{this.state.title} "kkkkk"</Text>
        </View>

        <TouchableOpacity
            onPress={this._back()}
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
    flexDirection: 'row', height: 60, alignItems:'center',  backgroundColor: '#cccccc',justifyContent:'space-between'
  },
  titleView: {
    flex:4, alignItems: 'center',
  },
  btnLeft: {
    flex:1,
    alignItems: 'center', justifyContent: 'flex-start', backgroundColor: 'powderblue'
  },
  btnRight: {
            flex:1,
    alignItems: 'center', justifyContent: 'center', backgroundColor: 'powderblue'
  },
  img: {
    width: 35, height: 35
  }
});

export default TopBar;