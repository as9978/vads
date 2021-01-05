/// <reference types="react" />

import { ImageStyle, StyleProp, TextStyle, ViewStyle } from "react-native";

interface InterstitialProps {
  width: number | string;
  height: number | string;
  imageWidth: number;
  imageHeight: number;
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
  containerStyles?: StyleProp<ViewStyle>;
  textStyles?: StyleProp<TextStyle>;
  imageStyles?: StyleProp<ImageStyle>;
  counterTextStyles?: StyleProp<TextStyle>;
  buttonContainerStyles?: StyleProp<ViewStyle>;
  buttonTextStyles?: StyleProp<TextStyle>;
  time?: number;
  onClose?: () => void;
}

declare const _default: ({
  width,
  height,
  imageWidth,
  imageHeight,
  top,
  bottom,
  left,
  right,
  containerStyles,
  textStyles,
  imageStyles,
  counterTextStyles,
  buttonContainerStyles,
  buttonTextStyles,
  time,
  onClose,
}: InterstitialProps) => JSX.Element;

export default _default;
