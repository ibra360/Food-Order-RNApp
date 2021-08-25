import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  Image,
} from 'react-native';
import {Divider} from 'react-native-paper';
import {Data} from '../SampleData';

export default function Items() {
  const renderItem = ({item, index}) => {
    console.log('data============', item.images);
    // const color = item.id === selectedId ? 'orange' : 'silver';
    // console.log({selectedId});
    return (
      <View style={styles.Card}>
        <TouchableOpacity style={styles.center}>
          <Image style={styles.tinyLogo} source={item.images} />
          <Text style={styles.price}>${item.price}</Text>

          <Text style={styles.name}>{item.productName}</Text>
        </TouchableOpacity>
        <View style={styles.divider}></View>
        <TouchableOpacity style={styles.center}>
          <Text style={styles.price}>Add to cart</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View
      style={{
        justifyContent: 'center',
        alignContent: 'center',
        marginLeft: '3%',
        // marginRight: 'auto',
      }}>
      <FlatList numColumns={2} data={Data.Products} renderItem={renderItem} />
    </View>
  );
}

const styles = StyleSheet.create({
  items: {},
  center: {
    alignItems: 'center',
  },
  Card: {
    justifyContent: 'center',
    // alignContent: 'center',
    padding: 10,
    backgroundColor: 'white',
    width: '44%',
    margin: 8,
    borderRadius: 12,
    // alignItems: 'center',
  },
  tinyLogo: {
    width: 50,
    height: 50,
    marginVertical: 10,
  },
  price: {
    color: 'orange',
    // marginVertical: 5,
  },
  divider: {
    height: 1,
    backgroundColor: 'silver',
    width: '100%',
    marginVertical: 6,
  },
});
