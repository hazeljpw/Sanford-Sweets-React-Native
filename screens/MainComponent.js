import { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { PRODUCTS } from '../shared/products';
import ProductInfoScreen from './ProductInfoScreen';
import OrderNowScreen from './OrderNowScreen';
import Constants from 'expo-constants';

const Main = () => {
    const [products, setProducts] = useState(PRODUCTS);
    const [selectedProductId, setSelectedProductId] = useState();

    return (
        <View style={styles.container}>
            <OrderNowScreen
                products={products}
                onPress={(productId) => setSelectedProductId(productId)} 
            />
            <ProductInfoScreen
                product={
                    products.filter(
                        (product) => product.id === selectedProductId
                    )[0]
                }
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '',
      paddingTop: Platform.OS === 'ios' ? 0 : Constants.statusBarHeight
    },
  });

export default Main;