import React from 'react';
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
} from 'react-native';

class Register extends React.Component {
  constructor() {
    super();
    this.state = {
      nama: 'bahrun',
      kelas: 'tk',
    };
  }

  render() {
    return (
      <KeyboardAvoidingView
        behavior="position"
        style={styles.container}
        enabled={this.state.setenableShift}>
        <View>
          <View>
            <Text style={styles.fontTrouble}>Trouble Sign Up ?</Text>
          </View>

          <View>
            <Text style={styles.fontWelcome}>Welcome!</Text>
            <Text>{this.state.nama}</Text>
          </View>

          <View>
            <TextInput
              style={styles.styleInput}
              placeholder="Name"
              onChangeText={(text) => this.setState({nama: text})}
            />
            <TextInput
              style={styles.styleInput}
              placeholder="Email"
              keyboardType="email-address"
              onFocus={() => this.setState({setenableShift: false})}
            />
            <TextInput
              style={styles.styleInput}
              placeholder="Password"
              secureTextEntry={true}
              onFocus={() => this.setState({setenableShift: true})}
            />
            <TextInput
              style={styles.styleInput}
              secureTextEntry={true}
              placeholder="Re-Enter Password"
              onFocus={() => this.setState({setenableShift: true})}
            />
          </View>

          <View style={styles.containerButton}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => console.log('Under Development')}>
              <Text
                style={styles.signUp}
                onPress={() => console.log('Under Development')}>
                SIGN UP
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
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

  styleInput: {
    height: 40,
    borderWidth: 1,
    borderTopColor: '#ffffff00',
    borderLeftColor: '#ffffff00',
    borderRightColor: '#ffffff00',
    borderBottomColor: 'silver',
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
    marginTop: 450,
  },
  signUp: {
    color: 'white',
    fontWeight: 'bold',
    alignSelf: 'center',
    fontSize: 18,
  },
});

export default Register;
