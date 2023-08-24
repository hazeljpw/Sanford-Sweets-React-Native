import { Text, View } from 'react-native';
import { Card } from 'react-native-elements';

const RenderProduct = ({ product }) => {
    if (product) {
        return (
            <Card containerStyle={{ padding: 0 }}>
                <Card.Image source={product.image}>
                    <View style={{ justifyContent: 'center', flex: 1 }}>
                        <Text
                            style={{
                                color: 'white',
                                textAlign: 'center',
                                fontSize: 20
                            }}
                        >
                            {product.name}
                        </Text>
                    </View>
                </Card.Image>
                <Text style={{ margin: 20 }}>{product.description}</Text>
            </Card>
        );
    }
    return <View />;
};

export default RenderProduct;