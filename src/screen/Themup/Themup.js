import React from "react";
import {
  Text,
  View,
  SafeAreaView,
  ScrollView,
  FlatList,
  TouchableOpacity
} from "react-native";
import Card from "../../component/Card/Card";
import Product from "../../component/Object/Object";
import { Item, Input, Icon, Button } from "native-base";
import Picker from "../../component/Picker/Picker";
import { CustomHeader } from "./../../component";

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
          <ScrollView style={{ backgroundColor: "white", marginBottom: "17%" }}>
            <Text
              style={{
                textAlign: "center",
                fontWeight: "bold",
                color: "#7e7e7e",
                marginTop: 15
              }}
            >
              Whatcha Looking for? We'll Round Them Up.
            </Text>
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                marginTop: 15
              }}
            >
              <Item
                style={{
                  width: "90%",
                  backgroundColor: "rgb(240, 240, 240)",
                  borderRadius: 50,
                  paddingLeft: 20
                }}
              >
                <Icon name="ios-search" />
                <Input placeholder="Search" />
              </Item>
            </View>
            <View
              style={{
                alignItems: "center",
                alignContent: "center",
                textAlign: "center",
                marginLeft: "5%"
              }}
            >
              <Picker />
              <FlatList
                numColumns={2}
                data={Product}
                renderItem={({ item }) => (
                  <TouchableOpacity
                    style={{
                      width: "47%",
                      borderRadius: 20,
                      alignItems: "center"
                    }}
                  >
                    <Card productview={item} />
                  </TouchableOpacity>
                )}
                keyExtractor={item => item.id}
              />
            </View>
            <Button
              style={{
                justifyContent: "center",
                width: "90%",
                borderRadius: 10,
                alignSelf: "center",
                height: 55,
                marginTop: 20
              }}
            >
              <Text
                style={{
                  color: "#ffff",
                  fontWeight: "bold",
                  fontSize: 18
                }}
              >
                Switch to Busines Account
              </Text>
            </Button>
          </ScrollView>
          {/* <Footer /> */}
        </SafeAreaView>
      </>
    );
  }
}
