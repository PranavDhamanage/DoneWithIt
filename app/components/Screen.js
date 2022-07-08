import React from "react";
import Constants from "expo-constants";
import { StyleSheet, SafeAreaView, View } from "react-native";

function Screen({ children, style }) {
  console.log(style);
  return (
    <SafeAreaView style={[styles.screen, { padding: 10 }]}>
      {children}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: { paddingTop: Constants.statusBarHeight, flex: 1 },
});

export default Screen;
