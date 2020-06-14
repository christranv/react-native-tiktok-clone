import * as React from 'react';
import { Image, StyleSheet } from 'react-native';

interface BottomTabIconProps {
  isFocus: boolean;
  isNonLabel?: boolean;
  image: any;
}

const BottomTabIcon: React.SFC<BottomTabIconProps> = (props) => {
  return (
    <Image
      style={[
        styles.tabBarIcon,
        // props.isFocus ? null : styles.nonFocus,
        props.isNonLabel ? styles.midIconSize:styles.normIconSize
      ]}
      source={props.image}
    />
  );
};

const styles = StyleSheet.create({
  tabBarIcon: {
    flex: 1,
    resizeMode: 'contain'
  },
  // nonFocus: {
  // },
  normIconSize: {
    width: '30%'
  },
  midIconSize: {
    width: '60%'
  }
});

export default BottomTabIcon;
