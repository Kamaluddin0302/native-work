import React, { Component } from "react";
import {
  Container,
  Header,
  Content,
  List,
  ListItem,
  Thumbnail,
  Text,
  Left,
  Body,
  Right,
  Button
} from "native-base";
export default class ListThumbnailExample extends Component {
  render() {
    console.log(this.props.blueText);
    return (
      <List>
        <ListItem thumbnail>
          <Body>
            <Text style={{ color: "blue", fontWeight: "bold" }}>
              {this.props.date}
            </Text>
            <Text
              style={{
                fontWeight: "bold",
                color: this.props.color,
                fontSize: 16
              }}
            >
              {this.props.extratext}
            </Text>
            <Text
              note
              numberOfLines={1}
              style={{ color: "Gray", fontSize: 16 }}
            >
              <Text style={{ fontWeight: "bold", fontSize: 16 }}>Status </Text>:
              {this.props.Status}
            </Text>
          </Body>
          <Right>
            <Button
              style={{
                backgroundColor: "blue",
                borderRadius: 15,
                color: "white",
                marginBottom: 5,
                padding: 5,
                width: "100%"
              }}
            >
              <Text>{this.props.blueText}</Text>
            </Button>
            <Button
              style={{
                backgroundColor: "#F9D534",
                borderRadius: 15,
                color: "white",
                padding: 5,
                width: "100%"
              }}
            >
              <Text>{this.props.yellowText}</Text>
            </Button>
          </Right>
        </ListItem>
      </List>
    );
  }
}
