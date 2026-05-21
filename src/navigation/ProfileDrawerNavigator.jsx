import {
  createDrawerNavigator,
} from '@react-navigation/drawer';
import CustomDrawerContent from '../components/CustomDrawerContent';
import HelpScreen from '../screens/drawer/HelpScreen';
import MyOrdersScreen from '../screens/drawer/MyOrdersScreen';
import SettingsScreen from '../screens/drawer/SettingsScreen';
import ProfileScreen from '../screens/tabs/ProfileScreen';

const Drawer = createDrawerNavigator();

export default function ProfileDrawerNavigator() {
  return (
    <Drawer.Navigator
      initialRouteName="Profile"
      drawerContent={(props) => (
        <CustomDrawerContent {...props} />
      )}
      screenOptions={{
        drawerActiveBackgroundColor: '#FFF4EC',
        drawerActiveTintColor: '#FF6B00',
        headerStyle: {
          backgroundColor: '#ff6b00',
        },
        headerTintColor: '#fff',
      }}
    >
      <Drawer.Screen
        name="Profile"
        component={ProfileScreen}
      />

      <Drawer.Screen
        name="My Orders"
        component={MyOrdersScreen}
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