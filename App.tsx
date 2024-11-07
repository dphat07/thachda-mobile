import { NavigationContainer } from "@react-navigation/native";
import theme, { ThemeProvider } from "@theme";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import LoginScreen from "screens/auth/loginScreen";
import SplashScreen from "screens/auth/splashScreen";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <SplashScreen />
      </NavigationContainer>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
