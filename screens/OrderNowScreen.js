import { useState } from 'react';
import { FlatList } from 'react-native';
import { Avatar, ListItem } from 'react-native-elements';
import { PRODUCTS } from '../shared/products';
import { ImageBackground, StyleSheet } from 'react-native';

const OrderNowScreen = ({ navigation }) => {
    const [products, setProducts] = useState(PRODUCTS);

    const renderOrderNowItem = ({ item: product }) => {
        return (
            <ImageBackground
                source={require('../assets/images/background.jpg')}
                style={styles.imageBackground}
            >
                <ListItem 
                    onPress={() => navigation.navigate('ProductInfo', { product })}
                    containerStyle={styles.listItemContainer}
                    underlayColor="#DDBEA9"
                >
                    <ListItem.Content>
                        <ListItem.Title
                            style={{
                                fontWeight:'bold',
                                fontSize: 15,
                            }}
                        >
                            {product.name}
                        </ListItem.Title>
                        <ListItem.Subtitle 
                            style={{
                                marginBottom: 50,
                                fontSize: 12
                            }}
                        >
                            {product.price}
                        </ListItem.Subtitle>
                    </ListItem.Content>
                    <Avatar size='xlarge' source={product.image}/>
                </ListItem>
            </ImageBackground>
        );
    };
    return (
        <FlatList
            data={products}
            renderItem={renderOrderNowItem}
            keyExtractor={(item) => item.id.toString()}
        />
    );
};

export default OrderNowScreen;

const styles = StyleSheet.create({
    imageBackground: {
        width: '100%',
        height: 200, // Set an appropriate height for the background image
    },
    listItemContainer: {
        backgroundColor: 'transparent',
    },
});