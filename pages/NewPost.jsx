import React, { useState } from "react";
import { Text, View, TextInput, TouchableOpacity } from "react-native";

export default function NewPost() {
  const [postData, setPostData] = useState({
    Origin: "",
    Destination: "",
    DepartureDate: "",
    Description: "",
  });

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "top",
        alignItems: "left",
        padding: 20,
      }}
    >
      <Text style={{ fontSize: 30, paddingBottom: 10 }}>New Post</Text>
      <View style={{ flexDirection: "row", paddingBottom: 10 }}>
        <Text style={{ fontSize: 15 }}>Origin: </Text>
        <TextInput
          style={{ height: 20 }}
          placeholder="Berkeley CA"
          onChangeText={(newText) => {
            setPostData((previousState) => {
              return { ...previousState, Origin: newText };
            });
          }}
          defaultValue={""}
        />
      </View>
      <View style={{ flexDirection: "row", paddingBottom: 10 }}>
        <Text style={{ fontSize: 15 }}>Desitination: </Text>
        <TextInput
          style={{ height: 20 }}
          placeholder="Davis CA"
          onChangeText={(newText) => {
            setPostData((previousState) => {
              return { ...previousState, Destination: newText };
            });
          }}
          defaultValue={""}
        />
      </View>
      <View style={{ flexDirection: "row", paddingBottom: 10 }}>
        <Text style={{ fontSize: 15 }}>Departure Date: </Text>
        <TextInput
          style={{ height: 20 }}
          placeholder="2022-10-15"
          onChangeText={(newText) => {
            setPostData((previousState) => {
              return { ...previousState, DepartureDate: newText };
            });
          }}
          defaultValue={""}
        />
      </View>
      <View style={{ flexDirection: "column", paddingBottom: 10 }}>
        <Text style={{ fontSize: 15 }}>Desciption: </Text>
        <TextInput
          style={{ height: 20 }}
          placeholder="Come with me to Davis!"
          onChangeText={(newText) => {
            setPostData((previousState) => {
              return { ...previousState, Description: newText };
            });
          }}
          defaultValue={""}
        />
      </View>
      <Text>
        {postData.Origin} {"\n"}
        {postData.Destination} {"\n"}
        {postData.DepartureDate} {"\n"}
        {postData.Description} {"\n"}
      </Text>
      <TouchableOpacity onPress={() => console.log(postData)}>
        <Text>log</Text>
      </TouchableOpacity>
    </View>
  );
}
//
