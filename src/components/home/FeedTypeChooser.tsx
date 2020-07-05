import React, { useCallback } from 'react';
import { StyleProp, StyleSheet, Text, View, ViewStyle } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { normalize, gw } from '../../utils/responsive';
import {
  RECOMMEND_FEEDS,
  FOLLOWING_FEEDS,
  FeedTypes,
} from '../../store/feed/types';

interface Props {
  style: StyleProp<ViewStyle>;
  type: FeedTypes;
  onChange: any;
}

const FeedTypeChooser: React.FC<Props> = (props) => {
  const loadFollowing = useCallback(() => { props.onChange(FOLLOWING_FEEDS); }, []);
  const loadRecommend = useCallback(() => { props.onChange(RECOMMEND_FEEDS); }, []);
  return (
    <View style={[styles.main, props.style]}>
      <View style={styles.type}>
        <TouchableWithoutFeedback onPress={loadFollowing}>
          <Text
            style={[
              styles.text,
              styles.leftText,
              props.type == FOLLOWING_FEEDS && styles.active,
            ]}>
            Following
          </Text>
        </TouchableWithoutFeedback>
      </View>
      <Text style={styles.text}>︲</Text>
      <View style={styles.type}>
        <TouchableWithoutFeedback onPress={loadRecommend}>
          <Text
            style={[
              styles.text,
              styles.rightText,
              props.type == RECOMMEND_FEEDS && styles.active,
            ]}>
            For You
          </Text>
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  type: {
    width: '45%',
  },
  text: {
    color: 'gray',
    fontWeight: 'bold',
    fontSize: normalize(19),
  },
  leftText: {
    textAlign: 'right',
  },
  rightText: {
    textAlign: 'left',
  },
  active: {
    color: 'white',
    fontSize: normalize(22),
  },
});

export default React.memo(FeedTypeChooser);
