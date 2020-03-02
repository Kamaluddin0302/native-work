import React from "react";
import { Text, StyleSheet, View, ScrollView, TouchableOpacity } from 'react-native';
import Table from './../../component/Table/Table'
import { CustomHeader } from "./../../component";

class Screen extends React.Component {
    render() {
        return (
            <View>
            <CustomHeader
                path={this.props.navigation}
                openDrawer={this.props.navigation}
            />
                <ScrollView style={{ backgroundColor: "white", marginBottom: "17%" }}>
                <View >
                    <Text style={{ textAlign: "center", color: "blue", fontSize: 30, fontWeight: "bold", fontFamily: "serif" }}>My Herd</Text>
                    <Table />
                    <View style={styles.sec_2}>
                        <View style={styles.sec_section}>
                            <Text style={styles.sec_section1}>Current rewards this month:</Text>
                            <Text style={styles.sec_section2}>$0</Text>
                        </View>
                        <View style={styles.sec_section}>
                            <Text style={styles.sec_section1}>Rewards Pending:</Text>
                            <Text style={styles.sec_section2}>$9.5</Text>
                        </View>
                        <View style={styles.sec_section}>
                            <Text style={styles.sec_section1}>Lifetime Rewards:</Text>
                            <Text style={styles.sec_section2}>$9.5</Text>
                        </View>
                        <View style={styles.sec_section}>
                            <Text style={styles.sec_section1}>Total Connected Active Businesses:</Text>
                            <Text style={styles.sec_section2}>$0</Text>
                        </View>
                        <View style={styles.sec_section}>
                            <Text style={styles.sec_section1}>Total Connected Trials:</Text>
                            <Text style={styles.sec_section2}>$1</Text>
                        </View>
                        <View style={styles.sec_section3}>
                            <Text style={styles.sec_section1}>Total Herd</Text>
                            <Text style={styles.sec_section2}>$4</Text>
                        </View>
                    </View>
                    <TouchableOpacity>
                        <View style={styles.section_3}>
                            <Text style={styles.section_3_text}>Rewards Explain</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <View style={styles.section_3}>
                            <Text style={styles.section_3_text}>My COnnected Herd</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <View style={styles.section_3}>
                            <Text style={styles.section_3_text}>PayPal Payouts</Text>
                        </View>
                    </TouchableOpacity>

                </View>
            </ScrollView>
            </View>
        );
    }
}

export default Screen
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        marginTop: 30
    },
    sec_2: {
        width: "90%",
        alignSelf: "center",
        backgroundColor: "#f9d534",
        marginTop: 20,
        borderRadius: 8,
        paddingTop: 15,
        paddingBottom: 15
    },
    sec_section: {
        display: "flex",
        flexDirection: "row",
        width: "90%",
        alignSelf: "center",
        padding: "2%",
        borderBottomWidth: 1,
        borderBottomColor: "#ffec97"
    },
    sec_section1: {
        width: "90%"
    },
    sec_section2: {

    },
    sec_section3: {
        display: "flex",
        flexDirection: "row",
        width: "90%",
        alignSelf: "center",
        padding: "2%"
    },
    section_3: {
        backgroundColor: "#f0f0f0",
        width: "90%",
        alignSelf: "center",
        padding: "5%",
        marginTop: 10,
        borderRadius: 8,
        alignItems: "center"
    },
    section_3_text: {
        color: "blue",
        fontWeight: "bold",
        fontSize: 16
    }
});

