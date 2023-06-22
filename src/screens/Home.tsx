import { Fab, Icon, Menu, Text } from "native-base";
import { ReactElement } from "react";
import { StyleSheet, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackNavigatorParamList } from "../schema/navigationTypes";
import { Screens } from "./screen-names";

const fabComponent = (triggerProps: any) => (
  <Fab
    {...triggerProps}
    placement="bottom-right"
    shadow={4}
    rounded="sm"
    marginBottom={12}
    icon={<Icon color="white" as={AntDesign} name="plus" size="4" />}
  />
);

export const Home = (): ReactElement => {
  const { navigate } =
    useNavigation<NativeStackNavigationProp<RootStackNavigatorParamList>>();

  return (
    <View style={styles.rootContainer}>
      <Text role="heading">Your balance</Text>
      <Menu
        w="190"
        _backdrop={{ backgroundColor: "black" }}
        trigger={(triggerProps) => fabComponent(triggerProps)}
      >
        <Menu.Group title="expenses">
          <Menu.Item onPress={() => navigate(Screens.NewExpense)}>
            New expense
          </Menu.Item>
          <Menu.Item onPress={() => navigate(Screens.NewPayback)}>
            New payback
          </Menu.Item>
        </Menu.Group>
        <Menu.Group title="incomes">
          <Menu.Item onPress={() => navigate(Screens.NewIncome)}>
            New income
          </Menu.Item>
        </Menu.Group>
      </Menu>
    </View>
  );
};

const styles = StyleSheet.create({
  rootContainer: { flex: 1 },
});
