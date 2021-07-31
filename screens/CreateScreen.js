import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from "react-native";
import * as ImagePicker from "expo-image-picker";
import axios from "axios";
import { API, API_CREATE } from "../constants/API";
import { lightStyles, commonStyles } from "../styles/commonStyles";
import { useSelector } from "react-redux";
import { FontAwesome } from "@expo/vector-icons";

export default function CreateScreen({ navigation }) {

  const styles = { ...lightStyles, ...commonStyles }
  const token = useSelector((state) => state.auth.token);

  const [title, setTitle] = useState("");
  const [ingredient, setIngredient] = useState("");
  const [preparation, setPreparation] = useState("");

  async function savePost() {
    const post = {
      "title": title,
      "ingredient": ingredient, 
      "preparation": preparation,
    }
    
    try {
      console.log(token);
      const response = await axios.post(API + API_CREATE, post, {
        headers: { Authorization: `JWT ${token}` }
      });
      console.log(response.data)
      navigation.navigate("Index", { post: post })
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <View style={styles.container}>
      <View style={{ margin: 20 }}>
        <Text style={[additionalStyles.label, styles.text]}>Recipe name:</Text>
        <TextInput
          style={additionalStyles.input}
          value={title}
          onChangeText={text => setTitle(text)}
        />
        <Text style={[additionalStyles.label, styles.text]}>Ingredient:</Text>
        <TextInput
          multiline
          numberOfLines={4}
          style={additionalStyles.input}
          value={ingredient}
          onChangeText={text => setIngredient(text)}
        />
        <Text style={[additionalStyles.label, styles.text]}>Preparation steps:</Text>
        <TextInput
          multiline
          numberOfLines={4}
          style={additionalStyles.input}
          value={preparation}
          onChangeText={text => setPreparation(text)}
        />
        <TouchableOpacity onPress={''}>
          <Text style={[additionalStyles.label, styles.text]}>Upload photo</Text>
          <FontAwesome name="upload" size={48} style={{ color: styles.headerTint, marginRight: 15 }} />
        </TouchableOpacity>
      <TouchableOpacity style={[styles.button, {marginTop: 20}]} onPress={savePost}>
        <Text style={styles.buttonText}>
          Save
        </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const additionalStyles = StyleSheet.create({
  input: {
    fontSize: 24,
    borderWidth: 1,
    borderColor: "black",
    marginBottom: 15,
  },
  label: {
    fontSize: 28,
    marginBottom: 10,
    marginLeft: 5,
    fontWeight:"bold",
  }
});