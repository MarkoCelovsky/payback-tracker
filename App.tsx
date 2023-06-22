import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { NativeBaseProvider } from "native-base";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { AuthProvider } from "./src/context/auth-context";
import { BottomTab } from "./src/navigation/BottomTab";

export default function App() {
  return (
    <NavigationContainer>
      <SafeAreaView style={styles.container}>
        <NativeBaseProvider>
          <AuthProvider>
            <BottomTab />
          </AuthProvider>
        </NativeBaseProvider>
      </SafeAreaView>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
});
