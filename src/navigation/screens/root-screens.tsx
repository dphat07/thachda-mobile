
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { loggedInScreens, notLoggedInScreens } from "@navigation/config/routes";
// import { useAuth } from '@hooks/auth';
import LoadingScreen from './loading-screen';

const Stack = createNativeStackNavigator();

export default function RootScreens() {
  // const { authenticationStatus, userInfo } = useAuth();

  // console.log('authenticationStatus: ', authenticationStatus)
  // const isAuth = authenticationStatus === "AUTHENTICATED";
  // const screens = isAuth ? loggedInScreens: notLoggedInScreens;
  // const isLoading = isAuth && !userInfo;

  // if (isLoading) return <LoadingScreen />;

  const screens = notLoggedInScreens; 
  return (
    <Stack.Navigator id={undefined} screenOptions={{ headerShown: false }}>
      {Object.entries(screens).map(([key, value]) => (
        <Stack.Screen
          key={key}
          name={key}
          component={value}
          options={{ headerShown: false }}
        />
      ))}
    </Stack.Navigator>
  );
}