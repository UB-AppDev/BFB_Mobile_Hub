import React from "react";
import { View, Text, StyleSheet, ScrollView, Image } from "react-native";

export default function AboutScreen() {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Image
                source={require("@/assets/images/bfb.png")}
                style={styles.logo}
                resizeMode="contain"
            />
            <Text style={styles.header}>About Us</Text>
            <Text style={styles.text}>
                Bridges from Borders Inc. is a 501 (c)(3) non-profit organization that was founded by a group of immigrants and immigrant allies who are passionate about helping all immigrants bridge the gap between their native culture and the American culture. We understand the struggles of acculturating to a new culture and want to be there to support you.
            </Text>
            <Text style={styles.text}>
                We understand the importance of mental health. Your mental well-being is an important part of helping you grow and becoming the best you. In trying to adapt to a new environment, we often neglect our mental health but we want to help you be in the best state of mind in order to achieve what you set out for.
            </Text>
            <Text style={styles.text}>
                We do not discriminate on faith, economical background, educational background, country of origin, race or any other construct that society has set out to differentiate us. We embrace everyone's culture and seek to be a part of your journey as you settle and grow in the land of the free, and home of the brave.
            </Text>
            <Text style={styles.text}>
                We are with you.
            </Text>
            <Text style={styles.text}>
                The Founders of Bridges from Borders
            </Text>
            <Text style={styles.subheader}>Our Vision</Text>
            <Text style={styles.text}>
                A diverse, inclusive, and thriving society with culturally responsive resources to promote wellness and mental resilience where New Americans can form strong and harmonious communities.
            </Text>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: "#fff",
    },
    logo: {
        width: 120,
        height: 120,
        alignSelf: "center",
        marginBottom: 20,
    },
    header: {
        fontSize: 28,
        fontWeight: "bold",
        marginBottom: 15,
    },
    subheader: {
        fontSize: 22,
        fontWeight: "bold",
        marginTop: 30,
        marginBottom: 10,
    },
    text: {
        fontSize: 16,
        lineHeight: 24,
        marginBottom: 15,
    },
});
