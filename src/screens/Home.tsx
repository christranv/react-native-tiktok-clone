import React from 'react';
import { Text, View, Image, StyleSheet, StatusBar } from 'react-native';
import { StatusBarHeight } from '../utils/StatusBarHeight';

const Home: React.SFC = () => {
  console.log(StatusBarHeight);

  return (
    <View>
      <Image
        style={styles.backgroundVideo}
        source={require('../assets/sample_potrait_bg.png')}
      />
      <Text style={{ top: StatusBarHeight }}>aaa</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundVideo: {
    position: 'absolute'
  }
});

export default Home;
