import React from "react";
import { Text, View, Button, ScrollView } from "react-native";
import Card from "./../../component/AppointmentCard/AppointmentCard";
import { CustomHeader } from "./../../component";
export default class Appointment extends React.Component {
  static navigationOptions = {
    header: null
  };
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: "white" }}>
        <CustomHeader
          path={this.props.navigation}
          openDrawer={this.props.navigation}
        />
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
            <View
              style={{
                backgroundColor: "white",
                display: "flex",
                flexDirection: "row",
                height: 40
              }}
            >
              <View style={{ backgroundColor: "#f1f3f4", width: "20%",alignContent: "center" ,alignItems:"center"}}>
                <Text style={{ fontSize: 18,alignSelf: "center" }}>Active</Text>
              </View>
              <View style={{ backgroundColor: "blue", width: "30%" }}>
                <Text style={{ fontSize: 18 ,color: "white"}}>Completed</Text>
              </View>
            </View>
            <Card
              date="12-19(11:51 AM)"
              Status="Done"
              extratext=""
              color=""
              blueText="Review"
              yellowText="Delete"
            />
            <Card
              date="Invalid Date"
              Status="Provider Declined"
              extratext=""
              color=""
              blueText="Review"
              yellowText="Delete"
            />
            <Card
              date="Invalid Date"
              Status="Chat"
              extratext="Ok"
              color="blue"
              blueText="Review"
              yellowText="Delete"
            />
            <Card
              date="Invalid Date"
              Status="Chat"
              extratext="Hello. My name isYordan from Babalu p..."
              color="gray"
              blueText="Review"
              yellowText="Delete"
            />
            <Card
              date="Invalid Date"
              Status="Chat"
              extratext=""
              color=""
              blueText="Review"
              yellowText="Delete"
            />
            <Card
              date="Invalid Date"
              Status="Chat"
              extratext=""
              color=""
              blueText="Review"
              yellowText="Delete"
            />
            <Card
              date="Invalid Date"
              Status="Chat"
              extratext=""
              color=""
              blueText="Review"
              yellowText="Delete"
            />
            <Card
              date="Invalid Date"
              Status="Chat"
              extratext=""
              color=""
              blueText="Review"
              yellowText="Delete"
            />
            <Card
              date="Invalid Date"
              Status="Chat"
              extratext=""
              color=""
              blueText="Review"
              yellowText="Delete"
            />
            <Card
              date="Invalid Date"
              Status="Chat"
              extratext=""
              color=""
              blueText="Review"
              yellowText="Delete"
            />
          </View>
        </ScrollView>
      </View>
    );
  }
}
