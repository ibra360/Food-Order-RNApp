import React, {Children, useState} from 'react';
import {StyleSheet, Text, View, FlatList, TouchableOpacity} from 'react-native';
import {Data} from '../SampleData';
import {SafeAreaView} from 'react-native-safe-area-context';
import Items from './Items';
import Navbar from './Navbar';

export default function MenuList({navigation}) {
  // console.log(Data.Categories);

  const [selectedId, setSelectedId] = useState('1');

  const renderItem = ({item, index}) => {
    // console.log(item.id);
    const color = item.id === selectedId ? 'orange' : 'silver';
    console.log({selectedId});
    return (
      <View>
        <TouchableOpacity
          onPress={() => {
            setSelectedId(item.id);
          }}>
          <Text
            style={[
              index !== 0 ? styles.flatText : styles.firstFlatText,
              {color},
            ]}>
            {item.categoryName}
          </Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <SafeAreaView>
      {/* <Navbar /> */}
      <View style={styles.topView}>
        <Text style={styles.title}>Categories</Text>
        <FlatList
          horizontal
          data={Data.Categories}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          extraData={selectedId}
        />
      </View>
      <Items navigation={navigation} selectedId={selectedId} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  topView: {
    backgroundColor: 'white',
    marginBottom: 10,
  },
  title: {
    fontSize: 32,
    fontWeight: '700',
    paddingVertical: 10,
    marginLeft: 15,
  },
  flatText: {
    fontSize: 15,
    marginHorizontal: 30,
    // paddingBottom: 1,
    color: 'silver',
    fontWeight: '700',
  },

  firstFlatText: {
    fontSize: 15,
    marginLeft: 18,
    marginRight: 30,
    color: 'silver',
    fontWeight: '700',

    paddingBottom: 10,
  },
});
