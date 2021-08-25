import React, {Children, useState} from 'react';
import {StyleSheet, Text, View, FlatList, TouchableOpacity} from 'react-native';
import {Data} from '../SampleData';
import {SafeAreaView} from 'react-native-safe-area-context';
import Items from './Items'

export default function MenuList() {
  console.log(Data.Categories);
  const CATEGORIES = [
    {
      id: '01',
      title: 'Cookies',
    },
    {
      id: '02',
      title: 'Cakes',
    },
    {
      id: '03',
      title: 'Brownies',
    },
    {
      id: '04',
      title: 'Brownies',
    },
    {
      id: '05',
      title: 'Brownies',
    },
    {
      id: '06',
      title: 'Brownies',
    },
  ];

  const [selectedId, setSelectedId] = useState(null);

  const renderItem = ({item, index}) => {
    console.log(item.id);
    const color = item.id === selectedId ? 'orange' : 'silver';
    console.log({selectedId});
    return (
      <View>
        <TouchableOpacity onPress={() => setSelectedId(item.id)}>
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
      <Items/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  topView: {
    backgroundColor: 'white',
    marginBottom:15
  },
  title: {
    fontSize: 32,
    fontWeight: '700',
    paddingVertical: 10,
    marginLeft: 15,
  },
  flatText: {
    fontSize: 15,
    marginHorizontal: 35,
    paddingBottom: 10,
    color: 'silver',
    fontWeight: '700',
  },

  firstFlatText: {
    fontSize: 15,
    marginLeft: 18,
    marginRight: 35,
    color: 'silver',
    fontWeight: '700',

    paddingBottom: 10,
  },
});
