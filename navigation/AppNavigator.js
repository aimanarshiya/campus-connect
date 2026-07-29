import { createNativeStackNavigator } from "@react-navigation/native-stack";
import StudentRegistration from "../Screens/RegistrationScreen";
import HomeScreen from '../HomeScreencreens/HomeScreen';
export default function AppNavigator(){
    //this creates navigation stack
    const Stack = createNativeStackNavigator();
    return(
         <Stack.Navigator>
         <Stack.Screen 
         name="Register"
         component={StudentRegistration}
         />

         <Stack.Screen
          name="Home"
          component={HomeScreen}
          />
          </Stack.Navigator>
    )
}