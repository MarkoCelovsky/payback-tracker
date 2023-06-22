import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ReactElement } from "react";
import { Screens } from "../screens/screen-names";
import { NestedHomeScreens } from "./StackNavigation";
import { Ionicons } from "@expo/vector-icons";

const { Navigator, Screen } = createBottomTabNavigator();

export const BottomTab = (): ReactElement => {
  return (
    <Navigator>
      <Screen
        name={Screens.NestedHome}
        component={NestedHomeScreens}
        options={{
          headerShown: false,
          title: "Home",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" size={size} color={color} />
          ),
        }}
      />
    </Navigator>
  );
};
