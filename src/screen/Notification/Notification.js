import React from "react";
import { View, Button, SafeAreaView, StyleSheet, Text } from "react-native";
import { CustomHeader } from "./../../component";

class Shedule extends React.Component {
  render() {
    return (
      <View style={styles._container}>
        <CustomHeader
          path={this.props.navigation}
          openDrawer={this.props.navigation}
        />
        <Text>Notification</Text>
      </View>
    );
  }
}

let styles = StyleSheet.create({
  _container: {
    flex: 1
  }
});

export default Shedule;
