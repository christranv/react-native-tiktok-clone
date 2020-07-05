import { Dimensions, Platform, PixelRatio } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';

export const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');
export const STATUS_BAR_HEIGHT = getStatusBarHeight();

// Based on iPhone 11
const scale = SCREEN_WIDTH / 414;

/**
/* gen dp from * for width
 * @param scale 
 */
export const gw = (scale: number) => {
  return Math.round(scale * SCREEN_WIDTH / 100);
}

/**
 * gen dp from % for height 
 * @param scale 
 */
export const gh = (scale: number) => {
  return Math.round(scale * SCREEN_HEIGHT / 100);
}

/**
 * gen appropriate size in dp
 * @param size 
 */
export const normalize = (size: number) => {
  const newSize = size * scale;
  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
  }
}