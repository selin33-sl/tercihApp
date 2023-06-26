import {createDrawerNavigator} from '@react-navigation/drawer';
import {HomeScreen, UniversitiesScreen} from '../screens';
import {NavigationContainer} from '@react-navigation/native';

const Drawer = createDrawerNavigator();

export const DrawerStack = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="home-screen" component={HomeScreen} />
        <Drawer.Screen
          name="universities-screen"
          component={UniversitiesScreen}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};
