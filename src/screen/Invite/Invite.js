import React from "react";
import {
  Text,
  View,
  SafeAreaView,
  ScrollView,
  FlatList,
  TouchableOpacity,
  Image
} from "react-native";
import { CustomHeader } from "./../../component";
import Card from "../../component/Card/Card";
import Product from "../../component/Object/Object";
import { Item, Input, Icon, Button } from "native-base";
import Picker from "../../component/Picker/Picker";

export default class Home extends React.Component {
  static navigationOptions = {
    header: null
  };
  render() {
    return (
      <>
        <SafeAreaView>
          <CustomHeader
            path={this.props.navigation}
            openDrawer={this.props.navigation}
          />
          <ScrollView style={{ backgroundColor: "white", marginBottom: "15%" }}>
            <Text
              style={{
                textAlign: "center",
                fontWeight: "bold",
                color: "blue",
                fontSize: 25,
                marginTop: 15,
                fontFamily: "serif"
              }}
            >
              Invite Others
            </Text>
            <Text
              style={{
                textAlign: "center",
                // fontWeight: "bold",
                color: "#7f7f7f",
                fontSize: 18,
                marginTop: 15,
                fontFamily: "serif"
              }}
            >
              Share using HerdLink
            </Text>
            <View
              style={{
                backgroundColor: "blue",
                display: "flex",
                flexDirection: "row",
                borderRadius: 8,
                width: "90%",
                alignItems: "center",
                alignSelf: "center",
                marginTop: 10
              }}
            >
              <View
                style={{
                  backgroundColor: "#F9D534",
                  width: "20%",
                  alignItems: "center",
                  padding: 20,
                  borderRadius: 8
                }}
              >
                <Image
                  source={require("./../../images/link.png")}
                  style={{ width: 20, height: 20 }}
                />
              </View>
              <Text
                style={{
                  color: "white",
                  fontSize: 18,
                  marginLeft: "10%",
                  fontFamily: "serif"
                }}
              >
                Randy.ServiceHerd.com
              </Text>
            </View>

            <View
              style={{
                alignItems: "center",
                marginTop: 5,
                borderBottomColor: "#eeeeef",
                borderBottomWidth: 1,
                paddingBottom: 15
              }}
            >
              <Text
                style={{
                  width: "80%",
                  textAlign: "center",
                  color: "blue",
                  fontWeight: "bold",
                  fontStyle: "italic",
                  fontFamily: "serif",
                  lineHeight: 20
                }}
              >
                CLick on this link to copy and share via text, social or any
                you'd like.
              </Text>
            </View>

            <View style={{ alignItems: "center", marginTop: 10 }}>
              <Text
                style={{
                  color: "#7f7f7f",
                  fontWeight: "bold",
                  fontSize: 16,
                  fontFamily: "serif"
                }}
              >
                Custmize your HerdLink video
              </Text>
            </View>

            <View
              style={{
                alignItems: "center",
                marginTop: 10,
                backgroundColor: "#F9D534",
                width: "90%",
                alignSelf: "center",
                borderRadius: 8,
                height: 55,
                justifyContent: "center"
              }}
            >
              <Text
                style={{
                  color: "white",
                  fontWeight: "bold",
                  fontFamily: "serif"
                }}
              >
                Press here to create a 30 sec intro video
              </Text>
              <Text
                style={{
                  color: "white",
                  fontWeight: "bold",
                  fontFamily: "serif"
                }}
              >
                to say hello to the people you share with
              </Text>
            </View>

            <View
              style={{
                alignItems: "center",
                marginTop: 10,
                borderBottomColor: "#eeeeef",
                borderBottomWidth: 1,
                paddingBottom: 15,
                width: "90%"
              }}
            >
              <Text
                style={{
                  color: "#7f7f7f",
                  fontWeight: "bold",
                  width: "100%",
                  textAlign: "center",
                  fontFamily: "serif"
                }}
              >
                (Video will be presented in full screen portrait style)
              </Text>
            </View>
            <View
              style={{
                marginTop: 20,
                width: "90%",
                alignSelf: "center",
                borderRadius: 10,
                backgroundColor: "#f0f0f0",
                marginBottom: 10,
                height: 200
              }}
            >
              <View
                style={{
                  backgroundColor: "#f0f0f0",
                  display: "flex",
                  flexDirection: "row",
                  width: "100%",
                  alignItems: "center",
                  alignSelf: "center",
                  marginTop: 10,
                  borderBottomWidth: 1,
                  borderBottomColor: "#e1dcf0"
                }}
              >
                <View
                  style={{
                    backgroundColor: "#f0f0f0",
                    width: "15%",
                    alignItems: "center",
                    padding: 20,
                    borderRadius: 8
                  }}
                >
                  <Image
                    source={require("./../../images/facebook.png")}
                    style={{ width: 20, height: 20 }}
                  />
                </View>
                <Text
                  style={{
                    color: "blue",
                    fontSize: 18,
                    marginLeft: "10%",
                    fontFamily: "serif"
                  }}
                >
                  Invite with Social
                </Text>
              </View>

              <View
                style={{
                  backgroundColor: "#f0f0f0",
                  display: "flex",
                  flexDirection: "row",
                  width: "100%",
                  alignItems: "center",
                  alignSelf: "center",
                  borderBottomWidth: 1,
                  borderBottomColor: "#e1dcf0"
                }}
              >
                <View
                  style={{
                    backgroundColor: "#f0f0f0",
                    width: "15%",
                    alignItems: "center",
                    padding: 20,
                    borderRadius: 8
                  }}
                >
                  <Image
                    source={require("./../../images/email.png")}
                    style={{ width: 20, height: 20 }}
                  />
                </View>
                <Text
                  style={{
                    color: "blue",
                    fontSize: 18,
                    marginLeft: "10%",
                    fontFamily: "serif"
                  }}
                >
                  Invite with Email
                </Text>
              </View>

              <View
                style={{
                  backgroundColor: "#f0f0f0",
                  display: "flex",
                  flexDirection: "row",
                  width: "100%",
                  alignItems: "center",
                  alignSelf: "center"
                }}
              >
                <View
                  style={{
                    backgroundColor: "#f0f0f0",
                    width: "15%",
                    alignItems: "center",
                    padding: 20,
                    borderRadius: 8
                  }}
                >
                  <Image
                    source={require("./../../images/list.png")}
                    style={{ width: 20, height: 20 }}
                  />
                </View>
                <Text
                  style={{
                    color: "blue",
                    fontSize: 18,
                    marginLeft: "10%",
                    fontFamily: "serif"
                  }}
                >
                  Check Emails
                </Text>
              </View>
            </View>
          </ScrollView>
          {/* <Footer /> */}
        </SafeAreaView>
      </>
    );
  }
}
