import { Platform, View, StyleSheet } from 'react-native';
import ProductInfoScreen from './ProductInfoScreen';
import OrderNowScreen from './OrderNowScreen';
import Constants from 'expo-constants';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './HomeScreen';
import AboutScreen from './AboutScreen';
import ContactScreen from './ContactScreen'

const Tab = createBottomTabNavigator();

const screenOptions = {
    headerTintColor: 'burlywood',
    headerStyle: {
        backgroundColor: '#1f140a',
        height: 35,
        fontSize: 15,
    },
    headerTitleStyle: {
        color: 'burlywood',
        fontSize:18
    },
} 

const HomeNavigator = () => {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator screenOptions={screenOptions}>
            <Stack.Screen 
                name='Home'
                component={HomeScreen}
                options={{ title: 'Home'}}
            />
        </Stack.Navigator>
  );
}

const AboutNavigator = () => {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator screenOptions={screenOptions}>
            <Stack.Screen 
                name='About'
                component={AboutScreen}
                options={{ title: 'About'}}
            />
        </Stack.Navigator>
  );
}

const ContactNavigator = () => {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator screenOptions={screenOptions}>
            <Stack.Screen 
                name='Contact'
                component={ContactScreen}
                options={{ title: 'Contact'}}
            />
        </Stack.Navigator>
  );
}

const OrderNowNavigator = () => {
    const Stack = createStackNavigator ();
    return (
        <Stack.Navigator
            initialRouteName="Order Now"
            screenOptions={screenOptions}
        >
        <Stack.Screen
            name='Order Now'
            component={OrderNowScreen}
            options={{
                title: 'Order Now',
                headerTitleStyle: {
                    color: 'burlywood',
                    fontSize: 18
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
                    fontSize:18
                },
            })}
        />
        </Stack.Navigator>
    )
}

const Main = () => {

    return (
        <View style={styles.container}>
            <Tab.Navigator
                initialRouteName='Home'
                tabBarOptions={{
                    // showLabel: false, this will cause the name to not show
                    style: {
                        position: 'absolute',
                        bottom: 10,
                        left: 5,
                        right: 5,
                        elevation: 0,
                        backgroundColor: 'white', //#1f140a
                        borderRadius: 15,
                        height: 60,
                    }
                 }}
                >
                <Tab.Screen
                    name='Home'
                    component={HomeNavigator}
                    options={{ title: 'Home'}}
                />
                <Tab.Screen
                    name='Order Now'
                    component={OrderNowNavigator}
                    options={{ title: 'Order Now' }}
                />
                <Tab.Screen
                    name='About'
                    component={AboutNavigator}
                    options={{ title: 'About Us' }}
                />
                <Tab.Screen
                    name='Contact'
                    component={ContactNavigator}
                    options={{ title: 'Contact Us' }}
                />
            </Tab.Navigator>
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