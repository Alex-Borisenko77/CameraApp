import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { StatusBar } from 'react-native'
import { ROUTES } from './routes'
import  CameraScreen from '../screens/Camera'
import  ResultScreen  from '../screens/Result'
import { RootNavigationParams } from "../../types";


const RootStack = createNativeStackNavigator<RootNavigationParams>()

export const RootNavContainer = () => (
  <NavigationContainer>
    <StatusBar barStyle="default" />
    <RootStack.Navigator screenOptions={{ headerShown: false }} initialRouteName={ROUTES.CAMERA}>
      <RootStack.Screen name={ROUTES.CAMERA} component={CameraScreen} />
      <RootStack.Screen name={ROUTES.RESULT} component={ResultScreen} />
    </RootStack.Navigator>
  </NavigationContainer>
)
