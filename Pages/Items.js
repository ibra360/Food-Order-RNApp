import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  Image,
} from 'react-native';

import {Data} from '../SampleData';

export default function Items({navigation, selectedId}) {
  const fPrd = Data.Products.filter(item => item.CategoryId == selectedId);
  // console.log({fPrd});

  const renderItem = ({item, index}) => {
   
    return (
      <View style={{width: '50%'}}>
        <View style={styles.Card}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('SingleItem', item);
            }}
            style={styles.center}>
            <Image style={styles.tinyLogo} source={item.images} />
            <Text style={styles.price}>${item.price}</Text>

            <Text style={styles.center}>{item.productName}</Text>
          </TouchableOpacity>

          <View style={styles.divider}></View>

          <TouchableOpacity style={styles.center}>
            <Text style={styles.price}>Add to cart</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <View
      style={{
        // justifyContent: 'center',
        // alignContent: 'center',
        // flexDirection: 'row',
        // alignItems:"center",
        // justifyContent: 'space-between',
        paddingHorizontal: 10,
        // marginLeft: '3%',
        // paddingTop: 10,
        // marginRight: 'auto',
      }}>
      <FlatList numColumns={2} data={fPrd} renderItem={renderItem} />
    </View>
  );
}

const styles = StyleSheet.create({
  d: {},
  center: {
    alignItems: 'center',
    textAlign: 'center',
  },
  Card: {
    justifyContent: 'center',
    // alignContent: 'center',
    // borderWidth: 1,
    padding: 10,
    backgroundColor: 'white',
    // width: '44%',
    margin: 8,
    borderRadius: 12,
    // alignItems: 'center',
  },
  tinyLogo: {
    width: 55,
    height: 50,
    marginVertical: 10,
  },
  price: {
    color: 'orange',
    // marginVertical: 5,
  },
  divider: {
    height: 0.5,
    backgroundColor: 'silver',
    width: '100%',
    marginVertical: 6,
  },
});
