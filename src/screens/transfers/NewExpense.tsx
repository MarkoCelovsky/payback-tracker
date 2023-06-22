import { ReactElement } from "react";
import { StyleSheet, View } from "react-native";

export const NewExpense = (): ReactElement => {
  return <View style={styles.rootContainer}></View>;
};

const styles = StyleSheet.create({
  rootContainer: { flex: 1 },
});
