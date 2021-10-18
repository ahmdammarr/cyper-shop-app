import { useAppSelector } from 'store/store'
import { selectProducts, selectStatus } from '../productsSlice'
import { Product, ProductsStateEnum } from '../types'

export const useProducts = (): { products: Product[], state: ProductsStateEnum } => {
    return {
        products: useAppSelector(selectProducts),
        state: useAppSelector(selectStatus)
    }
}