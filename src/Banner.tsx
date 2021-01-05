import React from "react";
import {
  View,
  Text,
  StyleProp,
  ViewStyle,
  TextStyle,
  TextProps,
  ViewProps,
  TouchableOpacity,
  Linking,
} from "react-native";

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

const Banner = ({
  width,
  height,
  containerProps,
  containerStyles,
  textStyles,
  textProps,
  buttonContainerStyles,
  buttonTextStyles,
}: BannerProps) => {
  return (
    <View
      style={[containerStyles, { width, height, flexDirection: "row-reverse" }]}
      {...containerProps}
    >
      <View style={{ flex: 0.8 }}>
        <Text style={textStyles} {...textProps}>
          متن تستی برای قسمت تبلیغات متن تستی برای قسمت تبلیغات متن تستی برای
          قسمت تبلیغات
        </Text>
      </View>
      <TouchableOpacity
        style={[
          {
            flex: 0.2,
            backgroundColor: "white",
            paddingVertical: 5,
            paddingHorizontal: 5,
            borderRadius: 5,
            alignItems: "center",
            justifyContent: "center",
            alignSelf: "center",
          },
          buttonContainerStyles,
        ]}
        onPress={() =>
          Linking.openURL("https://www.varknow.ir").catch((e) => console.log(e))
        }
      >
        <Text style={[{ color: "black", fontSize: 10 }, buttonTextStyles]}>
          مشاهده
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Banner;
