import { useState } from 'react';
import { View } from 'react-native';
import { PRODUCTS } from '../shared/products';
import ProductInfoScreen from './ProductInfoScreen';
import OrderNowScreen from './OrderNowScreen';
import Constants from 'expo-constants';

const Main = () => {
    const [products, setProducts] = useState(PRODUCTS);
    const [selectedProductId, setSelectedProductId] = useState();

    return (
        <View 
            style={{
                flex: 1,
                paddingTop:
                    Platform.OS === 'ios' ? 0 : Constants.statusBarHeight
            }}
        >
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

export default Main;