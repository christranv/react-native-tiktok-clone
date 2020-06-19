import React, { useState, useEffect, useCallback } from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  Animated,
  Easing,
  useWindowDimensions,
  Dimensions,
} from 'react-native';
import { useTypedSelector } from '../store';
import { Feed } from 'src/store/feed/types';
import ViewPager from '@react-native-community/viewpager';
import TextTicker from 'react-native-text-ticker';
import Video from 'react-native-video';
import { SCREEN_WIDTH, SCREEN_HEIGHT, gw, gh } from '../utils/responsive';
import { TouchableHighlight, TouchableOpacity } from 'react-native-gesture-handler';

const Home: React.SFC = () => {
  const feeds = useTypedSelector((state) => state.feed.feeds);

  let spinValue = new Animated.Value(0);

  Animated.loop(
    Animated.timing(spinValue, {
      toValue: 1,
      duration: 11000,
      easing: Easing.linear,
      useNativeDriver: true,
    }),
  ).start();

  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  const [activePage, setActivePage] = useState(0);
  const [paused, setPaused] = useState(true);
  const onPageSelected = useCallback((e) => {
    setActivePage(e.nativeEvent.position);
  }, []);

  return (
    <View style={styles.main}>
      <ViewPager
        style={{ flex: 1 }}
        orientation="vertical"
        onPageSelected={onPageSelected}>
        {feeds.map((feed, index) => (
          <View key={feed.id} style={styles.page_container}>
            <TouchableOpacity>
              {/* onPress={() => setPaused(!paused)}> */}
              <Image
                style={styles.play_btn}
                source={require('../assets/play.png')}
              />
            </TouchableOpacity>
            <Video
              source={feed.videoSource}
              style={styles.backgroundVideo}
              resizeMode={'contain'}
              ignoreSilentSwitch={'obey'}
              muted={true}
              paused={activePage != index && paused}
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
                source={require('../assets/comment.png')}
                style={styles.sideIcon}
              />
              <Text style={styles.sideText}>{feed.comment}</Text>
              <Image
                source={require('../assets/share.png')}
                style={styles.sideIcon}
              />
              <Text style={styles.sideText}>{feed.share}</Text>
              <Animated.Image
                source={require('../assets/song_cover.png')}
                style={[
                  styles.sideSongCover,
                  { transform: [{ rotate: spin }] },
                ]}
              />
            </View>
            <View style={styles.vidInfo}>
              <Text style={[styles.vidInfoText, styles.vidInfoUsername]}>
                @{feed.accountName}
              </Text>
              {feed.caption != '' && (
                <Text style={[styles.vidInfoText, styles.vidInfoCaption]}>
                  {feed.caption}
                </Text>
              )}
              <View style={styles.vidInfoSliderCpn}>
                <TextTicker
                  style={styles.vidInfoSlider}
                  duration={10000}
                  marqueeDelay={1000}
                  repeatSpacer={70}
                  isRTL={false}>
                  {feed.song}
                </TextTicker>
              </View>
            </View>
          </View>
        ))}
      </ViewPager>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: 'black',
  },
  backgroundVideo: {
    position: 'absolute',
    height: SCREEN_HEIGHT,
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  page_container: {
    flex: 1,
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
    top: 0,
  },
  play_btn: {
    position: 'absolute',
    width: gh(12),
    height: gh(12),
    alignSelf: 'center',
    resizeMode: 'contain',
    top: gh((100 - 12) / 2),
    opacity: 0.5,
    zIndex: 1,
  },
  sideBar: {
    position: 'absolute',
    flexDirection: 'column',
    alignItems: 'center',
    width: '14%',
    height: '53%',
    right: '2%',
    bottom: 95,
  },
  sideProfImage: {
    width: '100%',
    height: '20%',
    marginBottom: 3,
    resizeMode: 'contain',
  },
  sideIcon: {
    width: '65%',
    height: '10%',
    resizeMode: 'contain',
    marginTop: 30,
    marginBottom: 5,
  },
  sideText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: 'white',
  },
  sideSongCover: {
    width: '88%',
    height: '10%',
    borderRadius: 30,
    marginTop: 33,
  },
  vidInfo: {
    position: 'absolute',
    flexDirection: 'column',
    width: '60%',
    left: '3%',
    bottom: 95,
  },
  vidInfoText: {
    fontSize: 16,
    color: 'white',
  },
  vidInfoUsername: {
    fontWeight: 'bold',
  },
  vidInfoCaption: {
    marginTop: 11,
  },
  vidInfoSliderCpn: {
    width: '70%',
    marginTop: 11,
  },
  vidInfoSlider: {
    fontSize: 15,
    color: 'white',
  },
});

export default Home;
