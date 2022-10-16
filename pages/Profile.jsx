import React, { useState } from "react";
import { Text, View, TouchableOpacity, Image } from "react-native";

import DialogInput from "react-native-dialog-input";

export default function Profile(props) {
  const [dialogVisible, setDialogVisible] = useState(false); // Visible Dialog Box

  //Hint tells the user what to input
  const [hint, setHint] = useState("Name");

  //Name, Age, Gender, School, Bio
  const hints = ["Image", "Name", "Age", "Gender", "School", "Bio"];
  const [profileData, setProfileData] = useState([
    {
      ImageUrl: "",
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

  //Resets all profile Data to blank
  function resetData() {
    for (let key in hints) {
      //console.log(hints[key]);
      setProfileData((previousState) => {
        return { ...previousState, [hints[key]]: "" };
      });
    }
    setProfileData((previousState) => {
      return {
        ...previousState,
        ["Image"]:
          "https://static.vecteezy.com/system/resources/previews/002/318/271/original/user-profile-icon-free-vector.jpg",
      };
    });
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
      <View style={{ padding: 10, alignSelf: "center" }}>
        <Image
          style={{ width: 200, height: 200, alignSelf: "center" }}
          source={{
            uri: profileData.Image,
          }}
        ></Image>
      </View>

      <TouchableOpacity onPress={() => callDialog("Image")}>
        <Text>Change Image Url</Text>
      </TouchableOpacity>
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
