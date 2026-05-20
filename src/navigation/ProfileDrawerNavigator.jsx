import {
  createDrawerNavigator,
} from '@react-navigation/drawer';
import CustomDrawerContent from '../components/CustomDrawerContent';
import HelpScreen from '../screens/drawer/HelpScreen';
import SettingsScreen from '../screens/drawer/SettingsScreen';
import OrdersScreen from '../screens/tabs/OrdersScreen';
import ProfileScreen from '../screens/tabs/ProfileScreen';

const Drawer = createDrawerNavigator();

export default function ProfileDrawerNavigator() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => (
        <CustomDrawerContent {...props} />
      )}
      screenOptions={{
        drawerActiveBackgroundColor: '#FFF4EC',
    drawerActiveTintColor: '#FF6B00',
      }}
    >
      <Drawer.Screen
        name="Profile"
        component={ProfileScreen}
      />

      <Drawer.Screen
        name="My Orders"
        component={OrdersScreen}
      />

      <Drawer.Screen
        name="Settings"
        component={SettingsScreen}
      />

      <Drawer.Screen
        name="Help"
        component={HelpScreen}
      />
    </Drawer.Navigator>
  );
}