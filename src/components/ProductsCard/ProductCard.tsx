import * as React from 'react';
import {
  StyleSheet,
  Image,
  View as RNView
} from 'react-native';
import { Product } from 'store/products/types';
import { View, Text } from 'components/Themed';
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
        resizeMode='stretch'
        style={styles.productImage}
      />
      <RNView style={styles.cardInfoContainer}>
        <Text
          style={[
            fontProps['title'],
            styles.titleContainer
          ]}
        >
          {useTruncateText(title || '', 10)}
        </Text>
        <Text style={fontProps['label']}>
          {useTruncateText(description || '', 25)}
        </Text>
        <RNView style={styles.categoryContainer}>
          <ProductCategory category={category} />
        </RNView>
        <Text
          style={[fontProps['title'], styles.priceText]}
        >
          {price} EGP
        </Text>
      </RNView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    borderRadius: 20
  },
  productImage: {
    width: '100%',
    height: '40%',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20
  },
  cardInfoContainer: { marginLeft: '3%' },
  titleContainer: {
    height: '20%',
    marginVertical: '2%'
  },
  categoryContainer: { flexWrap: 'wrap' },
  priceText: { marginVertical: '4%' }
});
