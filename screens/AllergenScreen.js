import { ScrollView, ImageBackground, StyleSheet } from "react-native";
import { Card, Text } from 'react-native-elements';

const ContactScreen = () => {
    return (
        <ImageBackground
            source={require('../assets/images/background.jpg')}
            style={styles.imageBackground}
        >
            <Card wrapperStyle={{ margin: 5 }}>
                <Card.Title style={{ fontSize: 18, fontWeight:"bold" }}>
                    ALLERGEN STATEMENT
                </Card.Title>
                <Card.Divider />
                <Text style={{ marginBottom: 10 }}>
                    We take pride in crafting all of our products in the cozy confines of a home kitchen. However, it's important to note that our kitchen is not subject to public health inspection. 
                </Text>
                <Text style={{ marginBottom: 10 }}>
                    As a result, while we maintain high standards of cleanliness and safety, it's possible that our products may come into contact with common allergens.
                </Text>
                <Text style={{ marginBottom: 10 }}>
                     We want to ensure your well-being, so please be aware that our baked goods and coffees may contain or come into contact with ingredients like dairy, eggs, wheat, soybeans, tree nuts, peanuts, or wheat.
                </Text>
                <Text style={{ fontWeight:"bold" }}>
                    Your health matters to us, and we encourage you to reach out if you have any specific dietary concerns or questions.
                </Text>
            </Card>
        </ImageBackground>
    );
}

export default ContactScreen;

const styles = StyleSheet.create({
    imageBackground: {
        width: '100%',
        height: '100%',
    }
});