/// <reference types="react" />

import { StyleProp, TextProps, TextStyle, ViewProps, ViewStyle } from "react-native";

interface BannerProps {
  width: number | string;
  height?: number | string;
  containerProps?: ViewProps;
  containerStyles?: StyleProp<ViewStyle>;
  textProps?: TextProps;
  textStyles?: StyleProp<TextStyle>;
  buttonContainerStyles?: StyleProp<ViewStyle>;
  buttonTextStyles?: StyleProp<TextStyle>;
}

declare const _default: ({
  width,
  height,
  containerProps,
  containerStyles,
  textProps,
  textStyles,
  buttonContainerStyles,
  buttonTextStyles,
}: BannerProps) => JSX.Element;
export default _default;
