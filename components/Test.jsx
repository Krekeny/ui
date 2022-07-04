import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

export const MyButton = ({ onPress, text }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: "violet",
    display: "inline",
  },
  text: { color: "black", flex: "1" },
});
