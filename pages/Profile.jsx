import React, { useState } from "react";
import { Text, View, TouchableOpacity } from "react-native";

import DialogInput from "react-native-dialog-input";

export default function Profile(props) {
  const [dialogVisible, setDialogVisible] = useState(false); // Visible Dialog Box

  //Hint tells the user what to input
  const [hint, setHint] = useState("Name");

  //Name, Age, Gender, School, Bio
  const hints = ["Name", "Age", "Gender", "School", "Bio"];
  const [profileData, setProfileData] = useState([
    {
      Name: "",
      Age: "",
      Gender: "",
      School: "",
      Bio: "",
    },
  ]);

  function callDialog(attribute) {
    setHint(attribute);
    setDialogVisible(true);
  }

  function resetData() {
    for (let key in hints) {
      //console.log(hints[key]);
      setProfileData((previousState) => {
        return { ...previousState, [hints[key]]: "" };
      });
    }
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
          setProfileData((previousState) => {
            return { ...previousState, [hint]: inputText };
          });

          setDialogVisible(!dialogVisible);
        }}
        closeDialog={() => {
          setDialogVisible(!dialogVisible);
        }}
      ></DialogInput>
      <Text style={{ fontSize: 30 }}>Name: {profileData.Name}</Text>
      <TouchableOpacity onPress={() => callDialog("Name")}>
        <Text>Edit</Text>
      </TouchableOpacity>
      <Text style={{ fontSize: 30 }}>Age: {profileData.Age}</Text>
      <TouchableOpacity onPress={() => callDialog("Age")}>
        <Text>Edit</Text>
      </TouchableOpacity>
      <Text style={{ fontSize: 30 }}>Gender: {profileData.Gender}</Text>
      <TouchableOpacity onPress={() => callDialog("Gender")}>
        <Text>Edit</Text>
      </TouchableOpacity>
      <Text style={{ fontSize: 30 }}>School: {profileData.School}</Text>
      <TouchableOpacity onPress={() => callDialog("School")}>
        <Text>Edit</Text>
      </TouchableOpacity>
      <Text style={{ fontSize: 30 }}>Bio: {profileData.Bio}</Text>

      <TouchableOpacity onPress={() => callDialog("Bio")}>
        <Text>Edit</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => resetData()}>
        <Text>{"\n"}Clear</Text>
      </TouchableOpacity>
    </View>
  );
}
