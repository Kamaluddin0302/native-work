// import { createAppContainer } from 'react-navigation';
// import { createStackNavigator } from 'react-navigation-stack';
// import { createBottomTabNavigator } from 'react-navigation-tabs';
// import { Login, Signup, Home, About, Contact, Product, Invite, Appoinment, Appoinment2, Alert} from './index'

// const AppNavigator = createStackNavigator({
//   // Login: {
//   //   screen: Login,
//   // },
//   // Signup: {
//   //   screen: Signup,
//   // },
//   // Product: {
//   //   screen: Product,
//   // },
//   // Invite: {
//   //   screen: Invite,
//   // },
//   // Home: {
//   //   screen: Home,
//   // },
//   Alert: {
//     screen: Alert,
//   },
//   About: {
//     screen: About,
//   },
//   Contact: {
//     screen: Contact,
//   }
// });

// // const AppNavigator1 = createBottomTabNavigator({
// //   // Login: {
// //   //   screen: Login,
// //   // },
// //   // Signup: {
// //   //   screen: Signup,
// //   // },
// //   Home: {
// //       screen: Home,
// //     },
// //     About: {
// //         screen: About,
// //       },
// //       Contact: {
// //         screen: Contact,
// //       }
// //   });
// // let StackNav = createAppContainer(AppNavigator)
// // let TabkNav = createAppContainer(AppNavigator1)
// export default createAppContainer(AppNavigator)

import { createAppContainer } from "react-navigation";
import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import { createDrawerNavigator } from "react-navigation-drawer";
import {
  Home,
  About,
  Contact,
  Notification,
  Setting,
  Shedule,
  Payment,
  Invite,
  Themup,
  Appointment,
  Alert,
  Alert1,
  Myherd
} from "./../screen/index";

import Icon from "react-native-vector-icons/Entypo";
import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
// Tab Novigation
import { createBottomTabNavigator } from "react-navigation-tabs";
const TabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Icon name="home" size={20} color={tintColor} />
        ),
        tabBarLabel: () => {
          return null;
        }
      }
    },
    Shedule: {
      screen: Shedule,
      navigationOptions: {
        tabBarLabel: null,

        tabBarIcon: ({ tintColor }) => (
          <Icon name="calendar" size={20} color={tintColor} />
        ),

        tabBarLabel: () => {
          return null;
        }
      }
    },
    Notification: {
      screen: Notification,
      navigationOptions: {
        tabBarLabel: null,
        tabBarIcon: ({ tintColor }) => (
          <Ionicons name="md-notifications" size={20} color={tintColor} />
        ),

        tabBarLabel: () => {
          return null;
        }
      }
    },
    Payment: {
      screen: Payment,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <FontAwesome name="dollar" size={20} color={tintColor} />
        ),
        tabBarLabel: () => {
          return null;
        }
      }
    },
    Setting: {
      screen: Setting,

      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Ionicons name="md-settings" size={20} color={tintColor} />
        ),
        tabBarLabel: () => {
          return null;
        }
      }
    }
  },
  {
    tabBarOptions: {
      activeTintColor: "rgb(229, 193, 61)",
      inactiveTintColor: "white",
      tabStyle: {
        backgroundColor: "rgb(104, 64, 238)"
      },
      style: {
        height: 65
      }
    }
  }
);

const DarawerNavigator = createDrawerNavigator(
  {
    Myherd: {
      screen: Myherd,
      navigationOptions: {
        header: null
      }
    },

    Home: {
      screen: TabNavigator,
      navigationOptions: {
        header: null
      }
    },
    Invite: {
      screen: Invite,
      navigationOptions: {
        header: null
      }
    },
    Themup: {
      screen: Themup,
      navigationOptions: {
        header: null
      }
    },
    Appointment: {
      screen: Appointment,
      navigationOptions: {
        header: null
      }
    },
    About: {
      screen: About,
      navigationOptions: {
        header: null
      }
    },
    Alert: {
      screen: Alert,
      navigationOptions: {
        header: null
      }
    },
    Alert1: {
      screen: Alert1,
      navigationOptions: {
        header: null
      }
    },
    Myherd: {
      screen: Myherd,
      navigationOptions: {
        header: null
      }
    }
  },

  {
    style: { marginTop: 20 },
    drawerPosition: "right"
  }
);

const AppNavigator = createStackNavigator({
  // TabNavigator: {
  //   screen: TabNavigator,
  //   navigationOptions: {
  //     header: null
  //   }
  // },
  Appointment: {
    screen: Appointment,
    navigationOptions: {
      header: null
    }
  },

  Home: {
    screen: DarawerNavigator,
    navigationOptions: {
      header: null
    }
  },

  About: {
    screen: About
  }
  // Contact: {
  //   screen: Contact
  // }
});

export default createAppContainer(AppNavigator);
