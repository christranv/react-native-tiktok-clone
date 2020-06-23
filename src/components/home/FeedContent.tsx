import React from "react";
import { View, Text, StyleSheet, StyleProp, ViewStyle } from "react-native";
import TextTicker from "react-native-text-ticker";

interface Props {
  style: StyleProp<ViewStyle>;
  accountName: string;
  caption: string;
  song: string;
}

const FeedContent: React.SFC<Props> = (props) => {
  return (
    <View style={props.style}>
      <Text style={[styles.text, styles.username]}>
        @{props.accountName}
      </Text>
      {props.caption != '' && (
        <Text style={[styles.text, styles.caption]}>
          {props.caption}
        </Text>
      )}
      <View style={styles.sliderWrapper}>
        <TextTicker
          style={styles.slider}
          duration={10000}
          marqueeDelay={1000}
          repeatSpacer={70}
          isRTL={false}>
          {props.song}
        </TextTicker>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    color: 'white',
  },
  username: {
    fontWeight: 'bold',
  },
  caption: {
    marginTop: 11,
  },
  sliderWrapper: {
    width: '70%',
    marginTop: 11,
  },
  slider: {
    fontSize: 15,
    color: 'white',
  },
})

export default React.memo(FeedContent);