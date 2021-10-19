import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import {
  ViewProps,
  useThemeColor
} from 'components/Themed';
import { fontProps } from 'constants/FontProps';

export const ProductCategory = ({
  category,
  ...props
}: ViewProps & { category?: string  }) => {
  const {
    style,
    lightColor,
    darkColor,
    isSubView,
    ...otherProps
  } = props;
  const backgroundColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    'reverseBackground'
  );
  const color = useThemeColor(
    { light: lightColor, dark: darkColor },
    'reverseText'
  );

  return (
    <View style={[{ backgroundColor }, styles.container]}>
      <Text style={[fontProps['label'], { color }]}>
        {category}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // width:'80%',
    paddingHorizontal: '2%',
    marginVertical: '2%',
    borderRadius: 4
    // backgroundColor:''
  }
});
