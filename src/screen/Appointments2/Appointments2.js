import React from "react";
import { Text, View, Button, ScrollView } from "react-native";
import Tabs from "./../../component/Tabs/tabs";
import Card from "./../../component/appointmentCard/appointmentCard";
import Driwer from "./../../component/Driwer/driwer";
export default class Appointment extends React.Component {
  static navigationOptions = {
    header: null
  };
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: "white" }}>
        <Driwer />
        {/* <Tabs /> */}
        <ScrollView>
          <View
            style={{
              backgroundColor: "#f1f3f4",
              width: "90%",
              alignSelf: "center",
              marginTop: "2%",
              borderRadius: 10
            }}
          >
            <Card
              date="12-19(11:51 AM)"
              Status="Request Sent"
              extratext="Test"
              color="gray"
              blueText="Detail"
              yellowText="Cancel"
            />
            <Card
              date="12-19(11:51 AM)"
              Status="Request Sent"
              extratext="Test"
              color="gray"
              blueText="Detail"
              yellowText="Cancel"
            />
            <Card
              date="12-19(11:51 AM)"
              Status="Final ApptReceived"
              extratext="To do"
              color="gray"
              blueText="Detail"
              yellowText="Cancel"
            />
            <Card
              date="12-19(11:51 AM)"
              Status="Request Sent"
              extratext="Welcome to ServiceHerd.."
              color="gray"
              blueText="Detail"
              yellowText="Cancel"
            />
            <Card
              date="12-19(11:51 AM)"
              Status="Hello. This is Randy"
              extratext=""
              color="gray"
              blueText="Detail"
              yellowText="Cancel"
            />
            <Card
              date="12-19(11:51 AM)"
              Status="Request Sent"
              extratext=""
              color=""
              blueText="Detail"
              yellowText="Cancel"
            />
            <Card
              date="12-19(11:51 AM)"
              Status="Request Sent"
              extratext=""
              color=""
              blueText="Detail"
              yellowText="Cancel"
            />
            <Card
              date="12-19(11:51 AM)"
              Status="Request Sent"
              extratext=""
              color=""
              blueText="Detail"
              yellowText="Cancel"
            />
            <Card
              date="12-19(11:51 AM)"
              Status="Request Sent"
              extratext=""
              color=""
              blueText="Detail"
              yellowText="Cancel"
            />
            <Card
              date="12-19(11:51 AM)"
              Status="Request Sent"
              extratext=""
              color=""
              blueText="Detail"
              yellowText="Cancel"
            />
          </View>
        </ScrollView>
      </View>
    );
  }
}
