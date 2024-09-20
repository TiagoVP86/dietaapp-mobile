import { Text, View, Image, StyleSheet, Pressable } from "react-native";
import { colors } from "@/constants/colors";
import { Link } from "expo-router";

export default function Index() {
  return (
    <View style={styles.container}>
      <Image source={require("../assets/images/logo.png")} />

      <Text style={styles.title}>
        Dieta<Text style={{ color: colors.white }}>.AI</Text>
      </Text>

      <Text style={styles.text}>
        Sua dieta personalizada com inteligência artificial
      </Text>

      <Link href="/step" asChild>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Gerar dieta</Text>
        </Pressable>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.background,
    paddingHorizontal: 16,
  },

  title: {
    fontSize: 36,
    fontWeight: "bold",
    color: colors.green,
  },

  text: {
    fontSize: 16,
    color: colors.white,
    width: 240,
    textAlign: "center",
    marginVertical: 8,
  },

  button: {
    width: "100%",
    backgroundColor: colors.blue,
    borderRadius: 4,
    padding: 16,
    marginTop: 34,
    justifyContent: "center",
    alignItems: "center",
  },

  buttonText: {
    color: colors.white,
    fontSize: 18,
    fontWeight: "bold",
  },
});
