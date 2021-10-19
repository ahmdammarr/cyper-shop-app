import * as React from 'react';
import {
  StyleSheet,
  FlatList,
  Text,
  ListRenderItemInfo,
  Dimensions
} from 'react-native';
import { View } from 'components/Themed';
import { useAppSelector } from 'store';
import {
  ProductsStateEnum,
  Product
} from 'store/products/types';
import {
  selectProducts,
  selectStatus
} from 'store/products';
import { Loader } from 'components/Loader';
import { ProductCard } from 'components/ProductsCard';

const { height, width } = Dimensions.get('screen');
export function ProductsScreen () {
  const products = useAppSelector(selectProducts);
  const status = useAppSelector(selectStatus);
  const [_ProductsState, setProductsState] = React.useState<
    ProductsStateEnum
  >('loading');
  React.useEffect(() => {
    if (status === 'loading') {
      setProductsState('loading');
    } else if (status === 'failed') {
      setProductsState('failed');
    } else {
      setProductsState('done');
    }
  }, [status]);
  console.log('status', status);
  const ProductsState: {
    [key in ProductsStateEnum]: React.ReactElement;
  } = {
    loading: <Loader />,
    failed: <Text>Error</Text>,
    done: (
      <FlatList
        data={products}
        contentContainerStyle={styles.producsListContainer}
        showsVerticalScrollIndicator={false}
        numColumns={2}
        keyExtractor={({ id }) => id.toString()}
        renderItem={({
          item: product
        }: ListRenderItemInfo<Product>) => {
          const {
            id,
            title,
            image,
            description,
            category,
            price
          } = product;
          return (
            <View style={styles.productContainer}>
              <ProductCard
                id={id}
                title={title}
                image={image}
                description={description}
                category={category}
                price={price}
              />
            </View>
          );
        }}
      />
    )
  };

  return <View style={styles.container}>{ProductsState[_ProductsState]}</View>;
}

const styles = StyleSheet.create({
  container:{paddingTop:'4%'},
  productContainer: {
    paddingHorizontal: 4,
    marginVertical: 4,
    height: height / 2.5,
    width: width / 2.1
  },
  producsListContainer: {
    justifyContent: 'center',
    alignItems: 'center'
  }
});
