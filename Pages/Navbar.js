import React from 'react';

import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

export default function Navbar(props) {
  const navigation = useNavigation();
  console.log(navigation.getCurrentRoute);
  return (
    <View style={styles.navContainer}>
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}>
        {navigation.getCurrentRoute.name !== 'Home' ?? (
          <AntDesign style={styles.backIcon} size={30} name="arrowleft" />
        )}
      </TouchableOpacity>
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
