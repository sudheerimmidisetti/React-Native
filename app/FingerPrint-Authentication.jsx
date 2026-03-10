import React from "react";
import { View, Text } from "react-native";
import * as LocalAuthentication from "expo-local-authentication";
import { Button } from "react-native-paper";

export default function FingerPrintAuthentication() {
    const Authentication = async () => {
        const status = LocalAuthentication.hasHardwareAsync();
        console.log("hardware status:", status);

        const isEnrolled = LocalAuthentication.isEnrolledAsync();
        console.log("isEnrolled:", isEnrolled);

        const result = await LocalAuthentication.authenticateAsync();
        console.log("Authentication result:", result);
    }

    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Text style={{ fontSize: 20, marginBottom: 20 }}>Fingerprint Authentication</Text>
            <Button mode="contained" onPress={Authentication}>
                Authenticate
            </Button>
        </View>
    )
}