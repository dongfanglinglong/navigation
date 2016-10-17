import React, {  Component } from 'react';
import { AppRegistry, View,  Text} from 'react-native';




/**
 * ------------------ The Life-Cycle of a Composite Component ------------------
 *
 * - constructor: Initialization of state. The instance is now retained.
 *   - componentWillMount
 *   - render
 *   - [children's constructors]
 *   - [children's componentWillMount and render]
 *   - [children's componentDidMount]
 *   - componentDidMount
 *
 *     Update Phases:
 *     - componentWillReceiveProps (only called if parent updated)
 *     - shouldComponentUpdate
 *     - componentWillUpdate
 *       - render
 *       - [children's constructors or receive props phases]
 *     - componentDidUpdate
 *
 *   - componentWillUnmount
 *   - [children's componentWillUnmount]
 *   - [children destroyed]
 * - (destroyed): The instance is now blank, released by React and ready for GC.
 *
 * -----------------------------------------------------------------------------
 * I/ReactNativeJS: Running application "navigation" with appParams: {"initialProps":{},"rootTag":1}. __DEV__ === true, development-level warning are ON, performance optimizations are OFF
 * I/ReactNativeJS: constructor[0]
 * I/ReactNativeJS: componentWillMount[1]
 * I/ReactNativeJS: render[2]
 * I/ReactNativeJS: componentDidMount[3]
 * I/ReactNativeJS: componentWillUnmount[4]
 * -----------------------------------------------------------------------------
 */


  var index  = 0;

export default class LifeOfComponent extends Component {

  //  React.creatClass 才会执行 getInitialState() 方法
  // getInitialState(){
  //   console.log('getInitialState[' + index++ +']');
  //   return {
  //     teams: null,
  //   };
  // }

  /**
   * [constructor 0]
   * @param  {[type]} props [description]
   */
  constructor(props) {
    super(props);
    console.log('constructor[' + index++ +']');
    this.state = {};
  }
  /**
   * [componentWillMount 1]
   * @return {[type]} [description]
   */
  componentWillMount(){
     console.log('componentWillMount[' + index++ +']');
  }
  /**
   * [render 2]
   * @return {[type]} [description]
   */
  render() {
   console.log('render[' + index++ +']');
   return this.renderLoadingView();
  }

  /**
   * [componentDidMount 3]
   * @return {[type]} [description]
   */
  componentDidMount(){
    console.log('componentDidMount[' + index++ +']');
  }
  /**未执行*/
  componentDidUpdate(){
    console.log('componentDidUpdate[' + index++ +']');
  }

  /**
   * [componentWillUnmount 4]
   * @return {[type]} [description]
   */
  componentWillUnmount(){
    console.log('componentWillUnmount[' + index++ +']');
  }

  renderLoadingView() {
    return (
      <View >
        <Text>
          The Life-Cycle of a Composite Component
        </Text>
      </View>
    );
  }
}

AppRegistry.registerComponent('navigation', () => LifeOfComponent);
