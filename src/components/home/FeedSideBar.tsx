import React, { useCallback, useEffect, useRef } from 'react';
import {
  Animated,
  Easing,
  Image,
  StyleProp,
  StyleSheet,
  Text,
  TouchableOpacity, View,
  ViewStyle
} from 'react-native';
import Colors from '../../constants/Colors';
import abbreviateNum from '../../utils/abbreviateNum';

interface Props {
  style: StyleProp<ViewStyle>;
  feedId: string;
  accountAvatar: string;
  love: number;
  comment: number;
  share: number;
  isLoved: boolean;
  onLoveReact: any;
}

const FeedSideBar: React.FC<Props> = (props) => {
  // Animate spinning song cover
  const spinValue = useRef(new Animated.Value(0)).current;
  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });
  useEffect(() => {
    Animated.loop(
      Animated.timing(spinValue, {
        toValue: 1,
        duration: 11000,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
    ).start();
  }, []);

  let abbrLoveCount = abbreviateNum(props.love);

  const onLovePress = useCallback(() => { props.onLoveReact(props.feedId) }, []);

  return (
    <View style={props.style}>
      <Image
        source={require('../../assets/icons/profile_img_frame.png')}
        style={styles.profImageFrame}
      />
      <Image source={{ uri: props.accountAvatar }} style={styles.profImage} />
      <View style={styles.icon}>
        <TouchableOpacity onPress={onLovePress}>
          <Image
            source={require('../../assets/icons/love.png')}
            style={[styles.iconImg, props.isLoved && styles.loved]}
          />
        </TouchableOpacity>
      </View>
      <Text style={styles.text}>{abbrLoveCount}</Text>
      <View style={styles.icon}>
        <TouchableOpacity>
          <Image
            source={require('../../assets/icons/comment.png')}
            style={styles.iconImg}
          />
        </TouchableOpacity>
      </View>
      <Text style={styles.text}>{props.comment}</Text>
      <View style={styles.icon}>
        <TouchableOpacity>
          <Image
            source={require('../../assets/icons/share.png')}
            style={styles.iconImg}
          />
        </TouchableOpacity>
      </View>
      <Text style={styles.text}>{props.share}</Text>
      <Animated.Image
        source={require('../../assets/icons/song_cover.png')}
        style={[styles.songCover, { transform: [{ rotate: spin }] }]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 13,
    color: 'white',
  },
  profImageFrame: {
    width: '100%',
    height: '20%',
    resizeMode: 'contain',
    zIndex: 1,
  },
  profImage: {
    position: 'absolute',
    width: '94%',
    height: '10%',
    marginTop: 19,
    borderRadius: 30,
  },
  icon: {
    width: '65%',
    height: '10%',
    marginTop: 30,
    marginBottom: 5,
  },
  iconImg: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  loved: {
    tintColor: Colors.loved,
  },
  songCover: {
    width: '88%',
    height: '11%',
    borderRadius: 30,
    marginTop: 30,
  },
});

export default React.memo(FeedSideBar);
