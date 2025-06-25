import { createStackNavigator } from "@react-navigation/stack";
import { HomeScreen } from "../screens/home/HomeScreen";
import { Animation101Screen } from "../screens/animations/Animation101Screen";
import { Animation102Screen } from "../screens/animations/Animation102Screen";
import { SwitchScreen } from "../screens/switches/SwitchScreen";
import { AlertScreen } from "../screens/alerts/AlertScreen";
import { TextInputScreen } from "../screens/textInput/TextInputScreen";
import { PullToRefreshScreen } from "../screens/pullToRefresh/PullToRefreshScreen";
import { CustomSectionListScreen } from "../screens/customSectionList/CustomSectionListScreen";
import { ModalScreen } from "../screens/modal/ModalScreen";
import { InfiniteScrollScreen } from "../screens/infiniteScroll/InfiniteScrollScreen";

export type RootStackParamList = {
    Home:undefined;
    Animation101Screen: undefined;
    Animation102Screen: undefined;
    SwitchScreen: undefined;
    AlertScreen: undefined;
    TextInputScreen: undefined;
    PullToRefreshScreen: undefined;
    CustomSectionListScreen: undefined;
    ModalScreen: undefined;
    InfiniteScrollScreen: undefined;
}

const Stack = createStackNavigator<RootStackParamList>();

const StackNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown:false,
            }}
        >
            <Stack.Screen name='Home' component={HomeScreen} />
            <Stack.Screen name='Animation101Screen' component={Animation101Screen} />
            <Stack.Screen name='Animation102Screen' component={Animation102Screen} />
            <Stack.Screen name='SwitchScreen' component={SwitchScreen} />
            <Stack.Screen name='AlertScreen' component={AlertScreen} />
            <Stack.Screen name='TextInputScreen' component={TextInputScreen} />
            <Stack.Screen name='PullToRefreshScreen' component={PullToRefreshScreen} />
            <Stack.Screen name='CustomSectionListScreen' component={CustomSectionListScreen} />
            <Stack.Screen name='ModalScreen' component={ModalScreen} />
            <Stack.Screen name='InfiniteScrollScreen' component={InfiniteScrollScreen} />
        </Stack.Navigator>
    );
}

export default StackNavigator;