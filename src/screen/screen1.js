import React, {Component} from 'react';
import {View, TouchableOpacity, StyleSheet, Text} from 'react-native';

export default class screen1 extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.Button}>
          <Text
            style={styles.Text}
            onPress={() => this.props.navigation.navigate('Screen2')}>
            Pindah ke Screen Top Tab
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  Button: {
    height: 50,
    justifyContent: 'center',
    backgroundColor: 'aqua',
    alignItems: 'center',
  },
});
