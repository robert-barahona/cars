import { createStackNavigator } from "@react-navigation/stack"
import { Login } from "../screens/Login"
import { Register } from "../screens/Register"
import { History } from "../screens/History"
import { Information } from "../screens/Information"
import { Account } from "../screens/Account"
import { Text } from "react-native"

const Stack = createStackNavigator()

export const MyStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerMode: "screen",
        headerTintColor: "white",
        headerStyle: { backgroundColor: "#2f70fa" },
      }}
    >
      <Stack.Screen
        name="Login"
        options={{
          headerShown: false,
        }}
        component={Login}
      />
      <Stack.Screen
        name="Register"
        options={{
          title: "Registro",
        }}
        component={Register}
      />
      <Stack.Screen
        name="History"
        options={{
          title: "Historial",
        }}
        component={History}
      />
      <Stack.Screen
        name="Information"
        options={{
          title: "Información",
        }}
        component={Information}
      />
      <Stack.Screen
        name="Account"
        options={{
          headerShown: false,
        }}
        component={Account}
      />
    </Stack.Navigator>
  )
}
