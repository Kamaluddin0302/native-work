import React from "react";
import { Header, Icon, Drawer } from "native-base";
import {
  View,
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity
} from "react-native";

import { Tab1, Tab2, CustomHeader } from "./../../component";
import Ionicons from "react-native-vector-icons/Ionicons";
import Mdicons from "react-native-vector-icons/MaterialCommunityIcons";

import { Tab, Tabs } from "native-base";
class Home extends React.Component {
  static navigationOptions = {
    header: null
  };
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "flex-start" }}>
        <CustomHeader
          path={this.props.navigation}
          openDrawer={this.props.navigation}
        />

          <Text style={styles.serchClick}>Search.Click.Connect</Text>
          <Tabs
            tabBarUnderlineStyle={{
              height: 0
            }}
            style={styles.tab}
          >
            {/* service tab */}
            <Tab
              heading="Service needed"
              style={{ borderBottomWidth: 0 }}
              tabStyle={{ backgroundColor: "#f6f6f7" }}
              textStyle={{ color: "#686868" }}
              activeTabStyle={{ backgroundColor: "#f6d13d", borderRadius: 0 }}
              activeTextStyle={{ color: "#fff", fontWeight: "normal" }}
              tabBarUnderlineStyle={{ backgroundColor: "#f65857" }}
            >
              <Tab1 />
            </Tab>
            {/* company tab */}
            <Tab
              heading="Company name"
              style={{ borderBottomWidth: 0 }}
              tabStyle={{ backgroundColor: "#f6f6f7" }}
              textStyle={{ color: "#686868" }}
              activeTabStyle={{ backgroundColor: "#f6d13d", borderRadius: 0 }}
              activeTextStyle={{ color: "#fff", fontWeight: "normal" }}
              tabBarUnderlineStyle={{ backgroundColor: "#f65857" }}
            >
              <Tab2 />
            </Tab>
          </Tabs>
        </View>
    );
  }
}
// styling of the react native elements
let styles = StyleSheet.create({
  container: {
    flex: 1
  },
  _header: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  logo: {
    borderRadius: 100,
    borderWidth: 1,
    borderColor: "white",
    padding: 5
  },
  _manue_icon: {
    margin: 0,
    padding: 0,
    color: "white"
  },
  tab: { margin: 10 },
  serchClick: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
    margin: 10
  }
});
export default Home;
