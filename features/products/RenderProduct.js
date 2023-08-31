import { Text, View } from 'react-native';
import { Card } from 'react-native-elements';

const RenderProduct = ({ product }) => { // instead of passong the props parameter, the product is destructured since this is the only prop that this component is getting for now.
    if (product) {
        return (
            <Card containerStyle={{ padding: 10, backgroundColor: 'white' }}>
                <Card.Image
                    source={product.image}
                    style={{ weight: 100, height: 300}}
                >
                </Card.Image>
                <View>
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
                </View>
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

export default RenderProduct;