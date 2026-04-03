import { Text, View, StyleSheet, TouchableOpacity, Pressable} from "react-native";
import React from "react";
import { Link } from "expo-router";
import { Image } from "expo-image";
const onPressFunction = () => {
navigation.navigate('about');
}

export default function Index() {


  return (
    <View style={styles.container}>
      <Text>HI MADAN</Text>
      <Link href={"./about"}>Go to About</Link>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
