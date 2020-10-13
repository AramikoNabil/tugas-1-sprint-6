import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';

import barIcon from '../assets/icon/taskbar.png';

class Home extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.headBarIcon}
          onPress={() => this.props.navigation.openDrawer()}>
          <Image source={barIcon} style={styles.barIcon} />
        </TouchableOpacity>

        <View>
          <Text style={styles.text}> </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 50,
  },
  headBarIcon: {
    marginTop: 20,
    marginLeft: 20,
    width: 30,
  },
  barIcon: {
    width: 30,
    height: 30,
  },
});

export default Home;
