import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import Navbar from './Navbar';

export default function SingleItem(props) {
  console.log(props.route.params);
  const Item = props.route.params;
  return (
    <View>
      <Navbar />
      <Text style={styles.pName}> {Item.productName} </Text>
      <View style={styles.center}>
        <Image style={styles.image} source={Item.images} />
        <Text style={styles.price}>${Item.price}</Text>

        <Text style={styles.name}>{Item.productName}</Text>
        <Text style={styles.desc}>{Item.description}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  pName: {
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
    marginVertical: 10,
  },
  price: {
    color: 'orange',
    fontSize: 25,
  },
  name: {
    fontSize: 15,
    marginBottom: 15,
  },
  desc: {
    color: 'silver',
  },
});
