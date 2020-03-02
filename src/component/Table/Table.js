import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default class ExampleTwo extends Component {
    render() {
        return (
            <View
                style={styles.mainView}
            >
                <View style={styles.headerView}>
                    <Text style={styles.empty} ></Text>
                    <Text style={styles.header1} >Trial Sub</Text>
                    <Text style={styles.header1}>Paid Sub</Text>
                    <Text style={styles.header2} >Customer</Text>
                </View>
                <View style={styles.ring1view} >
                    <Text style={styles.ring1} >Ring 1</Text>
                    <Text style={styles.ring2} >0</Text>
                    <Text style={styles.ring2} >1</Text>
                    <Text style={styles.ring3} >2</Text>
                </View>
                <View style={styles.rign2view} >
                    <Text style={styles.ring1}>Ring 1</Text>
                    <Text style={styles.ring2} >0</Text>
                    <Text style={styles.ring2} >0</Text>
                    <Text style={styles.ring3}>1</Text>
                </View>
            </View>
        )
    }
}



const styles = StyleSheet.create({
    mainView: {
        width: "90%",
        borderWidth: 1,
        borderColor: "#d3c9f4",
        alignSelf: "center",
        height: 150,
        borderRadius: 5
    },
    headerView: {
        width: "100%",
        backgroundColor: "#f9d534",
        borderBottomColor: "#d3c9f4",
        borderBottomWidth: 1,
        display: "flex",
        flexDirection: "row",
        height: 49

    },
    ring1view: {
        width: "100%",
        backgroundColor: "white",
        borderBottomColor: "#d3c9f4",
        borderBottomWidth: 1,
        display: "flex",
        flexDirection: "row",
        height: 49
    },
    rign2view: {
        width: "100%",
        backgroundColor: "#f0f0f0",
        display: "flex",
        flexDirection: "row",
        height: 49
    },
    empty: {
        width: "19%",
        borderRightWidth: 1,
        justifyContent: "center",
        borderRightColor: "#d3c9f4",
        textAlign: "center",
        height: "100%",
        alignItems: "center",
        color: "white"
    },
    header1: {
        width: "27%",
        borderRightWidth: 1,
        paddingTop: 15,
        borderRightColor: "#d3c9f4",
        textAlign: "center",
        height: "100%",
        alignSelf: "center",
        color: "white",
        fontFamily: "serif",
        fontWeight: "bold"
    },
    header2: {
        width: "27%",
        textAlign: "center",
        paddingTop: 15,
        height: "100%",
        color: "white",
        fontFamily: "serif",
        fontWeight: "bold"

    },
    ring1: {
        width: "19%",
        borderRightWidth: 1,
        paddingTop: 15,
        borderRightColor: "#d3c9f4",
        textAlign: "center",
        height: "100%",
        alignItems: "center",
        color: "#858585",
        fontFamily: "serif"
    },
    ring2: {
        width: "27%",
        borderRightWidth: 1,
        paddingTop: 15,
        borderRightColor: "#d3c9f4",
        textAlign: "center",
        height: "100%",
        alignSelf: "center",
        color: "#858585",
        fontFamily: "serif"
    },
    ring3: {
        width: "27%",
        textAlign: "center",
        paddingTop: 15,
        height: "100%",
        color: "#858585",
        fontFamily: "serif"
    }

});