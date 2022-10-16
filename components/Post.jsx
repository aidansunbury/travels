import * as React from "react";
import { Text, View, Dimensions } from "react-native";

export default function Post() {
  const DEVICE_WIDTH = Dimensions.get("window").width;
  const DEVICE_HEIGHT = Dimensions.get("window").height;
  return (
    <View
      style={{
        width: DEVICE_WIDTH / 1.1,
        height: DEVICE_WIDTH / 1.5,
        justifyContent: "center",
        alignItems: "left",
        borderRadius: 10,
        backgroundColor: "white",
        borderWidth: 10,
        borderColor: "purple",
        padding: 10,
      }}
    >
      {/**Location */}
      <View style={{ borderBottomWidth: 3 }}>
        <View style={{ flexDirection: "row" }}>
          <Text style={{ fontSize: 30 }}>Start</Text>
          <Text style={{ fontSize: 30 }}> - to - </Text>
          <Text style={{ fontSize: 30 }}>End</Text>
        </View>
      </View>
      {/**Dates*/}
      <View style={{ flexDirection: "row" }}>
        <Text style={{ fontSize: 20 }}>Time</Text>
        <Text style={{ fontSize: 20 }}> - to - </Text>
        <Text style={{ fontSize: 20 }}>Time</Text>
      </View>
      {/**Details */}
      <View>
        <Text style={{ fontSize: 10 }}>
          Come with me to wonderful Davis California!
        </Text>
      </View>
      {/**More*/}
      <View></View>
    </View>
  );
}
