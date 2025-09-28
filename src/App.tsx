import { DarkTheme, DefaultTheme, NavigationContainer } from "@react-navigation/native";
import StackNavigator from "./presentation/navigator/StackNavigator";
import { PropsWithChildren } from "react";
import { ThemeProvider } from "./presentation/context/ThemeContext";

const AppTheme = ({children}:PropsWithChildren) => {
  return (
    <NavigationContainer>
      {children}
    </NavigationContainer>
  )
}

const AppState = ({children}:PropsWithChildren) => {
  return (
    <ThemeProvider>
      {children}
    </ThemeProvider>
  )
}

const App = () => {
  return (
    <AppState>
      <AppTheme>
        <StackNavigator />
      </AppTheme>
    </AppState>
  );
}

export default App;