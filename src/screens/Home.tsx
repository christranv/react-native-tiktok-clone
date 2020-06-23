import React, { useCallback, useState } from 'react';
import { Animated, StyleSheet, Text, View } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import ViewPager from '@react-native-community/viewpager';
import TouchableSwipe from 'react-native-touchable-swipe';
import Video from 'react-native-video';
import { FeedContent, FeedSideBar } from '../components/home';
import { useTypedSelector } from '../store';
import { Feed } from '../store/feed/types';
import {
  gh,
  normalize,
  SCREEN_HEIGHT,
  SCREEN_WIDTH,
  STATUS_BAR_HEIGHT,
} from '../utils/responsive';

const Home: React.SFC = () => {
  const feeds: Feed[] = useTypedSelector((state) => state.feed.feeds);

  // feed types
  const [feedType, setFeedType] = useState('For You');

  // animate play button
  // let zoomValue = new Animated.Value(0.0);
  // Animated.spring(zoomValue, { toValue: 1, friction: 0.1, delay: 1000, useNativeDriver:true });

  const [isPaused, setIsPaused] = useState(true);
  const [activePage, setActivePage] = useState(0);
  const onPageSelected = useCallback((e) => {
    setActivePage(e.nativeEvent.position);
    // test (default false)
    setIsPaused(true);
  }, []);

  return (
    <View style={styles.main}>
      <ViewPager
        style={styles.main}
        orientation="vertical"
        onPageSelected={onPageSelected}>
        {feeds.map((feed, index) => (
          <View key={feed.id} style={styles.pageContainer}>
            <TouchableSwipe onPress={() => setIsPaused(!isPaused)}>
              <Video
                source={feed.videoSource}
                resizeMode={'contain'}
                ignoreSilentSwitch={'obey'}
                style={styles.video}
                muted={true}
                paused={activePage != index || isPaused}
              />
              {isPaused && (
                <Animated.Image
                  style={[
                    styles.playBtn,
                    // { transform: [{ scale: zoomValue }] },
                  ]}
                  source={require('../assets/icons/play.png')}
                />
              )}
            </TouchableSwipe>
            <FeedSideBar
              style={styles.sideBar}
              like={feed.like}
              comment={feed.comment}
              share={feed.share}
            />
            <FeedContent
              style={styles.feedContent}
              accountName={feed.accountName}
              caption={feed.caption}
              song={feed.song}
            />
          </View>
        ))}
      </ViewPager>
      <View style={styles.feedType}>
        <TouchableWithoutFeedback>
          <Text style={styles.feedTypeText}>Following</Text>
        </TouchableWithoutFeedback>
        <Text style={styles.feedTypeText}>︲</Text>
        <TouchableWithoutFeedback>
          <Text style={styles.feedTypeText}>For You</Text>
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: 'black',
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
  feedType: {
    position: 'absolute',
    alignSelf: 'center',
    top: STATUS_BAR_HEIGHT,
    flexDirection: 'row',
  },
  feedTypeText: {
    fontSize: normalize(20),
    color: 'white',
    textAlignVertical: 'bottom',
    fontWeight: 'bold',
  },
  video: {
    height: SCREEN_HEIGHT,
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  pageContainer: {
    flex: 1,
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
    top: 0,
  },
  playBtn: {
    position: 'absolute',
    width: gh(12),
    height: gh(12),
    alignSelf: 'center',
    resizeMode: 'contain',
    top: gh((100 - 12) / 2),
    opacity: 0.5,
  },
  feedContent: {
    position: 'absolute',
    flexDirection: 'column',
    width: '60%',
    left: '3%',
    bottom: 95,
  },
});

export default Home;
