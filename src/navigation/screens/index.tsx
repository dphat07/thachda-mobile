import { NavigationContainer } from "@react-navigation/native";
import theme, { navigationTheme, ThemeProvider } from "@theme";
import RootScreens from "./root-screens";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@utils/helper";

export default function MainNavigation() {
  return (
    <NavigationContainer theme={navigationTheme}>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <RootScreens />
        </ThemeProvider>
      </QueryClientProvider>
    </NavigationContainer>
  );
}
