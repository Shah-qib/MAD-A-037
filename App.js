import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, View, } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import WelcomeScreen from './screens/WelcomeScreen';
import HomeScreen from './screens/HomeScreen';
import EnglishScreen from './screens/English/EnglishScreen';
import UrduScreen from './screens/Urdu/UrduScreen';
import MathsScreen from './screens/Maths/MathsScreen';
import ArtScreen from './screens/Art/ArtScreen';
import RhymesScreen from './screens/Rhymes/RhymesScreen';
import ViewRecordsScreen from './screens/View_Records/ViewRecordsScreen';

import EnglishAlphabetsScreen from './screens/English/EnglishAlphabetsScreen';
import EnglishPhonicsScreen from './screens/English/EnglishPhonicsScreen';
import EnglishSpellingsScreen from './screens/English/EnglishSpellingsScreen';
import EnglishTracingScreen from './screens/English/EnglishTracingScreen';
import EnglishMatchmakingScreen from './screens/English/EnglishMatchmakingScreen';
import EnglishTouchAlphabetScreen from './screens/English/EnglishTouchAlphabetScreen';

import UrduAlphabetsScreen from './screens/Urdu/UrduAlphabetsScreen';
import UrduPhonicsScreen from './screens/Urdu/UrduPhonicsScreen';
import UrduSpellingsScreen from './screens/Urdu/UrduSpellingsScreen';
import UrduTracingScreen from './screens/Urdu/UrduTracingScreen';
import UrduMatchmakingScreen from './screens/Urdu/UrduMatchmakingScreen';
import UrduTouchAlphabetScreen from './screens/Urdu/UrduTouchAlphabetScreen';
import Colors from './constants/Colors';

const Stack = createNativeStackNavigator();

export default function App() {
  // const navigation = useNavigation();
  //   function homeNavigationHandler(){
  //       navigation.navigate("Home");
  //   }
  return (
    <>
    <StatusBar style='dark'/>
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerStyle:{backgroundColor: Colors.color2},
        headerTintColor: 'black',
        //contentStyle: {backgroundColor: 'black'}
        //headerRight: ()=>{
        //  return <IconButton name= {"home"} size={32} color = "black"/>
        //}
      }
      }>
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Home" component={HomeScreen} options={{headerBackTitleVisible: false}}/>
        <Stack.Screen name="EnglishScreen" component={EnglishScreen} options={{title: 'English'}} />
        <Stack.Screen name="UrduScreen" component={UrduScreen} options={{title: 'Urdu'}}/>
        <Stack.Screen name="MathsScreen" component={MathsScreen} options={{title: 'Maths'}}/>
        <Stack.Screen name="ArtScreen" component={ArtScreen} options={{title: 'Art'}}/>
        <Stack.Screen name="RhymesScreen" component={RhymesScreen} options={{title: 'Rhymes'}}/>
        <Stack.Screen name='ViewRecordsScreen' component={ViewRecordsScreen} options={{title: 'Records'}}/>
        
        <Stack.Screen name="EnglishAlphabetsScreen" component={EnglishAlphabetsScreen} options={{title: 'English Alphabets'}}/>
        <Stack.Screen name="EnglishPhonicsScreen" component={EnglishPhonicsScreen} options={{title: 'English Phonics'}}/>
        <Stack.Screen name="EnglishSpellingsScreen" component={EnglishSpellingsScreen} options={{title: 'English Spellings'}}/>
        <Stack.Screen name="EnglishTracingScreen" component={EnglishTracingScreen} options={{title: 'English Tracing'}}/>
        <Stack.Screen name="EnglishMatchmakingScreen" component={EnglishMatchmakingScreen} options={{title: 'English Matchmaking'}}/>
        <Stack.Screen name="EnglishTouchAlphabetScreen" component={EnglishTouchAlphabetScreen} options={{title: 'Touch English Alphabet'}}/>

        <Stack.Screen name="UrduAlphabetsScreen" component={UrduAlphabetsScreen} options={{title: 'Urdu Alphabets'}}/>
        <Stack.Screen name="UrduPhonicsScreen" component={UrduPhonicsScreen} options={{title: 'Urdu Phonics'}}/>
        <Stack.Screen name="UrduSpellingsScreen" component={UrduSpellingsScreen} options={{title: 'Urdu Spellings'}}/>
        <Stack.Screen name="UrduTracingScreen" component={UrduTracingScreen} options={{title: 'Urdu Tracing'}}/>
        <Stack.Screen name="UrduMatchmakingScreen" component={UrduMatchmakingScreen} options={{title: 'Urdu Matchmaking'}}/>
        <Stack.Screen name='UrduTouchAlphabetScreen' component={UrduTouchAlphabetScreen} options={{title: 'Touch Urdu Alphabet'}}/>
      </Stack.Navigator>
    </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
