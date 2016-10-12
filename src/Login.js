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
        <Image 
          style={{width:200,height:162,marginTop: 40,marginBottom: 10}}
          source={require('./res/icon_didi_logo.png')}
        />
        <Text>Didi Login</Text>

        <TextInput 
          maxLength={11}
          value={this.state.userName}
          onChangeText={userName => this.setState({ userName })}
          placeholder={'Enter your name'}
          style={{ height: 40, width: 250 }}
        />

        <TextInput 
          value={this.state.pswd}
          onChangeText={pswd => this.setState({ pswd })}
          placeholder={'Enter your password'}
          style={{ height: 40, width: 250 ,multiline :false}} 
          multiline = {false}
        />

        <Text>My age: {this.state.age ? this.state.age : 'Unknown'}</Text>
        <TouchableOpacity onPress={this._openPage.bind(this)}>
          <Text style={{ color: '#55ACEE' }}>Update my age</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Login;