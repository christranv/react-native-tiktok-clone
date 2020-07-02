import React, { useEffect, useRef } from 'react';
import { Animated, Easing, Image, StyleProp, StyleSheet, Text, View, ViewStyle } from 'react-native';

interface Props {
  style: StyleProp<ViewStyle>;
  accountAvatar: string;
  like: number;
  comment: number;
  share: number;
}

const FeedSideBar: React.SFC<Props> = (props) => {
  // animate spinning song cover
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
  
  console.log(props.accountAvatar);
  
  return (
    <View style={props.style}>
      <Image
        source={require('../../assets/icons/profile_image_frame.png')}
        style={styles.profImageFrame}
      />
      <Image
        source={{uri:props.accountAvatar}}
        style={styles.profImage}
      />
      <Image
        source={require('../../assets/icons/heart_light.png')}
        style={styles.icon}
      />
      <Text style={styles.text}>{props.like}K</Text>
      <Image
        source={require('../../assets/icons/comment.png')}
        style={styles.icon}
      />
      <Text style={styles.text}>{props.comment}</Text>
      <Image
        source={require('../../assets/icons/share.png')}
        style={styles.icon}
      />
      <Text style={styles.text}>{props.share}</Text>
      <Animated.Image
        source={require('../../assets/icons/song_cover.png')}
        style={[styles.songCover, { transform: [{ rotate: spin }] }]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  profImageFrame: {
    width: '100%',
    height: '20%',
    marginBottom: 3,
    resizeMode: 'contain',
    zIndex:1
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
    resizeMode: 'contain',
    marginTop: 30,
    marginBottom: 5,
  },
  text: {
    fontSize: 13,
    color: 'white',
  },
  songCover: {
    width: '88%',
    height: '10%',
    borderRadius: 30,
    marginTop: 33,
  },
});

export default React.memo(FeedSideBar);
