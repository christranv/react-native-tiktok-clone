import React, { useCallback } from 'react';
import { StyleProp, StyleSheet, Text, View, ViewStyle } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { normalize } from '../../utils/responsive';
import {
  RECOMMEND_FEEDS,
  FOLLOWING_FEEDS,
  feedTypes,
} from '../../store/feed/types';

interface Props {
  style: StyleProp<ViewStyle>;
  type: feedTypes;
  loadFeeds: any;
}

const FeedTypeChooser = (props: Props) => {
  const loadFollowing = useCallback(() => props.loadFeeds(FOLLOWING_FEEDS), []);
  const loadRecommend = useCallback(() => props.loadFeeds(RECOMMEND_FEEDS), []);
  return (
    <View style={props.style}>
      <TouchableWithoutFeedback onPress={loadFollowing}>
        <Text style={styles.feedTypeText}>Following</Text>
      </TouchableWithoutFeedback>
      <Text style={styles.feedTypeText}>︲</Text>
      <TouchableWithoutFeedback onPress={loadRecommend}>
        <Text style={styles.feedTypeText}>For You</Text>
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  feedTypeText: {
    fontSize: normalize(20),
    color: 'white',
    textAlignVertical: 'bottom',
    fontWeight: 'bold',
  },
});
export default React.memo(FeedTypeChooser);
