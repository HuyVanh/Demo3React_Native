import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Animated, Easing } from 'react-native';

const NaViView = () => {
  const [position] = useState(new Animated.Value(0));

  const moveBox = () => {
    const randomY = Math.floor(Math.random() * 200) + 50; // Random vị trí theo chiều dọc
    Animated.timing(position, {
      toValue: randomY,
      duration: 1000, // Thời gian di chuyển
      easing: Easing.linear, // Hiệu ứng mượt mà
      useNativeDriver: false,
    }).start();
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={moveBox}>
        <Text style={styles.buttonText}>Nút ấn</Text>
      </TouchableOpacity>
      <Animated.View style={[styles.box, { top: position }]}></Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
  },
  box: {
    width: 100,
    height: 100,
    backgroundColor: 'lightblue',
    position: 'absolute',
  },
});

export default NaViView;
