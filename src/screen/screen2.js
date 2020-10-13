import React, {Component} from 'react';
import {StyleSheet, View, TextInput, Text} from 'react-native';

export default class screen2 extends Component {
  constructor() {
    super();
    this.state = {
      SendData: '',
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.uwu}>
          <TextInput
            style={styles.input}
            placeholder="ini Password"
            onChangeText={(text) => this.setState({SendData: text})}
          />
        </View>
        <Text
          onPress={() =>
            this.props.navigation.navigate('Screen3', {
              Send: this.state.SendData,
            })
          }
          style={styles.send}>
          Kirim Data
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    margin: 10,
  },
  input: {
    marginLeft: 20,
  },
  uwu: {
    flexDirection: 'row',
    backgroundColor: 'yellowgreen',
  },
  send: {
    alignSelf: 'center',
    marginLeft: 140,
  },
});
