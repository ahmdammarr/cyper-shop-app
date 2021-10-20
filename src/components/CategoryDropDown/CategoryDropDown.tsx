import * as React from 'react';
import {
  View as RNView,
  StyleSheet,
  Dimensions
} from 'react-native';
import DropDownPicker, {
  ValueType
} from 'react-native-dropdown-picker';
import { Text, View } from 'components/Themed';
import { fontProps } from 'constants/FontProps';
import { CategoriesStateEnum } from 'store/categories/types';
import { useCategories } from 'store/categories/hooks';
import { useAppDispatch } from 'store';
import { getCategories } from 'store/categories/categoriesSlice';
import { getProductsByCategory, getProducts } from 'store/products/productsSlice';


const { width } = Dimensions.get('screen');

export const CategoryDropDown = () => {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState('');
  const [items, setItems] = React.useState<
    { label: string; value: string }[]
  >([]);
  const { state, categories } = useCategories();
  const [_State, setState] = React.useState<
    CategoriesStateEnum
  >('loading');
  const dispatch = useAppDispatch();
  const [
    SelectedCategory,
    setSelectedCategory
  ] = React.useState<ValueType | ValueType[] | null>('');

  React.useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  React.useEffect(() => {
    if (
      SelectedCategory &&
      typeof SelectedCategory === 'string'
    ) {
      if (SelectedCategory === 'All') {
        dispatch(getProducts());
      } else {
        dispatch(getProductsByCategory(SelectedCategory));
      }
    }
  }, [SelectedCategory, dispatch]);

  React.useEffect(() => {
    if (state === 'loading') {
      setState('loading');
    } else if (state === 'failed') {
      setState('failed');
    } else {
      setState('done');
      setItems(() => [
        ...categories.map(category => {
          return { label: category, value: category };
        }),
        { label: 'All', value: 'All' }
      ]);
    }
  }, [state, categories]);

  return (
    <View isSubView style={styles.container}>
      <RNView>
        <Text style={fontProps['title']}>Products</Text>
      </RNView>
      <RNView>
        <RNView style={{ width: width / 1.5 }}>
          <DropDownPicker
            open={open}
            value={value}
            items={items}
            setOpen={setOpen}
            setValue={setValue}
            disabled={!items}
            setItems={setItems}
            placeholder={
              state === 'done' ? 'Category' : state
            }
            onChangeValue={selectedCategory =>
              setSelectedCategory(selectedCategory)
            }
          />
        </RNView>
      </RNView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingTop: '15%',
    paddingBottom: '5%',
    paddingHorizontal: '2%',
    width,
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center'
  }
});
