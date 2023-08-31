import { ScrollView } from "react-native";
import { Card, Text } from 'react-native-elements';

const ContactScreen = () => {
    return (
        <ScrollView>
            <Card wrapperStyle={{ margin: 20 }}>
                <Card.Title>Contact Information</Card.Title>
                <Card.Divider/>
                <Text>1234 Avenue</Text>
                <Text>Sanford, FL 32773</Text>
                <Text style={{ marginBottom: 10 }}>U.S.A.</Text>
                <Text>Phone: 1-234-567-8999</Text>
                <Text>Email: sanfordsweets@outlook.com</Text>
            </Card>
            <Card wrapperStyle={{ margin: 20 }}>
                <Card.Title>Social Media</Card.Title>
                <Card.Divider/>
                <Text>Insert Icon Facebook</Text>
                <Text>Insert Icon Instagram</Text>
                <Text>Insert Icon Youtube</Text>
            </Card>
        </ScrollView>
    );
}

export default ContactScreen;