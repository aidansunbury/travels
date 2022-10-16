import * as React from "react";
import { Text, View } from "react-native";
import Post from "../components/Post";

export default function Feed() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center"}}>
      <Post></Post>
    </View>
  );
}
