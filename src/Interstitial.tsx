import React, { useEffect, useRef, useState } from "react";
import {
  Image,
  ImageStyle,
  Linking,
  StyleProp,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";
import { Feather as Icon } from "@expo/vector-icons";
import { Video } from "expo-av";

interface InterstitialProps {
  variant?: "IMAGE" | "VIDEO";
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

const Interstitial = ({
  variant = "IMAGE",
  width,
  height,
  imageWidth: iwidth,
  imageHeight: iheight,
  top,
  bottom,
  left,
  right,
  containerStyles,
  textStyles,
  imageStyles,
  counterTextStyles,
  time,
  buttonContainerStyles,
  buttonTextStyles,
  onClose,
}: InterstitialProps) => {
  const imageWidth = Math.floor(iwidth);
  const imageHeight = Math.floor(iheight);

  const [closed, setClosed] = useState(false);
  const [timeLeft, setTimeLeft] = useState(time ? time : 15);

  const videoRef = useRef<Video>(null);

  const playVideo = async () => {
    await videoRef.current?.playAsync();
  };

  useEffect(() => {
    if (variant === "VIDEO") {
      playVideo();
    }
  }, []);

  useEffect(() => {
    if (!timeLeft) {
      return;
    }

    const interval = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [timeLeft]);

  if (closed) return null;
  return (
    <View
      style={[
        {
          height: height,
          width: width,
          backgroundColor: "black",
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          position: "absolute",
          top: top ? top : 0,
          left: left ? left : 0,
          bottom: bottom ? bottom : 0,
          right: right ? right : 0,
          paddingHorizontal: 25,
        },
        containerStyles,
      ]}
    >
      <View style={{ position: "absolute", top: 15, left: 30 }}>
        <Text style={[{ color: "white", fontSize: 24 }, counterTextStyles]}>
          {timeLeft ? (
            timeLeft
          ) : (
            <TouchableOpacity
              onPress={() => {
                if (onClose) onClose();
                else setClosed(true);
              }}
            >
              <Icon name="x" color="white" size={24} />
            </TouchableOpacity>
          )}
        </Text>
      </View>
      {variant === "IMAGE" ? (
        <Image
          source={require("./1.jpg")}
          style={[
            { width: imageWidth, height: imageHeight, resizeMode: "cover" },
            imageStyles,
          ]}
        />
      ) : (
        <Video
          ref={videoRef}
          source={require("./vidad.mp4")}
          rate={1.0}
          volume={1.0}
          isMuted={false}
          resizeMode="cover"
          style={[
            {
              width: imageWidth,
              height: imageHeight,
            },
            imageStyles,
          ]}
          isLooping
          shouldPlay
        />
      )}
      <Text
        style={[
          {
            fontSize: 14,
            color: "white",
            textAlign: "center",
            marginTop: 25,
          },
          textStyles,
        ]}
      >
        متن تست تبلیغاتمتن تست تبلیغاتمتن تست تبلیغاتمتن تست تبلیغاتمتن تست
        تبلیغاتمتن تست تبلیغاتمتن تست تبلیغات
      </Text>
      <TouchableOpacity
        style={[
          {
            marginTop: 15,
            backgroundColor: "white",
            paddingVertical: 10,
            paddingHorizontal: 30,
            borderRadius: 10,
          },
          buttonContainerStyles,
        ]}
        onPress={() =>
          Linking.openURL("https://www.varknow.ir").catch((e) => console.log(e))
        }
      >
        <Text style={[{ color: "black", fontSize: 16 }, buttonTextStyles]}>
          مشاهده
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Interstitial;
