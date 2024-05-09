import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  SafeAreaView,
} from "react-native";
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  component:{
    flex: 0.9,
    padding:2
  },
  text: {
    fontSize: 14,
    color: "white",
    fontStyle: "normal",
    fontWeight: "500",
  },
  wrapperCustom: {
    borderRadius: 2,
    padding: 8,
  },
  sideBySide: {
    flex: 0.1,
    flexDirection: "row",
    // justifyContent: "center",
    // alignContent:"center",
    alignItems: "center",
    // flexWrap: "wrap"
  },
});