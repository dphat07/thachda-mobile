
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { notLoggedInScreens } from "@navigation/config/routes";

export default function RootScreens() {
  const { Navigator, Group, Screen } = createNativeStackNavigator();
  const screens = notLoggedInScreens;
  return (
    <Navigator>
      <Group>
        {Object.entries(screens).map(([key, value]) => (
          <Screen
            key={key}
            name={key}
            component={value}
            options={{ headerShown: false }}
          />
        ))}
      </Group>
    </Navigator>
  );
}