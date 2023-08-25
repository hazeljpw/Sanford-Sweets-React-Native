import { FlatList } from 'react-native';
import { Avatar, ListItem } from 'react-native-elements';

const OrderNowScreen = (props) => {
    const renderOrderNowItem = ({ item: product }) => {
        return (
            <ListItem 
                onPress={() => props.onPress(product.id)}
                containerStyle={{backgroundColor:'#ffeded'}}
            >
                <ListItem.Content>
                    <ListItem.Title
                        style={{
                            fontWeight:'bold',
                            fontSize: 17,
                            color: 'brown'
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
        );
    };
    return (
        <FlatList
            data={props.products}
            renderItem={renderOrderNowItem}
            keyExtractor={(item) => item.id.toString()}
        />
    );
};

export default OrderNowScreen;