import React, { useRef } from 'react';
import { View, Text, ScrollView, StyleSheet, Animated } from 'react-native';

const ScrollableHeader = () => {
  const scrollY = useRef(new Animated.Value(0)).current;

  const headerHeight = scrollY.interpolate({
    inputRange: [0, 100],
    outputRange: [200, 100],
    extrapolate: 'clamp',
  });

  const avatarOpacity = scrollY.interpolate({
    inputRange: [0, 100],
    outputRange: [1, 0],
    extrapolate: 'clamp',
  });

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.header, { height: headerHeight }]}>
        <Animated.Image
          source={require('./anh1.jpg')}
          style={[styles.avatar, { opacity: avatarOpacity }]}
        />
        <Animated.Text style={[styles.headerText, { opacity: avatarOpacity }]}>Tiêu đề</Animated.Text>
      </Animated.View>
      <ScrollView
        contentContainerStyle={styles.contentContainer}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: false }
        )}
        scrollEventThrottle={16}
      >
        {/* Nội dung cuộn */}
        <Text style={styles.content}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut leo id dui scelerisque consequat eu nec lorem. Maecenas finibus justo vitae ligula tristique, et commodo odio cursus. Vivamus ut enim ut metus hendrerit volutpat. Nulla facilisi. Proin lacinia enim id risus suscipit scelerisque. Integer ac dolor lorem. Suspendisse potenti. Sed efficitur, mauris nec luctus posuere, nunc lectus posuere sapien, eu varius elit sapien nec dui. Fusce at aliquam tortor. Fusce pulvinar suscipit purus, nec placerat mauris facilisis nec. Ut in justo sit amet elit tempor fermentum. Nam vehicula nulla a enim placerat, vitae egestas elit mattis.
        </Text>
        {/* Thêm nội dung dài hơn */}
        <Text style={styles.content}>
          Mauris hendrerit aliquet odio, id bibendum purus venenatis vitae. Ut sit amet ex eu ligula rhoncus tempor. Fusce aliquet metus in elit congue, nec tincidunt metus fringilla. Integer quis ex vitae mi varius ultrices. Nullam tincidunt sapien eu velit feugiat, id commodo purus rhoncus. Maecenas in orci ac metus tristique aliquet. Nulla laoreet neque eget pharetra dapibus. Nulla facilisi. Proin sit amet odio mi. Aenean quis magna lectus. Fusce ullamcorper tellus a nibh scelerisque aliquet. Suspendisse potenti. Fusce interdum justo at interdum ullamcorper. Fusce et sodales odio. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Cras tempus lacus non tortor sodales feugiat. Donec ut urna fringilla, laoreet dolor non, tincidunt nulla. Curabitur lacinia auctor odio, a suscipit tortor ultrices nec. Ut eleifend, metus at facilisis mattis, erat metus varius libero, sed ultricies neque odio at lectus.
        </Text>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: '#007bff',
    alignItems: 'center',
    overflow: 'hidden',
    paddingTop: 50,
    paddingBottom: 20,
  },
  headerText: {
    fontSize: 20,
    color: 'white',
    marginTop: 10,
  },
  contentContainer: {
    padding: 20,
  },
  content: {
    fontSize: 16,
    marginBottom: 10,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
});

export default ScrollableHeader;
