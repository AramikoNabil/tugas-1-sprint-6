import React from 'react';
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  TextInput,
  Switch,
} from 'react-native';

class Login extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.fontTrouble}>Trouble logging in ?</Text>
        </View>
        <View>
          <Text style={styles.fontWelcome}>Welcome Back!</Text>
        </View>
        <View>
          <Text style={styles.fontEnter}>
            Enter your credentials to continue
          </Text>
        </View>

        <TextInput style={styles.usernameInput} placeholder="Username" />
        <TextInput
          style={styles.passwordInput}
          secureTextEntry={true}
          placeholder="Password"
        />

        <View>
          <Text style={styles.fontRemember}>Remember me next time</Text>
          <Switch />
        </View>
        <View style={styles.containerButton}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.props.navigation.navigate('RootDrawer')}>
            <Text
              style={styles.signUp}
              onPress={() => this.props.navigation.navigate('RootDrawer')}>
              LOGIN
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.doyou}>
          <Text>
            Don't Have an Account ?{' '}
            <Text
              onPress={() => this.props.navigation.navigate('Register')}
              style={styles.signUPacc}>
              Sign Up
            </Text>
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginRight: 20,
    marginLeft: 20,
  },
  fontTrouble: {
    alignSelf: 'flex-end',
    marginTop: 15,
    color: 'gray',
  },
  fontWelcome: {
    marginTop: 40,
    marginBottom: 10,
    fontWeight: 'bold',
    fontSize: 28,
    letterSpacing: 1,
  },
  fontEnter: {
    color: 'gray',
  },
  fontRemember: {
    fontSize: 12,
    marginTop: 20,
  },
  usernameInput: {
    height: 40,
    borderWidth: 1,
    borderTopColor: '#ffffff00',
    borderLeftColor: '#ffffff00',
    borderRightColor: '#ffffff00',
    borderBottomColor: 'silver',
    marginTop: 50,
  },
  passwordInput: {
    height: 40,
    borderWidth: 1,
    borderTopColor: '#ffffff00',
    borderLeftColor: '#ffffff00',
    borderRightColor: '#ffffff00',
    borderBottomColor: 'gray',
    marginTop: 30,
  },
  containerButton: {
    position: 'absolute',
    alignSelf: 'center',
  },
  button: {
    backgroundColor: 'deepskyblue',
    height: 50,
    width: 300,
    borderRadius: 30,
    justifyContent: 'center',
    marginTop: 380,
  },
  signUp: {
    color: 'white',
    fontWeight: 'bold',
    alignSelf: 'center',
    fontSize: 18,
  },
  doyou: {
    marginTop: 130,
    alignSelf: 'center',
  },
  signUPacc: {
    color: 'deepskyblue',
  },
});

export default Login;
