import { FlatList } from 'react-native';
import { Avatar, ListItem } from 'react-native-elements';

const OrderNowScreen = (props) => {
    const renderOrderNowItem = ({ item: product }) => {
        return (
            <ListItem onPress={() => props.onPress(product.id)}>
                <Avatar size='large' source={product.image}/>
                <ListItem.Content>
                    <ListItem.Title>{product.name}</ListItem.Title>
                    <ListItem.Subtitle>
                        {product.description}
                    </ListItem.Subtitle>
                </ListItem.Content>
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