import React from "react";
import { View, Text, StyleSheet } from "react-native";

class Tab2 extends React.Component {
  render() {
    return (
      <View style={styles._container}>
        <Text>hi this is tab2</Text>
      </View>
    );
  }
}

let styles = StyleSheet.create({
  _container: {
    justifyContent: "center",
    alignItems: "center"
  }
});

export default Tab2;
