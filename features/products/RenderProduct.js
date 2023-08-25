import { Text, View } from 'react-native';
import { Card } from 'react-native-elements';

const RenderProduct = ({ product }) => {
    if (product) {
        return (
            <Card containerStyle={{ padding: 0, backgroundColor: '#ffdede' }}>
                <Card.Image source={product.image}></Card.Image>
                <View>
                    <Text
                        style={{
                            textAlign: 'center',
                            fontSize: 15,
                            fontWeight: 'bold',
                            marginTop: 5,
                            color: 'brown'
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