import { Image, ImageBackground, View, StyleSheet } from 'react-native';
import Main from './screens/MainComponent';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
    return (
        <View style={{ flex: 1 }}>
          <ImageBackground 
           source={require('./assets/images/background.jpg')}
           resizeMode='cover'
           style={styles.imageBackground}
          >

            <Image 
              source={require('./assets/images/logo2.png')}
              style={{ 
                width: 20,
                height: 20,
                padding: 70,
                marginTop: 60,
                marginLeft: 140,
                marginBottom: -40
              }}
            />

            <NavigationContainer>
                <Main />
            </NavigationContainer>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageBackground: {
    flex: 1,
    justifyContent: 'center',
  },
});