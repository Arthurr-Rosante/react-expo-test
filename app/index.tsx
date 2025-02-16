import { Text, View, StyleSheet, ImageBackground } from "react-native";

import imgSrc from "@/assets/images/iced-coffee.png";

export default function Index() {
  return (
    <View style={styles.container}>
      <ImageBackground
        resizeMode="cover"
        source={imgSrc}
        style={styles.image}
      >
        <Text style={styles.text}> Coffee Shop</Text>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  text: {
    color: "white",
    fontSize: 42,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  image: {
    width: "100%",
    height: "100%",
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
});
