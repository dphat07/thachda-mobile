import { NavigationContainer } from "@react-navigation/native";
import theme, { navigationTheme, ThemeProvider } from "@theme";
import RootScreens from "./root-screens";

export default function MainNavigation() {
    return (
        <ThemeProvider theme={theme}>
            <NavigationContainer theme={navigationTheme} >
                <RootScreens />
            </NavigationContainer>    
        </ThemeProvider>
    )
}