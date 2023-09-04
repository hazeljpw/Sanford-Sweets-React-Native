import { StyleSheet, ImageBackground } from 'react-native';
import RenderProduct from '../features/products/RenderProduct';

const ProductInfoScreen = ({ route }) => {
    const { product } = route.params;

    return (
        <ImageBackground
            source={require('../assets/images/background.jpg')}
            resizeMode='cover'
            style={styles.imageBackground}
        >
            <RenderProduct product={product} />
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    imageBackground: {
        flex: 1,
    }
});

export default ProductInfoScreen;