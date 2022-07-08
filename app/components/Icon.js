import React from "react";
import { View, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function Icon({
  name,
  size = 40,
  backgroundColor = "#000000",
  iconColor = "#ffffff",
}) {
  return (
    <View
      style={{
        backgroundColor,
        width: size,
        height: size,
        borderRadius: size / 2,
        alignItems: "center",
        justifyContent: "center",
      }}>
      <MaterialCommunityIcons name={name} size={size * 0.5} color={iconColor} />
    </View>
  );
}

const styles = StyleSheet.create({
  iconContainer: {},
});

export default Icon;
