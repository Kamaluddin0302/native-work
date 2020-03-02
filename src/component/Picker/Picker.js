import React from "react";
import { Picker, Item } from "react-native";

export default class DropDown extends React.Component {
  // static navigationOptions = {
  //     header: null,
  // }
  render() {
    return (
      <>
        <Picker
          // selectedValue={this.state.language}
          style={{ height: 50, width: "60%" }}
          onValueChange={(itemValue, itemIndex) =>
            this.setState({ language: itemValue })
          }
        >
          <Picker.Item
            label="Winter Park, Florida"
            value="java"
            style={{ fontWeight: "bold" }}
          />
          <Picker.Item label="JavaScript" value="js" />
        </Picker>
      </>
    );
  }
}
