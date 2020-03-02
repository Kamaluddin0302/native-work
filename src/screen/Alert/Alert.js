import React from "react";
import { Text, View, Button, ScrollView, Image } from "react-native";
import { CustomHeader } from "./../../component";
export default class Appointment extends React.Component {
  static navigationOptions = {
    header: null
  };
  render() {
    return (
      // <View style={{ flex: 1, backgroundColor: "white" }}>
      <View>
        <CustomHeader
          path={this.props.navigation}
          openDrawer={this.props.navigation}
        />
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 26,
            textAlign: "center",
            color: "blue",
            fontFamily: "serif"
          }}
        >
          Alerts
        </Text>
        <View style={{ alignSelf: "center", marginTop: 80 }}>
          <View style={{ borderColor: "#FEDF85", borderWidth: 12 }}>
            <Image
              style={{
                width: 150,
                height: 150,
                borderColor: "#FFC300",
                borderWidth: 12
              }}
              source={require("./../../images/alert.png")}
            />
          </View>
          <Text
            style={{
              textAlign: "center",
              fontSize: 18,
              fontWeight: "bold",
              marginTop: 20,
              color: "gray"
            }}
          >
            No Alert Found
          </Text>
        </View>
      </View>
    );
  }
}
