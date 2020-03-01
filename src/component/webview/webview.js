import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { WebView } from "react-native-webview";

export default function App() {
    return (
        <WebView
            source={{ uri: "http://www.starnews.com.ng/" }}
            style={{ marginTop: 30 }}
        />
    );
}

