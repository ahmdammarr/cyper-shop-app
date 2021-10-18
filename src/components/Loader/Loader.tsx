import LottieView from 'lottie-react-native';
import * as React from 'react';
import { ReactElement } from 'react';
import {
  StyleProp,
  StyleSheet,
  View,
  ViewStyle
} from 'react-native';
import loader from './loader.json';

type LoaderProps = {
  containerStyle?: StyleProp<ViewStyle>;
  style?: StyleProp<ViewStyle>;
};
export const Loader = (
  props: LoaderProps
): ReactElement => {
  const { style = {}, containerStyle = {} } = props;
  return (
    <View style={[styles.viewStyle, containerStyle]}>
      <LottieView
        source={loader}
        style={[styles.lottie, style]}
        autoPlay
        speed={5}
        loop
        resizeMode='contain'
      />
    </View>
  );
};
const styles = StyleSheet.create({
  viewStyle: {
    alignItems: 'center'
  },
  lottie: {
    height: 'auto'
  }
});
