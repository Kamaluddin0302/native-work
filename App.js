import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import WebView from './src/component/webview/webview'
export default function App() {
  return (
    <WebView/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: 30
  }
});
