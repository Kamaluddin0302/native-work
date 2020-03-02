import React from "react";
import { Text, StyleSheet, View, ScrollView, Image, TouchableOpacity } from 'react-native';
import { CustomHeader } from "./../../component";

class Screen2 extends React.Component {
    render() {
        return (
            <View>
            <CustomHeader
                path={this.props.navigation}
                openDrawer={this.props.navigation}
            />
            <ScrollView>
                <View>
                    <Text style={styles.heading}>Alerts</Text>
                    <Text style={styles.company_name}>Company Name</Text>
                    <View style={styles.time_sec}>
                        <Text style={styles.time_sec_text}>Data: 01-03-2020</Text>
                        <Text style={styles.time_sec_text}>Time: 10:24 AM</Text>
                    </View>
                    <TouchableOpacity>
                        <View style={styles.message_sec}>
                            <Image
                                style={styles.message_image}
                                source={require('./../../images/speech-bubble.png')}
                            />
                            <Text style={styles.message_text}>Message</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </ScrollView>
            </View>
        );
    }
}

export default Screen2
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        marginTop: 30
    },
    heading: {
        textAlign: "center",
        color: "blue",
        fontSize: 20,
        fontWeight: "bold",
        marginTop: 20
    },
    company_name: {
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 25,
        color: "#f9d534",
        marginTop: 100
    },
    time_sec: {
        display: "flex",
        flexDirection: "row",
    },
    time_sec_text: {
        width: "50%",
        textAlign: "center",
    },
    message_sec: {
        backgroundColor: "#f9d534",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        width: "90%",
        alignSelf: "center",
        padding: "5%",
        borderRadius: 8,
        marginTop: 80
    },
    message_image: {
        width: 20,
        height: 20
    },
    message_text: {
        color: "white",
        marginLeft: "2%"
    }
});

