import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-web';
import HomeScreen from './Screens/HomeScreen';
import RegistrationScreen from './Screens/RegistrationScreen';
import StudentForm from './components/StudentForm';
import AppNavigator from './navigation/AppNavigator';


export default function App(){
  return(
    <View>
      {/* <RegistrationScreen/> */}
      {/* <HomeScreen/> */}
      <AppNavigator/>
    </View>
  )
}