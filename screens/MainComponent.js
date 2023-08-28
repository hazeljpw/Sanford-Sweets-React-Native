import { Platform, View, StyleSheet } from 'react-native';
import ProductInfoScreen from './ProductInfoScreen';
import OrderNowScreen from './OrderNowScreen';
import Constants from 'expo-constants';
import { createStackNavigator } from '@react-navigation/stack'

//function component to return the Stack Navigator code for OrderNowScreen & ProductInfoscreen.
const OrderNowNavigator = () => {
    const Stack = createStackNavigator (); // const Stack holds the object returned from the createStackNavigator method.
    return (
        <Stack.Navigator
            initialRouteName="Order Now"
            screenOptions={{
                headerStyle: {
                    backgroundColor: '#1f140a',
                    height: 35,
                },
                headerTintColor: 'white', // the back arrow color.
            }}
        >
        <Stack.Screen
            name='Order Now'
            component={OrderNowScreen}
            options={{
                title: 'Order Now',
                headerTitleStyle: {
                    color: 'burlywood',
                    fontSize: 15
                },
            }}
        />
        <Stack.Screen
            name='ProductInfo'
            component={ProductInfoScreen}
            options={({ route }) => ({
                title: route.params.product.name,
                headerTitleStyle: {
                    color: 'burlywood',
                    fontSize:15
                },
            })}
        />
        </Stack.Navigator>
    )
}

const Main = () => {

    return (
        <View style={styles.container}>
            <OrderNowNavigator />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: Platform.OS === 'ios' ? 0 : Constants.statusBarHeight
    },
  });

export default Main;