import React, { Component } from "react";
import { Image, StyleSheet, View } from "react-native";

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
  Right
} from "native-base";
export default class CardImageExample extends Component {
  render() {
    console.log(this.props.productview.image);
    return (
      <Card style={{ height: 120, width: 130, borderRadius: 20, padding: 5 }}>
        <CardItem>
          <Body style={{ textAlign: "center", alignItems: "center" }}>
            <View
              style={{
                padding: 20,
                backgroundColor: "#EDEDED",
                borderRadius: 50
              }}
            >
              <Image
                style={{ width: 30, height: 30 }}
                source={this.props.productview.image}
              />
            </View>
            <View>
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: "bold"
                }}
              >
                {this.props.productview.text}
              </Text>
            </View>
          </Body>
        </CardItem>
      </Card>
    );
  }
}
