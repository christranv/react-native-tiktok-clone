import React from 'react';
import { Text, View, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Home: React.SFC = () => {
  return (
    <View style={{flex:1, backgroundColor:'blue'}}>
      <Image source={require('../assets/sample_potrait_bg.png')}/>
    </View>
  );
};

export default Home;