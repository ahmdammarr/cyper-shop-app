import * as React from 'react';
import {
  StyleSheet,
  Image,
  View as RNView
} from 'react-native';
import { Product } from 'store/products/types';
import { View, Text } from 'components/Themed';
import { url } from 'inspector';
import { fontProps } from 'constants/FontProps';
import { ProductCategory } from './ProductCategory';
import { useTruncateText } from 'hooks/useTruncateText';

export const ProductCard = ({
  title,
  image,
  category,
  description,
  price
}: Partial<Product>) => {
  return (
    <View isSubView style={styles.container}>
      <Image
        source={{ uri: image }}
        resizeMode='cover'
        style={styles.productImage}
      />
      <RNView style={{ marginLeft: '3%' }}>
        <Text
          style={[
            fontProps['headline'],
            { marginVertical: '2%' }
          ]}
        >
          {useTruncateText(title||'', 10)}
        </Text>
        <Text style={fontProps['label']}>
          {useTruncateText(description||'', 35)}
        </Text>
        <RNView style={{ flexWrap: 'wrap' }}>
          <ProductCategory category={category} />
        </RNView>
        <Text style={[
            fontProps['title'],
            { marginVertical: '4%' }
          ]}>{price} EGP</Text>
      </RNView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '40%',
    width: '50%',
    borderRadius: 20
  },
  productImage: {
    width: '100%',
    height: '40%',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20
  }
});
