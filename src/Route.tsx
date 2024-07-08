import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList} from './config/navigationTypes';

import TabView from './TabView';

const Stack = createNativeStackNavigator<RootStackParamList>();

const Route = () => {
  return (
    <Stack.Navigator
      initialRouteName={'TabView'}
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="TabView" component={TabView} />
    </Stack.Navigator>
  );
};

export default Route;
