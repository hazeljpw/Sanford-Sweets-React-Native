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
                                marginTop:20
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
                    <Avatar size='large' source={product.image}/>
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
        height: 200, 
    },
    listItemContainer: {
        backgroundColor: 'transparent',
        flexDirection: 'row', // Align avatar and content horizontally
        alignItems: 'center', // Align items vertically within the container
        justifyContent: 'space-between', // Distribute items evenly along the container
        paddingHorizontal: 50, // Add horizontal padding to the ListItem container
        paddingVertical: 25, 
        marginTop: -15
    },
    container: {
        flex: 1,
    },
});