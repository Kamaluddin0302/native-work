import React, { Component } from "react";
import { Image, StyleSheet } from "react-native";
import {
  Container,
  Content,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Button,
  Icon,
  Left,
  Body,
  View
} from "native-base";
export default class CardShowcaseExample extends Component {
  render() {
    return (
      <Card style={{ width: "100%" }}>
        <Image
          source={{
            uri:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTemD1cAf1QMErHq-cH4zlqauWRoQIDDq1APAfUfBKcMtQV5BbW"
          }}
          style={{ height: 150, width: "100%" }}
        />

        <View style={styles.desc}>
          <Text style={styles.label}>AROUND THE HOUSE</Text>
          <Button style={styles._seemore} rounded>
            <Text style={{ color: "blue" }}> MORE</Text>
          </Button>
        </View>
      </Card>
    );
  }
}

let styles = StyleSheet.create({
  desc: {
    position: "absolute",
    bottom: 0,
    marginBottom: 10,
    flex: 1,
    flexDirection: "row",
    width: "100%"
  },
  label: {
    backgroundColor: "black",
    color: "white",
    borderTopRightRadius: 50,
    borderBottomRightRadius: 50,
    padding: 5,
    width: "60%"
  },
  _seemore: {
    height: 35,
    backgroundColor: "white",
    width: 80,
    marginLeft: 20
  }
});
