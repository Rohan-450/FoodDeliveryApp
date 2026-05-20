import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CartScreen from '../screens/home/CartScreen';
import HomeScreen from '../screens/home/HomeScreen';
import RestaurantDetailsScreen from '../screens/home/RestaurantDetailsScreen';

const Stack = createNativeStackNavigator();

export default function HomeStackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#ff6b00',
        },
        headerTintColor: '#fff',
        headerBackTitle: 'Back',
      }}
    >
      <Stack.Screen
        name="Home"
        component={HomeScreen}
      />

      <Stack.Screen
        name="RestaurantDetails"
        component={RestaurantDetailsScreen}
        options={{
          title: 'Restaurant',
          animation: 'slide_from_right',
        }}
      />

      <Stack.Screen
        name="Cart"
        component={CartScreen}
        options={{
          animation: 'slide_from_bottom',
        }}
      />
    </Stack.Navigator>
  );
}