import React, { useEffect, useState } from "react";
import * as ImagePicker from "expo-image-picker";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  SafeAreaView,
  Image,
  TouchableOpacity,
  TouchableNativeFeedback,
  Button,
  Alert,
} from "react-native";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import {
  useDimensions,
  useDeviceOrientation,
} from "@react-native-community/hooks";

import ViewImageScreen from "./app/screens/ViewImageScreen";
import AppText from "./app/components/AppText";
import AppButton from "./app/components/AppButton";
import Card from "./app/components/Card";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import MessagesScreen from "./app/screens/MessagesScreen";
import Icon from "./app/components/Icon";
import Screen from "./app/components/Screen";
import AccountScreen from "./app/screens/AccountScreen";
import AppTextInput from "./app/components/AppTextInput";
import AppPicker from "./app/components/AppPicker";
import LoginScreen from "./app/screens/LoginScreen";
import ListingEditScreen from "./app/screens/ListingEditScreen";
import ImageInput from "./app/components/ImageInput";
import ImageInputList from "./app/components/ImageInputList";
import AuthNavigator from "./app/navigation/AuthNavigator";
import navigationTheme from "./app/navigation/navigationTheme";
import AppNavigator from "./app/navigation/AppNavigator";

const categories = [
  { label: "Furniture", value: 1 },
  { label: "Clothing", value: 2 },
  { label: "Cameras", value: 3 },
];

const Stack = createStackNavigator();
const StackNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="Tweets" component={Tweets} />
    <Stack.Screen
      name="TweetDetails"
      component={TweetDetails}
      options={{
        headerStyle: {
          backgroundColor: "tomato",
        },
      }}
    />
  </Stack.Navigator>
);

const Account = () => (
  <Screen>
    <Text>Account</Text>
  </Screen>
);

const Tab = createBottomTabNavigator();
const TabNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen name="Feed" component={Tweets} />
    <Tab.Screen name="Account" component={Account} />
  </Tab.Navigator>
);

const Tweets = ({ navigation }) => (
  <Screen>
    <Text>Tweet</Text>
    <Button
      title="View Tweet"
      onPress={() => navigation.navigate("TweetDetails", { id: 1 })}
    />
  </Screen>
);
const TweetDetails = ({ route }) => (
  <Screen>
    <Text>Tweet Details {route.params.id}</Text>
  </Screen>
);

export default function App() {
  return (
    <NavigationContainer theme={navigationTheme}>
      {/* <AuthNavigator /> */}
      <AppNavigator />
      {/* <StackNavigator /> */}
      {/* <TabNavigator /> */}
    </NavigationContainer>
    // <Screen>
    //   <ImageInputList
    //     imageUris={imageUris}
    //     onRemoveImage={handleRemove}
    //     onAddImage={handleAdd}
    //   />
    // </Screen>
    // <View style={styles.container}>
    //   <View style={styles.box1}></View>
    //   <View style={styles.box2}></View>
    //   <View style={styles.box3}></View>
    // </View>
    // <ListingEditScreen />
    // <ListingDetailsScreen />
    // <View
    //   style={{
    //     backgroundColor: "#f8f4f4",
    //     padding: 20,
    //     paddingTop: 100,
    //   }}>
    //   <Card
    //     title="Red jacked for sale"
    //     subTitle="100$"
    //     image={require("./app/assets/jacket.jpg")}
    //   />
    // </View>
    // <WelcomeScreen />
    // <ViewImageScreen />
    // <Screen>
    //   <AppTextInput placeholder="Username" icon={"email"} />
    //   <AppPicker
    //     selectedItem={category}
    //     onSelectItem={(item) => setCategory(item)}
    //     items={categories}
    //     placeholder={"Category"}
    //     icon={"apps"}
    //   />
    // </Screen>
    // <LoginScreen />
    // <ListingEditScreen />
    // <MessagesScreen />
    // <Screen>
    //   <Icon name="email" size={40} />
    // </Screen>
    // <MessagesScreen />
    // <View style={styles.container}>
    //   <AppButton title="Login" onPress={()=>console.log('hello')}/>
    //   <AppText>I love react native</AppText>
    // </View>
    // <SafeAreaView style={styles.container}>
    //   <Text onPress={handlePress}>
    //     Open up App.js to start working on your app a very very long text for
    //     mobile screen!
    //   </Text>
    //   <TouchableNativeFeedback onPress={() => console.log("image tapped")}>
    //     <Image
    //       // blurRadius={10}
    //       source={{
    //         uri: "https://picsum.photos/200/300",
    //         width: 200,
    //         height: 300,
    //       }}
    //     />
    //   </TouchableNativeFeedback>
    //   <Button
    //     title="Click me"
    //     onPress={() =>
    //       // this api doesn't work on android
    //       Alert.prompt("My title", "My message", (text) => console.log(text))
    //     }
    //   />
    //   {/* <StatusBar style="auto" /> */}
    // </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#fff",
    // flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  // box1: {
  //   width: 100,
  //   height: 100,
  //   backgroundColor: "dodgerblue",
  // },
  // box2: {
  //   width: 100,
  //   height: 100,
  //   backgroundColor: "tomato",
  // },
  // box3: {
  //   width: 100,
  //   height: 100,
  //   backgroundColor: "gold",
  // },
});
