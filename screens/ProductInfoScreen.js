import RenderProduct from '../features/products/RenderProduct';

const ProductInfoScreen = ({ route }) => {
    const { product } = route.params;
    return <RenderProduct product={product} />;
};

export default ProductInfoScreen;