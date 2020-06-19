import { Dimensions, Platform, StatusBar, PixelRatio } from 'react-native';

export const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get(
  'window',
);

// export const StatusBarHeight = Platform.select({
//   ios: isIPhoneX() ? 44 : 20,
//   android: StatusBar.currentHeight,
//   default: 0
// });

const wscale = SCREEN_WIDTH / 414;
const hscale = SCREEN_HEIGHT / 896;

export function gw(scale:number){
  return Math.round(scale * SCREEN_WIDTH / 100);
}

export function gh(scale:number){
  return Math.round(scale * SCREEN_HEIGHT / 100);
}

export function normalize(size: number, isHeight: boolean = false) {
  const newSize = isHeight ? size * hscale : size * wscale;
  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
  }
}
