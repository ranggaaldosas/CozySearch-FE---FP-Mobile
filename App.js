
import { useFonts } from 'expo-font';
import * as Splashscreen from "expo-splash-screen";
import { useCallback } from 'react';
import { NavigationContainer} from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Onboarding, Search ,CountryDetails, Recommended, PlaceDetails, HotelDetails, HotelList, HotelSearch, SelectRoom, Payments, Settings, SelectedRoom, Successful, Failed} from './screens';
import BottomTabNavigation from './navigation/BottomTabNavigation';
import AuthTopTab from './navigation/AuthTopTab';

const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    regular: require('./assets/fonts/regular.otf'),
    medium: require('./assets/fonts/medium.otf'),
    bold: require('./assets/fonts/bold.otf'),
    light: require('./assets/fonts/light.otf'),
    xtrabold: require('./assets/fonts/xtrabold.otf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await Splashscreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  const components = [
    {
      name: "Onboard",
      component: Onboarding,
    },
    {
      name: "Bottom",
      component: BottomTabNavigation,
    },
    {
      name: "Auth",
      component: AuthTopTab,
    },
    {
      name: "Search",
      component: Search,
    },
    {
      name: "CountryDetails",
      component: CountryDetails,
    },
    {
      name: "Recommended",
      component: Recommended,
    },
    {
      name: "PlaceDetails",
      component: PlaceDetails,
    },
    {
      name: "HotelDetails",
      component: HotelDetails,
    },
    {
      name: "HotelList",
      component: HotelList,
    },
    {
      name: "SelectRoom",
      component: SelectRoom,
    },
    {
      name: "Payments",
      component: Payments,
    },
    {
      name: "Success",
      component: Successful,
    },
    {
      name: "Fail",
      component: Failed,
    },
    {
      name: "PlaceDetails",
      component: PlaceDetails,
    },
    
  ];

  return (
   <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Onboard' component={Onboarding} options={ {headerShown: false}}/>
        <Stack.Screen name='Bottom' component={BottomTabNavigation} options={ {headerShown: false}}/>
        <Stack.Screen name='Auth' component={AuthTopTab} options={ {headerShown: false}}/>
        <Stack.Screen name='Search' component={Search} options={ {headerShown: false}}/>
        <Stack.Screen name='CountryDetails' component={CountryDetails} options={ {headerShown: false}}/>
        <Stack.Screen name='Recommended' component={Recommended} options={ {headerShown: false}}/>
        <Stack.Screen name='PlaceDetails' component={PlaceDetails} options={ {headerShown: false}}/>
        <Stack.Screen name='HotelDetails' component={HotelDetails} options={ {headerShown: false}}/>
        <Stack.Screen name='HotelList' component={HotelList} options={ {headerShown: false}}/>
        <Stack.Screen name='HotelSearch' component={HotelSearch} options={ {headerShown: false}}/>
        <Stack.Screen name='SelectRoom' component={SelectRoom} options={ {headerShown: false}}/>
        <Stack.Screen name='Payments' component={Payments} options={ {headerShown: false}}/>
        <Stack.Screen name='Success' component={Successful} options={ {headerShown: false}}/>
        <Stack.Screen name='Fail' component={Failed} options={ {headerShown: false}}/>
        <Stack.Screen name='Settings' component={Settings} options={ {headerShown: false}}/>
        <Stack.Screen name='SelectedRoom' component={SelectedRoom} options={ {headerShown: false}}/>
      </Stack.Navigator>
   </NavigationContainer>
  );
}
