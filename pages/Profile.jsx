import React, { useState } from "react";
import { Text, View, TouchableOpacity } from "react-native";

import DialogInput from "react-native-dialog-input";

export default function Profile(props) {
  const [dialogVisible, setDialogVisible] = useState(false); // Visible Dialog Box
  const [hint, setHint] = useState("");
  const [inputNumber, setInputNumber] = useState(0);
  //Name, Age, Gender, School, Bio
  const [profileData, setProfileData] = useState([
    "Not set",
    "Not set",
    "Not set",
    "Not set",
    "Not set",
  ]);

  /**
   * 
   * setModalVisible((modalVisible: any[]) => ({
    ...modalVisible,
    [modalNumber]: !modalVisible[modalNumber],
  }));
   */
  function callDialog(attribute) {
    setHint(attribute);
    if (attribute == "Name") {
      setInputNumber(0);
    } else if (attribute == "Age") {
      setInputNumber(1);
    } else if (attribute == "Gender") {
      setInputNumber(2);
    } else if (attribute == "School") {
      setInputNumber(3);
    } else if (attribute == "Bio") {
      setInputNumber(4);
    }
    setDialogVisible(true);
  }

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "top",
        alignItems: "left",
        padding: 10,
      }}
    >
      <DialogInput
        isDialogVisible={dialogVisible}
        hintInput={hint}
        submitInput={(inputText) => {
          setProfileData((profileData) => ({
            ...profileData,
            [inputNumber]: inputText,
          }));
          setDialogVisible(!dialogVisible);
        }}
        closeDialog={() => {
          setDialogVisible(!dialogVisible);
        }}
      ></DialogInput>

      
      <Text style={{ fontSize: 30 }}>Name: {profileData[0]}</Text>
      <TouchableOpacity onPress={() => callDialog("Name")}>
        <Text>Edit</Text>
      </TouchableOpacity>
      <Text style={{ fontSize: 30 }}>Age: {profileData[1]}</Text>
      <TouchableOpacity onPress={() => callDialog("Age")}>
        <Text>Edit</Text>
      </TouchableOpacity>
      <Text style={{ fontSize: 30 }}>Gender: {profileData[2]}</Text>
      <TouchableOpacity onPress={() => callDialog("Gender")}>
        <Text>Edit</Text>
      </TouchableOpacity>
      <Text style={{ fontSize: 30 }}>School: {profileData[3]}</Text>
      <TouchableOpacity onPress={() => callDialog("School")}>
        <Text>Edit</Text>
      </TouchableOpacity>
      <Text style={{ fontSize: 20 }}>Bio: {profileData[4]}</Text>

      <TouchableOpacity onPress={() => callDialog("Bio")}>
        <Text>Edit</Text>
      </TouchableOpacity>
    </View>
  );
}
