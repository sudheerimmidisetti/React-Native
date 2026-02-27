import react from "react";
import {
  View,
  Text,
  Button,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";
import MyImage from "./assets/favicon.png";
import { StatusBar } from "react-native";
import Component from "./Component";
import { SafeAreaProvider } from "react-native-safe-area-context";
import PasswordField from "./Password-Tasks";
import ChipInput from "./Chip-Task";
import Navigations from "./Navigations";

const App = () => {
  return (
    <>
      <SafeAreaProvider>
        {/* <Component /> */}
        {/* <PasswordField /> */}
        {/* <ChipInput /> */}
        <Navigations />
      </SafeAreaProvider>
    </>
  );
};

export default App;
