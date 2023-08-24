import { Flatlist } from 'react-native';
import { Avatar, ListItem } from 'react-native-elements';

const OrderNowScreen = (props) => {
    const renderOrderNowItem = ({ item: product }) => {
        return (
            <ListItem>
                <Avatar source={product.image} rounded />
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
        <Flatlist
            data={props.products}
            renderItem={renderOrderNowItem}
            keyExtractor={(item) => item.id.toString()}
        />
    );
};
