import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import Navbar from './Navbar';

export default function SingleItem({navigation}) {
  return (
    <View>
      <View style={styles.center}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('MenuList');
          }}
          style={styles.button}>
          <Text style={{color: 'white', fontSize: 18}}>
            Search for Bunny Cookies
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  pName: {
    // borderWidth:1,
    fontSize: 25,
    color: 'orange',
    marginVertical: 20,
    marginLeft: 10,
  },
  center: {
    alignItems: 'center',
    backgroundColor: 'white',
    paddingVertical: 15,
    paddingHorizontal: 25,
  },
  image: {
    width: 200,
    height: 200,
    marginVertical: 20,
  },
  price: {
    color: 'orange',
    fontSize: 25,
  },
  name: {
    fontSize: 20,
    marginBottom: 15,
    // fontFamily: 'sans-serif',
  },
  desc: {
    color: 'silver',
    textAlign: 'center',
  },
  button: {
    backgroundColor: 'orange',
    width: '90%',
    padding: 15,
    marginVertical: 20,
    borderRadius: 50,
    alignItems: 'center',
  },
});
