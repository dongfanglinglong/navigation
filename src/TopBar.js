// TopBar
import React, { Component,Console } from 'react';
import  {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';
const {PropTypes} = React;



export default class TopBar extends React.Component {

  static propTypes = {
      naviIndex : PropTypes.number.isRequired,
      naviTitle : PropTypes.string.isRequired,
      naviBar: PropTypes.object.isRequired,
  }

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     naviIndex: this.props.naviIndex,
  //     naviTitle: this.props.naviTitle
  //   };
  // }


  _back() {
    this.props.naviBar.pop();
    console.log(null ==  this.props.naviBar ? "this.props.naviBar=null" : 'this.props.naviBar!=null');
  }

  render() {
    return(
      <View style={styles.view}>
        <TouchableOpacity
            onPress={()=>this._back()}
            style={styles.btnLeft}>
            <Image
              source={ this.props.naviIndex > 0 ?  require('./res/_nav_icon_back.png') : require('./res/_nav_icon_user.png')}
              style={styles.img}
            />
        </TouchableOpacity>

        <View style={styles.titleView}>
          <Text style={{backgroundColor: 'skyblue', fontSize: 20, }}>{this.props.naviTitle} </Text>
        </View>

        <TouchableOpacity
            onPress={()=>this._back()}
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
