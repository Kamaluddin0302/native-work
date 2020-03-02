import React from "react";
import { View, Button, Text } from "react-native";
import { CustomHeader } from "./../../component";

class About extends React.Component {
  render() {
    return (
      <View>
        <CustomHeader
          path={this.props.navigation}
          openDrawer={this.props.navigation}
        />
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" ,alignContent:"center" ,marginTop:"10%"}}
        >
          <Text style={{ fontSize: 30 }}>Hi i am About Page</Text>
        </View>
      </View>
    );
  }
}

export default About;
