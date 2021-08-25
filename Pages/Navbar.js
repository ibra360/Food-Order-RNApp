import React from 'react';

import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import {StyleSheet, Text, View} from 'react-native';

export default function Navbar() {
  return (
    <View style={styles.navContainer}>
      <AntDesign style={styles.backIcon} size={30} name="arrowleft" />
      <Text style={styles.text}>Bunny Cookies</Text>
      <FontAwesome color="orange" name="opencart" size={20} />
    </View>
  );
}

const styles = StyleSheet.create({
  backIcon: {},
  text: {
    fontSize: 20,
    // color: 'orange',
  },
  navContainer: {
    // height: 40,
    alignItems: 'center',
    // borderWidth: 1,
    backgroundColor: 'white',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: 12,
    paddingVertical: 10,
  },
});
