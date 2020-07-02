import React, { useCallback, useState, useEffect } from 'react';
import { Animated, StyleSheet, Text, View } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import ViewPager from '@react-native-community/viewpager';
import TouchableSwipe from 'react-native-touchable-swipe';
import Video from 'react-native-video';
import { FeedContent, FeedSideBar, FeedTypeChooser } from '../components/home';
import { useTypedSelector } from '../store';
import { Feed, FOLLOWING_FEEDS, feedTypes } from '../store/feed/types';
import {
  gh,
  SCREEN_HEIGHT,
  SCREEN_WIDTH,
  STATUS_BAR_HEIGHT,
} from '../utils/responsive';
import { useDispatch } from 'react-redux';
import { fetchFeeds } from '../store/feed/actions';

const Home: React.SFC = () => {
  let dispatch = useDispatch();
  const isFetching: boolean = useTypedSelector(
    (state) => state.feed.isFetching,
  );
  const feeds: Feed[] = useTypedSelector((state) => state.feed.feeds);

  // animate play button
  // let zoomValue = new Animated.Value(0.0);
  // Animated.spring(zoomValue, { toValue: 1, friction: 0.1, delay: 1000, useNativeDriver:true });

  // control video on feed
  const [isPaused, setIsPaused] = useState(true);
  const [activePage, setActivePage] = useState(0);
  const onPageSelected = useCallback((e) => {
    setActivePage(e.nativeEvent.position);
    // test (default false)
    setIsPaused(true);
  }, []);

  // load default data
  useEffect(() => {
    dispatch(fetchFeeds(FOLLOWING_FEEDS));
  }, []);

  // on feedTypes change
  const [feedType, setFeedType] = useState<feedTypes>(FOLLOWING_FEEDS);
  const loadFeeds = useCallback((type: feedTypes) => {
    dispatch(fetchFeeds(type));
  }, []);

  return (
    <View style={styles.main}>
      <ViewPager
        style={styles.main}
        orientation="vertical"
        onPageSelected={onPageSelected}>
        {isFetching == false &&
          feeds.map((feed, index) => (
            <View key={feed.id} style={styles.pageContainer}>
              <TouchableSwipe onPress={() => setIsPaused(!isPaused)}>
                <Video
                  source={{ uri: feed.videoUrl }}
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
                accountAvatar={feed.accountAvatar}
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
      <FeedTypeChooser
        style={styles.feedType}
        type={feedType}
        loadFeeds={loadFeeds}
      />
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
    bottom: 97,
  },
  feedType: {
    position: 'absolute',
    alignSelf: 'center',
    top: STATUS_BAR_HEIGHT,
    flexDirection: 'row',
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
