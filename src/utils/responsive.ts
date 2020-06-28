import { Dimensions, Platform, PixelRatio } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';

export const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');
export const STATUS_BAR_HEIGHT = getStatusBarHeight();

// based on iPhone 11
const scale = SCREEN_WIDTH / 414;

export function gw(scale: number) {
  return Math.round(scale * SCREEN_WIDTH / 100);
}

export function gh(scale: number) {
  return Math.round(scale * SCREEN_HEIGHT / 100);
}

export function normalize(size: number) {
  const newSize = size * scale;
  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
  }
}