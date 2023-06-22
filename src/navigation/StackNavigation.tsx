import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackNavigatorParamList } from "../schema/navigationTypes";
import { Home } from "../screens/Home";
import { Screens } from "../screens/screen-names";
import { NewExpense } from "../screens/transfers/NewExpense";
import { NewIncome } from "../screens/transfers/NewIncome";
import { NewPayback } from "../screens/transfers/NewPayback";

const { Navigator, Screen } =
  createNativeStackNavigator<RootStackNavigatorParamList>();

export const NestedHomeScreens = () => {
  return (
    <Navigator
      initialRouteName={Screens.Home}
      screenOptions={{
        animation: "slide_from_right",
        gestureEnabled: true,
        headerShadowVisible: false,
        headerTitleAlign: "center",
      }}
    >
      <Screen name={Screens.Home} component={Home} />
      <Screen name={Screens.NewIncome} component={NewIncome} />
      <Screen name={Screens.NewExpense} component={NewExpense} />
      <Screen name={Screens.NewPayback} component={NewPayback} />
    </Navigator>
  );
};
