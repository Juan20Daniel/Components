import { NavigationContainer } from "@react-navigation/native";
import StackNavigator from "./presentation/navigator/StackNavigator";
import { StatusBar } from "react-native";
import { PropsWithChildren } from "react";
import { ThemeProvider } from "./presentation/context/ThemeContext";

const AppState = ({children}:PropsWithChildren) => {
  return (
    <NavigationContainer>
      <ThemeProvider>
        {children}
      </ThemeProvider>
    </NavigationContainer>
  )
}

const App = () => {
  return (
    <>
      <AppState>
        <StackNavigator />
      </AppState>
    </>
  );
}

export default App;