import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import Navbar from './Navbar';

export default function SingleItem(props) {
  console.log(props.route.params);
  const Item = props.route.params;
  return (
    <View>
      {/* <Navbar /> */}
      <Text style={styles.pName}>{Item.productName} </Text>
      <View style={styles.center}>
        <Image style={styles.image} source={Item.images} />
        <Text style={styles.price}>${Item.price}</Text>

        <Text style={styles.name}>{Item.productName}</Text>
        <Text style={styles.desc}>{Item.description}</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={{color: 'white'}}>Add to Cart</Text>
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
    fontFamily: 'sans-serif',

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
