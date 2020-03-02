import React, { Component } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { Header, Item, Input, Icon, Button } from "native-base";
import { Picker, Card } from "../index";
class Tab1 extends React.Component {
  render() {
    return (
      <View>
        {/* serch bar */}
        <Item style={styles._search}>
          <Icon name="ios-search" />
          <Input placeholder="Search" style={{ fontSize: 14 }} />
        </Item>
        {/* Picker */}
        <View style={styles._picker}>
          <Picker />
        </View>
        {/* post section */}
        <View>
          <ScrollView>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </ScrollView>
        </View>
      </View>
    );
  }
}

let styles = StyleSheet.create({
  _search: {
    borderBottomWidth: 0,
    borderRadius: 5,
    borderColor: "grey",
    paddingRight: 5,
    paddingLeft: 10,
    backgroundColor: "#f6f6f7",
    marginTop: 15
  },
  _picker: {
    alignItems: "center",
    alignContent: "center",
    textAlign: "center",
    marginLeft: "5%"
  }
});

export default Tab1;
