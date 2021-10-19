import * as React from 'react';
import { StyleSheet } from 'react-native';
import { View } from '../../components/Themed';
import { useAppSelector} from 'store'
import {ProductsStateEnum} from 'store/products/types'
import {selectProducts,selectStatus} from 'store/products'
import { RootTabScreenProps } from '../../../types';
import { Loader } from 'components/Loader';
import { ProductCard } from 'components/ProductsCard';

export function ProductsScreen () {
  const products = useAppSelector(selectProducts)
  const status = useAppSelector(selectStatus)
  const [_ProductsState, setProductsState] = React.useState<ProductsStateEnum>(
    'loading'
  )
  React.useEffect(() => {
    if (status === 'loading') {
      setProductsState('loading')
    } else if (status === 'failed') {
      setProductsState('failed')
    } else {
      setProductsState('done')
    }
  }, [status])
  return (
    <View style={styles.container}>
      <ProductCard
        title='hellosdsdsdsd'
        image='https://picsum.photos/200'
        description='fldvnksdvnksdvbnskvbsdfkvbsdsdsdsdsdsdsdsddssd'
        category='Electronics'
        price={120}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%'
  }
});
