import React, { useState } from "react";

import { Text, View, Dimensions, StyleSheet, TouchableOpacity, Alert } from "react-native";
import Constants from 'expo-constants';
import DialogInput from "react-native-dialog-input";

const DEVICE_WIDTH = Dimensions.get("window").width;
const DEVICE_HEIGHT = Dimensions.get("window").height;



export default function Post() {
  
  const [dialogVisible, setDialogVisible] = useState(false); // Visible Dialog Box
  const [hint, setHint] = useState("");
  const [inputNumber, setInputNumber] = useState(0);
  //Name, Age, Gender, School, Bio
  const [commentData, setCommentData] = useState([
    "Not set",
  ]);

  function callDialog(attribute) {
    setHint(attribute);
    if (attribute == "Connect Me!") {
      setInputNumber(0);
    }
    setDialogVisible(true);
  }
  
  return (
    <View style = {styles.container}>
    <View
      style={styles.border}
    >
      
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
        <Text style={styles.standard}> - to - </Text>
        <Text style={styles.standard}>Time</Text>
      </View>
      {/**Details */}
      <View>
        <Text style={styles.standard}>
          Come with me to wonderful Davis California!
        </Text>
      </View>
        <Text style={styles.standard}>{commentData[0]}</Text>
        <TouchableOpacity onPress={() => callDialog("Connect Me!")}>
            <Text>Comment</Text>
        </TouchableOpacity>
      <View>

      </View>

      {/**More*/}
      <View></View>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  
  border: {
    width: DEVICE_WIDTH / 1.1,
    height: DEVICE_WIDTH / 1.5,
    
    justifyContent: "top",
    alignItems: "left",
    borderRadius: 10,
    backgroundColor: "white",
    borderWidth: 10,
    borderColor: "purple",
    padding: 10,
    
  },

  standard: {
    fontSize: 20,
  },

  big: {
    justifyContent: "center",
    fontSize: 30,
  },


  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
