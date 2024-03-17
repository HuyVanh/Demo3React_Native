import React, { useRef, useEffect } from 'react';
import { View, FlatList, Text, StyleSheet, Animated, Easing } from 'react-native';

const initialData = [
  { id: '1', title: 'Item 1' },
  { id: '2', title: 'Item 2' },
  { id: '3', title: 'Item 3' },
  { id: '4', title: 'Item 4' },
  { id: '5', title: 'Item 5' },
];

const Bai2 = () => {
  const translateY = useRef(new Animated.Value(0)).current;
  const opacity = useRef(new Animated.Value(0)).current;
  const DATA = useRef(initialData);

  useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 1000,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start();
  }, []);

  const renderItem = ({ item, index }) => {
    return (
      <Animated.View style={[styles.item, { opacity }]}>
        <Text>{item.title}</Text>
      </Animated.View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={DATA.current}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.flatlistContainer}
        style={styles.flatList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  flatlistContainer: {
    flexGrow: 1,
    alignItems: 'center',
  },
  item: {
    padding: 20,
    marginVertical: 8,
    backgroundColor: '#f9c2ff',
    borderWidth: 1,
    borderColor: 'black',
    width: 380,
    borderRadius: 5,
  },
  flatList: {
    width: '100%',
  },
});

export default Bai2;
