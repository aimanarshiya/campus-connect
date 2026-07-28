import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-web';
import HomeScreen from './Screens/HomeScreen';


export default function App(){
  return(
    <View>
      <HomeScreen/>
    </View>
  )
}