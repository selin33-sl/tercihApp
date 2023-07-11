import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TercihStack } from './tercih-stack';
import { UniversitiesStack } from './universities-stack';
import {NavigationContainer} from '@react-navigation/native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
const Tab = createBottomTabNavigator();

export const AppStack=()=> {
  return (
   <NavigationContainer >
     <Tab.Navigator screenOptions={{headerShown: false,tabBarActiveBackgroundColor:'#DCE5FF',tabBarStyle:{
borderRadius:30
     }}}   >
      <Tab.Screen name="tercih-stack" component={TercihStack} options={{title:'Tercih Robotu',tabBarIcon: () => (
            <Icon name="robot-outline" color={'purple'} size={30} />
          ),}} />
      <Tab.Screen name="universities-stack" component={UniversitiesStack} options={{title:'Üniversiteler',tabBarIcon: () => (
            <Icon name="home-city" color={'purple'} size={30} />
          )
        }}/>
    </Tab.Navigator>
   </NavigationContainer>
  );
}