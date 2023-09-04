import { ScrollView,ImageBackground,StyleSheet } from "react-native";
import { Card, Text, SocialIcon } from 'react-native-elements';
import { View } from 'react-native'
import SocialMedia from "../features/products/SocialMedia";

const ContactScreen = () => {
    return (
        <ImageBackground
            source={require('../assets/images/background.jpg')}
            style={styles.imageBackground}
        >
        <ScrollView>
            <Card wrapperStyle={{ margin: 20 }}>
                <Card.Title style={{ fontSize: 18, fontWeight:"bold" }}>
                    Contact Information
                </Card.Title>
                <Card.Divider/>
                <Text>1234 Avenue</Text>
                <Text>Sanford, FL 32773</Text>
                <Text style={{ marginBottom: 10 }}>U.S.A.</Text>
                <Text>Phone: 1-234-567-8999</Text>
                <Text>Email: sanfordsweets@outlook.com</Text>
            </Card>
            <Card wrapperStyle={{ margin: 20 }}>
                <Card.Title style={{ fontSize: 18, fontWeight:"bold" }}>
                    Social Media
                </Card.Title>
                <Card.Divider/>
                <SocialMedia/>
            </Card>
        </ScrollView>
        </ImageBackground>
    );
}

export default ContactScreen;

const styles = StyleSheet.create({
    imageBackground: {
        width: '100%',
        height: '100%', 
    },
});