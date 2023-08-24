import { useState } from 'react';
import { PRODUCTS } from '../shared/products';
import OrderNowScreen from './OrderNowScreen';

const Main = () => {
    const [products, setProducts] = useState(PRODUCTS);

    return <OrderNowScreen products={products} />;
};

export default Main;