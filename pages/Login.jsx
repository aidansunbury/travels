import * as React from "react";
import { Text, View, TouchableOpacity } from "react-native";

export default function Login({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <TouchableOpacity onPress={() => navigation.navigate("Tab")}>
        <Text>Login</Text>
      </TouchableOpacity>
    </View>
  );
}
