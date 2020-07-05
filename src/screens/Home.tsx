import ViewPager from '@react-native-community/viewpager';
import React, {
  MutableRefObject,
  useCallback,
  useEffect,
  useRef,
  useState
} from 'react';
import { Animated, StyleSheet, View } from 'react-native';
import TouchableSwipe from 'react-native-touchable-swipe';
import Video from 'react-native-video';
import { useDispatch, useSelector } from 'react-redux';
import { FeedContent, FeedSideBar, FeedTypeChooser } from '../components/home';
import { RootState, useTypedSelector } from '../store';
import { fetchFeeds, loveFeed } from '../store/feed/actions';
import { Feed, FeedTypes, FOLLOWING_FEEDS } from '../store/feed/types';
import {
  gh,
  gw,
  SCREEN_HEIGHT,
  SCREEN_WIDTH,
  STATUS_BAR_HEIGHT
} from '../utils/responsive';

const Home: React.FC = () => {
  const dispatch = useDispatch();
  const viewPagerRef: MutableRefObject<any> = useRef();
  const isFetching: boolean = useTypedSelector((state) => state.feed.isFetching);
  // const feeds: Feed[] = useTypedSelector((state) => state.feed.feeds);

  const feeds: Feed[] = useSelector((state:RootState) => state.feed.feeds);

  // Animate play button
  // let zoomValue = new Animated.Value(0.0);
  // Animated.spring(zoomValue, { toValue: 1, friction: 0.1, delay: 1000, useNativeDriver:true });

  // Load init data
  useEffect(() => {
    dispatch(fetchFeeds(FOLLOWING_FEEDS));
  }, []);

  // Control video on feed
  const [isPaused, setIsPaused] = useState(true);
  const [activePage, setActivePage] = useState(0);
  const onPageSelected = useCallback((e) => {
    setActivePage(e.nativeEvent.position);
    // Test (default false)
    setIsPaused(true);
  }, []);

  // FeedTypes change event
  const activeFeedType: FeedTypes = useTypedSelector(
    (state) => state.feed.activeFeedType,
  );
  const onFeedTypeChange = useCallback((type: FeedTypes) => {
    viewPagerRef.current.setPageWithoutAnimation(0);
    dispatch(fetchFeeds(type));
  }, []);

  // love react click event
  const onLoveReactPress = useCallback((feedId: string) => {
    dispatch(loveFeed(feedId));
  }, []);

  return (
    <View style={styles.main}>
      <ViewPager
        style={styles.main}
        orientation="vertical"
        onPageSelected={onPageSelected}
        ref={viewPagerRef}>
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
                feedId={feed.id}
                accountAvatar={feed.accountAvatar}
                love={feed.love}
                comment={feed.comment}
                share={feed.share}
                isLoved={feed.isLoved}
                onLoveReact={onLoveReactPress}
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
        type={activeFeedType}
        onChange={onFeedTypeChange}
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
    height: '50%',
    right: '2%',
    bottom: 110,
  },
  feedType: {
    position: 'absolute',
    width: gw(60),
    top: STATUS_BAR_HEIGHT,
    alignSelf: 'center',
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
    top: gh(44),
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
