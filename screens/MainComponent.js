import { Platform, View, StyleSheet } from 'react-native';
import {Icon} from 'react-native-elements';
import ProductInfoScreen from './ProductInfoScreen';
import ProductListScreen from './ProductListScreen';
import Constants from 'expo-constants';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './HomeScreen';
import AboutScreen from './AboutScreen';
import ContactScreen from './ContactScreen';
import AllergenScreen from './AllergenScreen';

const Tab = createBottomTabNavigator();

const screenOptions = {
    headerTintColor: 'white',
    headerStyle: {
        backgroundColor: '#1f140a',
        height: 40,
    },
    headerTitleStyle: {
        color: 'burlywood',
        fontSize:18,
    },
} 

const HomeNavigator = () => {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator screenOptions={screenOptions}>
            <Stack.Screen 
                name='Home'
                component={HomeScreen}
                options={{ title: 'Home' }}
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
                options={{ title: 'About Us' }}
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
                options={{ title: 'Contact Us' }}
            />
        </Stack.Navigator>
  );
}

const AllergenNavigator = () => {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator screenOptions={screenOptions}>
            <Stack.Screen 
                name='Allergen'
                component={AllergenScreen}
                options={{ title: 'Allergen' }}
            />
        </Stack.Navigator>
  );
}


const ProductListNavigator = () => {
    const Stack = createStackNavigator ();
    return (
        <Stack.Navigator
            initialRouteName="Product List"
            screenOptions={screenOptions}
        >
        <Stack.Screen
            name='Product List'
            component={ProductListScreen}
            options={{
                title: 'Products',
                headerTitleStyle: {
                    color: 'burlywood',
                    fontSize: 18
                }
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
                    showLabel: false,
                    style: {
                        position: 'absolute',
                        bottom: 10,
                        left: 5,
                        right: 5,
                        elevation: 0,
                        backgroundColor: '#1f140a',
                        borderRadius: 15,
                        height: 60,
                    }
                 }}
                >
                <Tab.Screen
                    name='Home'
                    component={HomeNavigator}
                    options={{ 
                        title: 'Home',
                        tabBarIcon: ({ color }) => (
                            <Icon 
                                name='home'
                                type='font-awesome'
                                size={24}
                                iconStyle={{ width: 24}}
                                color='burlywood'
                            />
                        )
                    }}
                />
                <Tab.Screen
                    name='Product'
                    component={ProductListNavigator}
                    options={{ title: 'Order Now',
                    tabBarIcon: ({ color }) => (
                        <Icon 
                            name='list-alt'
                            type='font-awesome'
                            size={24}
                            iconStyle={{ width: 24}}
                            color='burlywood'
                        />
                    )
                    }}
                />
                <Tab.Screen
                    name='About'
                    component={AboutNavigator}
                    options={{ title: 'About Us',
                    tabBarIcon: ({ color }) => (
                        <Icon 
                            name='info-circle'
                            type='font-awesome'
                            size={24}
                            iconStyle={{ width: 24}}
                            color='burlywood'
                        />
                    )
                }}
                />
                <Tab.Screen
                    name='Contact'
                    component={ContactNavigator}
                    options={{ title: 'Contact Us',
                    tabBarIcon: ({ color }) => (
                        <Icon 
                            name='phone'
                            type='font-awesome'
                            size={24}
                            iconStyle={{ width: 24}}
                            color='burlywood'
                        />
                    )
                }}
                />
                <Tab.Screen
                    name='Allergen'
                    component={AllergenNavigator}
                    options={{ title: 'Allergen',
                    tabBarIcon: ({ color }) => (
                        <Icon 
                            name='warning'
                            type='font-awesome'
                            size={24}
                            iconStyle={{ width: 24}}
                            color='burlywood'
                        />
                    )
                }}
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