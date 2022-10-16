import React, { useState } from "react";

import {
  Text,
  View,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from "react-native";
import Constants from "expo-constants";
import DialogInput from "react-native-dialog-input";

import { Card } from "react-native-paper";

const DEVICE_WIDTH = Dimensions.get("window").width;
const DEVICE_HEIGHT = Dimensions.get("window").height;

export default function Post() {
  const [dialogVisible, setDialogVisible] = useState(false); // Visible Dialog Box
  const [hint, setHint] = useState("");
  const [inputNumber, setInputNumber] = useState(0);
  //Name, Age, Gender, School, Bio
  const [commentData, setCommentData] = useState([""]);

  function callDialog(attribute) {
    setHint(attribute);
    if (attribute == "Connect Me!") {
      setInputNumber(0);
    }
    setDialogVisible(true);
  }

  return (
    <View>
      <View style={styles.border}>
        <DialogInput
          isDialogVisible={dialogVisible}
          hintInput={hint}
          submitInput={(inputText) => {
            setCommentData((commentData) => ({
              ...commentData,
              [inputNumber]: inputText,
            }));
            setDialogVisible(!dialogVisible);
          }}
          closeDialog={() => {
            setDialogVisible(!dialogVisible);
          }}
        ></DialogInput>

        {/**Location */}
        <View style={{ borderBottomWidth: 2 }}>
          <View style={{ flexDirection: "row" }}>
            <Text style={styles.big}>Start</Text>
            <Text style={styles.big}> - to - </Text>
            <Text style={styles.big}>End</Text>
          </View>
        </View>
        {/**Dates*/}
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.standard}>Time</Text>
          <Text style={styles.standard}>- to -</Text>
          <Text style={styles.standard}>Time</Text>
        </View>
        {/**Details */}
        <View>
          <Text style={styles.standard}>
            Come with me to wonderful Davis California!
          </Text>
        </View>

        <View style={styles.container}>
          <Card style={styles.comment}>
            <Text style={styles.standard}>{commentData[0]}</Text>
            <TouchableOpacity onPress={() => callDialog("Connect Me!")}>
              <Text style={styles.standard}>Comment</Text>
            </TouchableOpacity>
          </Card>
        </View>

        {/**More*/}
        <View></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    width: DEVICE_WIDTH / 1.2,

    flex: 1,

    borderRadius: 10,
    backgroundColor: "#ecf0f1", // light pink purple

    borderWidth: 3,
    borderColor: "#7c5295",
  },

  comment: {
    backgroundColor: "#dfc0eb",
    flex: 1,
    padding: 5,
  },

  border: {
    width: DEVICE_WIDTH / 1.1,
    height: DEVICE_WIDTH / 1.5,

    justifyContent: "top",
    alignItems: "left",
    borderRadius: 10,
    backgroundColor: "#bca0dc", //light purple
    borderWidth: 3,
    borderColor: "#7c5295", //mid dark purple
    padding: 10,
  },

  standard: {
    fontSize: 15,
    padding: 5,
    fontFamily: "Cochin",
  },

  big: {
    justifyContent: "center",
    fontSize: 30,
  },
});
