import React, { useState, useEffect } from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  Animated,
  Easing,
  useWindowDimensions,
  Dimensions
} from 'react-native';
import { useTypedSelector, RootState } from '../store';
import { Feed } from 'src/store/feed/types';
import VerticalViewPager from 'react-native-vertical-view-pager';
import { StatusBarHeight } from '../utils/StatusBarHeight';
import TextTicker from 'react-native-text-ticker';
import Video from 'react-native-video';

const { width, height } = Dimensions.get('window');

const Home: React.SFC = () => {
  const feeds = useTypedSelector((state) => state.feed.feeds);

  let spinValue = new Animated.Value(0);

  Animated.loop(
    Animated.timing(spinValue, {
      toValue: 1,
      duration: 10000,
      easing: Easing.linear,
      useNativeDriver: true
    })
  ).start();

  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg']
  });

  return (
    <View style={styles.main}>
      {/* <Image
        style={styles.backgroundVideo}
        source={require('../assets/sample_potrait_bg.png')}
      /> */}
      <VerticalViewPager showsVerticalScrollIndicator={false}>
        {feeds.map((feed: Feed) => (
          <View key={feed.id} style={styles.page_container}>
            <Video
              source={require('../assets/video2.mp4')}
              style={styles.backgroundVideo}
              resizeMode={'contain'}
              ignoreSilentSwitch={'obey'}
              muted={true}
              paused={true}
            />
            <View style={styles.sideBar}>
              <Image
                source={require('../assets/profile_image.png')}
                style={styles.sideProfImage}
              />
              <Image
                source={require('../assets/heart_light.png')}
                style={styles.sideIcon}
              />
              <Text style={styles.sideText}>{feed.like}K</Text>
              <Image
                source={require('../assets/comment_light.png')}
                style={styles.sideIcon}
              />
              <Text style={styles.sideText}>{feed.comment}</Text>
              <Image
                source={require('../assets/share_light.png')}
                style={styles.sideIcon}
              />
              <Text style={styles.sideText}>{feed.share}</Text>
              <Animated.Image
                source={require('../assets/song_cover.png')}
                style={[
                  styles.sideSongCover,
                  { transform: [{ rotate: spin }] }
                ]}
              />
            </View>
            <View style={styles.vidInfo}>
              <Text style={[styles.vidInfoText, styles.vidInfoUsername]}>
                @{feed.accountName}
              </Text>
              <Text style={[styles.vidInfoText, styles.vidInfoCaption]}>
                {feed.caption}
              </Text>
              <View style={styles.vidInfoSliderCpn}>
                <TextTicker
                  style={styles.vidInfoSlider}
                  duration={4000}
                  marqueeDelay={1000}
                  repeatSpacer={70}
                  isRTL={false}
                >
                  {feed.song}
                </TextTicker>
              </View>
            </View>
          </View>
        ))}
      </VerticalViewPager>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: 'black'
  },
  backgroundVideo: {
    position: 'absolute',
    height: height,
    top: 0,
    left: 0,
    bottom: 0,
    right: 0
  },
  page_container: {
    flex: 1,
    width: width,
    height: height,
    top: 0
  },
  sideBar: {
    position: 'absolute',
    flexDirection: 'column',
    alignItems: 'center',
    width: '14%',
    height: '53%',
    right: '2%',
    bottom: 110
  },
  sideProfImage: {
    width: '100%',
    height: '20%',
    marginBottom: 3,
    resizeMode: 'contain'
  },
  sideIcon: {
    width: '65%',
    height: '10%',
    resizeMode: 'contain',
    marginTop: 30,
    marginBottom: 5
  },
  sideText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: 'white'
  },
  sideSongCover: {
    width: '88%',
    height: '10%',
    borderRadius: 30,
    marginTop: 33
  },
  vidInfo: {
    position: 'absolute',
    width: '60%',
    height: '11%',
    left: '3%',
    bottom: 110
  },
  vidInfoText: {
    fontSize: 16,
    color: 'white'
  },
  vidInfoUsername: {
    fontWeight: 'bold'
  },
  vidInfoCaption: {
    height: '39%',
    marginTop: 10
  },
  vidInfoSliderCpn: {
    width: '70%',
    marginTop: 10
  },
  vidInfoSlider: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'white'
  }
});

export default Home;
