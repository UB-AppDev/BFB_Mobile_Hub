import { StyleSheet, View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';

export default function TabTwoScreen() {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.topSection}>
                <Text style={styles.titleText}>Path to{'\n'}a New You</Text>
                <TouchableOpacity style={styles.loginButton}>
                    <Text style={styles.loginText}>Login</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.whiteSection}>
                <Text style={styles.sectionTitle}>Who are we</Text>
                <Text style={styles.description}>
                    Bridges from Borders Inc. is a 501 (c)(3) non-profit organization that was founded by a group of immigrants and immigrant allies who are passionate about helping all immigrants bridge the gap between their native culture and the American culture. We understand the struggles of acculturating into a new culture and want to be there to support you.
                </Text>
                <TouchableOpacity style={styles.aboutButton}>
                    <Text style={styles.aboutText}>About Us</Text>
                </TouchableOpacity>

                <Text style={styles.eventTitle}>Upcoming Event</Text>
                <Image
                    source={require('@/assets/images/event.png')}
                    style={styles.eventImage}
                />
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: '#fff',
    },
    topSection: {
        backgroundColor: '#56B5DB',
        paddingTop: 60,
        paddingBottom: 40,
        paddingHorizontal: 20,
        alignItems: 'flex-end',
    },
    titleText: {
        fontSize: 28,
        fontWeight: 'bold',
        textAlign: 'right',
        color: '#000',
        marginBottom: 20,
    },
    loginButton: {
        backgroundColor: '#FFB600',
        borderRadius: 20,
        paddingVertical: 8,
        paddingHorizontal: 30,
    },
    loginText: {
        fontWeight: 'bold',
        fontSize: 16,
        color: '#fff',
    },
    whiteSection: {
        padding: 20,
    },
    sectionTitle: {
        fontWeight: 'bold',
        fontSize: 20,
        marginBottom: 10,
    },
    description: {
        fontSize: 14,
        marginBottom: 20,
    },
    aboutButton: {
        backgroundColor: '#FFB600',
        borderRadius: 20,
        alignSelf: 'flex-start',
        paddingHorizontal: 20,
        paddingVertical: 8,
        marginBottom: 30,
    },
    aboutText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 14,
    },
    eventTitle: {
        fontWeight: 'bold',
        fontSize: 18,
        marginBottom: 10,
    },
    eventImage: {
        width: '100%',
        height: 300,
        resizeMode: 'contain',
        backgroundColor: '#eee',
    },
});
