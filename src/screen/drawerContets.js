import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

import Avatar from '../assets/image/contohAvatar.jpg';

const DrawerContents = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={Avatar} style={styles.Avatar} />
      </View>
      <View style={styles.User}>
        <Text style={styles.Username}>Aramiko Nabil</Text>
        <Text style={styles.Number}>+62 895408093800</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    height: 180,
    backgroundColor: '#50c6f1',
  },
  Avatar: {
    width: 80,
    height: 80,
    borderRadius: 50,
    marginTop: 10,
  },
  header: {},
  User: {
    marginTop: 20,
  },
  Username: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15,
  },
  Number: {
    color: 'white',
  },
});

export default DrawerContents;
