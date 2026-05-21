import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  getFocusedRouteNameFromRoute,
} from '@react-navigation/native';
import { useCart } from '../context/CartContext';
import OrdersScreen from '../screens/tabs/OrdersScreen';
import SearchScreen from '../screens/tabs/SearchScreen';
import HomeStackNavigator from './HomeStackNavigator';
import ProfileDrawerNavigator from './ProfileDrawerNavigator';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  const { cartItems } = useCart();

  const getTabBarStyle = (route) => {
    const routeName =
      getFocusedRouteNameFromRoute(route) ?? 'Home';

    if (
      routeName === 'RestaurantDetails' ||
      routeName === 'Cart'
    ) {
      return { display: 'none' };
    }

    return {
      height: 65,
      paddingBottom: 5,
    };
  };

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: '#FF6B00',
        tabBarInactiveTintColor: '#777',
        tabBarIcon: ({ color, size }) => {
          let icon;

          if (route.name === 'HomeTab') {
            icon = 'home';
          } else if (route.name === 'Search') {
            icon = 'search';
          } else if (route.name === 'Orders') {
            icon = 'receipt';
          } else {
            icon = 'person';
          }

          return (
            <Ionicons
              name={icon}
              size={size}
              color={color}
            />
          );
        },
      })}
    >
      <Tab.Screen
        name="HomeTab"
        component={HomeStackNavigator}
        options={({ route }) => ({
          title: 'Home',
          tabBarStyle: getTabBarStyle(route),
        })}
      />

      <Tab.Screen
        name="Search"
        component={SearchScreen}
      />

      <Tab.Screen
        name="Orders"
        component={OrdersScreen}
        options={{
          tabBarBadge:
            cartItems.length > 0
              ? cartItems.length
              : null,
        }}
      />

      <Tab.Screen
        name="Profile"
        component={ProfileDrawerNavigator}
      />
    </Tab.Navigator>
  )
}