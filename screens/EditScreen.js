import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from "react-native";
import { commonStyles, lightStyles } from "../styles/commonStyles";
import { API, API_POSTS } from "../constants/API";
import axios from "axios";
import { useSelector } from "react-redux";

export default function EditScreen({ navigation, route }) {

  const [title, setTitle] = useState("");
  const [ingredient, setIngredient] = useState("");
  const [preparation, setPreparation] = useState("");
  const styles = { ...lightStyles, ...commonStyles }
  const token = useSelector((state) => state.auth.token);

  useEffect(() => {
    const post = route.params.post
    setTitle(post.title);
    setIngredient(post.ingredient);
    setPreparation(post.preparation)
  }, [])

  async function editPost() {
    const post = {
      "title": title,
      "ingredient": ingredient,
      "preparation": preparation,
    }
    const id = route.params.post.id
    try {
      console.log(token);
      const response = await axios.put(API + API_POSTS + "/" + id, post, {
        headers: { Authorization: `JWT ${token}` },
      })
      console.log(response.data)
      navigation.navigate("Index")
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
      <TouchableOpacity style={[styles.button, {marginTop: 20}]} onPress={editPost}>
        <Text style={styles.buttonText}>
          Save
        </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
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
    marginLeft: 5
  }
});
