import React, {
  Component
} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image
} from 'react-native';

import Welcome from './Welcome';
import TopBar from './TopBar';



class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: null,
      age: null,

      userName: null,
      pswd: null,
    }
  }
  _openPage() {
    this.props.navigator.push({
      component: Welcome,
      params: {
        name: this.state.name,
        age: this.state.age,
        changeMyAge: (age) => {
          this.setState({
            age
          })
        }
      }
    })
  }
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', backgroundColor: '#FFFFFF' }}>

        <TopBar naviIndex= {1} naviTitle='LOGIN' naviBar={this.props.navigator}/>

        <Image 
          style={{width:200,height:162,marginTop: 40,marginBottom: 10}}
          source={require('./res/icon_didi_logo.png')}
        />
        <Text>Didi Login</Text>

        <TextInput
          maxLength={11}
          keyboardType={'numeric'}
          value={this.state.userName}
          onChangeText={userName => this.setState({ userName })}
          placeholder={'Enter your name'}
          style={{ height: 40, width: 250 }}
        />

        <TextInput
          value={this.state.pswd}
          onChangeText={pswd => this.setState({ pswd })}
          placeholder={'Enter your password'}
          style={{ height: 40, width: 250 }}
          secureTextEntry = {true}
        />

        <Text>Name: [{this.state.userName}],Pwd: [{this.state.pswd}]</Text>

        <TouchableOpacity onPress={this._openPage.bind(this)}>
          <Text style={{
              flex: 1,textAlign: 'center', textAlignVertical :'center',borderRadius: 5,overflow:'hidden',
              color: '#55ACEE' ,backgroundColor : '#FFCC00',width: 250 , height : 30, marginTop:20}
            }
          > Login </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Login;