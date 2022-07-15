import React, { useEffect, useState } from "react";
import { View } from "react-native";
import AppFormPicker from "../components/AppFormPicker";
import { AppForm, AppFormField, SubmitButton } from "../components/forms";
import { StyleSheet } from "react-native";
import * as Yup from "yup";
import Screen from "../components/Screen";
import CategoryPickerItem from "../components/CategoryPickerItem";
import FormImagePicker from "../components/forms/FormImagePicker";
import * as Location from "expo-location";
import useLocation from "../hooks/useLocation";

// import styles from "../config/styles";

const categories = [
  { label: "Furniture", value: 1, backgroundColor: "red", icon: "lamp" },
  { label: "Cars", value: 2, backgroundColor: "orange", icon: "car" },
  {
    label: "Cameras",
    value: 3,
    backgroundColor: "teal",
    icon: "camera",
  },
  {
    label: "Games",
    value: 4,
    backgroundColor: "lightgreen",
    icon: "gamepad",
  },
  {
    label: "Clothing",
    value: 5,
    backgroundColor: "green",
    icon: "shoe-sneaker",
  },
  {
    label: "Sports",
    value: 6,
    backgroundColor: "lightblue",
    icon: "basketball",
  },
  {
    label: "Movies & Music",
    value: 7,
    backgroundColor: "maroon",
    icon: "headphones",
  },
  { label: "Books", value: 8, backgroundColor: "purple", icon: "book-open" },
  {
    label: "Others",
    value: 9,
    backgroundColor: "lightgrey",
    icon: "box",
  },
];

function ListingEditScreen(props) {
  const location = useLocation();

  const validationSchema = Yup.object().shape({
    title: Yup.string().required().min(1).label("Title"),
    price: Yup.number().required().min(1).max(10000).label("Price"),
    description: Yup.string().label("Description"),
    category: Yup.object().required().nullable().label("Category"),
    images: Yup.array().min(1, "Please select at least one image"),
  });

  return (
    <Screen>
      <View style={styles.container}>
        <AppForm
          initialValues={{
            title: "",
            price: "",
            description: "",
            category: null,
            images: [],
          }}
          onSubmit={(values) => console.log(location)}
          validationSchema={validationSchema}>
          <FormImagePicker name="images" />
          <AppFormField maxLength={255} name="title" placeholder="Title" />
          <AppFormField
            keyboardType="numeric"
            maxLength={8}
            name="price"
            placeholder="Price"
            width={120}
          />
          <AppFormPicker
            items={categories}
            name="category"
            PickerItemComponent={CategoryPickerItem}
            numberOfColumns={3}
            placeholder={"Category"}
            width={220}
          />
          <AppFormField
            multiline
            maxLength={255}
            name="description"
            numberOfLines={3}
            placeholder="Description"
          />
          <SubmitButton title="Post" />
        </AppForm>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});

export default ListingEditScreen;
