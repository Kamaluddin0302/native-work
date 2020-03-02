import React, { Component } from "react";
import {
  View,
  Button,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity
} from "react-native";
import { Header, Icon, Drawer } from "native-base";
import Ionicons from "react-native-vector-icons/Ionicons";
import Mdicons from "react-native-vector-icons/MaterialCommunityIcons";
class CustomHeader extends React.Component {
  render() {
    return (
      <Header
        style={{ backgroundColor: "rgb(104, 64, 238)" }}
        paddingTop={30}
        height={100}
      >
        <View style={styles._header}>
          <View>
            <Ionicons
              name="md-notifications"
              size={25}
              style={{ color: "#ffffff" }}
            />
          </View>
          <View style={styles.logo}>
            <Mdicons name="cow" size={35} style={{ color: "#ffffff" }} />
          </View>
          <TouchableOpacity
            onPress={() => this.props.openDrawer.openDrawer()}
            style={styles._manue_icon}
          >
            <Icon name="menu" style={{ color: "#ffffff" }} />
          </TouchableOpacity>
        </View>
      </Header>
    );
  }
}

let styles = StyleSheet.create({
  _header: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
    // height: 200
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
  }
});

export default CustomHeader;
