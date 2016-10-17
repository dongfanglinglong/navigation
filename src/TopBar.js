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
      naviBar: PropTypes.node.isRequired,
  }

  static get defaultProps() {
    return {
        naviTitle: "Default Title",
        naviIndex: 0
    }
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
    console.log('www',null ==  this.props.naviBar ? "this.props.naviBar=null" : 'this.props.naviBar!=null');
    this.props.navigator.pop();
    console.log('www',null ==  this.props.navigator ? "this.props.navigator=null" : 'thisnavigator!=null');

  }

  render() {
    return(
      <View style={styles.view}>
        <TouchableOpacity
            onPress={this._back()}
            style={styles.btnLeft}>
            <Image
              source={ this.props.naviIndex > 0 ?  require('./res/_nav_icon_back.png') : require('./res/_nav_icon_user.png')}
              style={styles.img}
            />
        </TouchableOpacity>

        <Text style={styles.title}>{this.props.naviTitle} [{this.props.naviIndex}] {this.props.naviBar.componentWillMount()}</Text>

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
