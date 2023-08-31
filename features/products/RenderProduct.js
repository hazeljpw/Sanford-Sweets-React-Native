import { StyleSheet, Text, View } from 'react-native';
import { Card, Icon } from 'react-native-elements';

const RenderProduct = ( props ) => { // instead of passong the props parameter, the product is destructured since this is the only prop that this component is getting for now.
    const { product } = props;
    if (product) {
        return (
            <Card containerStyle={StyleSheet.cardContainer}>
                <Card.Image
                    source={product.image}
                    style={{ weight: 100, height: 250}}
                >
                </Card.Image>
                <View style={styles.iconContainer}>
                    <Icon
                        name={props.isFavorite ? 'cart' : 'cart-plus'}
                        type='font-awesome'
                        color='chocolate'
                        raised
                        reverse
                        onPress={() => props.isFavorite ? console.log('Already in the cart') : props.markFavorite()}
                    />
                </View>
                <Text
                    style={{
                        textAlign: 'center',
                        fontSize: 15,
                        fontWeight: 'bold',
                        marginTop: 20,
                    }}
                >
                    {product.name}
                </Text>
                <Text
                    style={{
                        margin: 20,
                    }}
                >
                    {product.description}
                </Text>
            </Card>
        );
    }
    return <View />;
};

const styles = StyleSheet.create({
    cardContainer: {
        padding: 0,
        margin: 0,
        marginBottom: 20
    },
    iconContainer: {
        alignItems: 'center', // Center horizontally
        marginTop: 10, // Adjust as needed
    },
})

export default RenderProduct;

// padding: 10, backgroundColor: 'white' }