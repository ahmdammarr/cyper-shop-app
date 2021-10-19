import * as React from 'react';
import { StyleSheet } from 'react-native';

import { Text, View } from '../../components/Themed';
import { RootTabScreenProps } from '../../../types';
import { Loader } from 'components/Loader';
import { ProductCard } from 'components/ProductsCard';

export function Products ({
  navigation
}: RootTabScreenProps<'Products'>) {
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
