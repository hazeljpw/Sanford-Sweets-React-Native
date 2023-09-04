import { ImageBackground, Text, StyleSheet,View } from 'react-native';
import { Card } from 'react-native-elements';

const AboutScreen = () => {
    return (
        <ImageBackground
            source={require('../assets/images/background.jpg')}
            style={styles.imageBackground}
        >
            <View style={{ marginTop: -5 }}>
            <Card>
                <Card.Title>About Us</Card.Title>
                <Card.Image source={require('../assets/images/aboutUs.jpg')}></Card.Image>
                <Card.Divider />
                <Text style={{ margin: 10 }}>
                    Sanford Sweet is located in the Sanford, Florida. We are currently delivering all products wth no additional charges in Central Florida locations.
                </Text>
                <Text style={{ margin: 10 }}>
                    We're all about celebrating differences through our delicious baked goods and coffee. Using organic ingredients, we ensure both quality and sustainability. Collaborating with eco-friendly coffee distributors, we promote responsible sourcing and fair trade.
                </Text>
            </Card>
            </View>
    </ImageBackground>
    );
}

const styles = StyleSheet.create({
    imageBackground: {
        width: '100%',
        height: '100%', 
    }
});

export default AboutScreen;

