import { View, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native"; //for navigayion
import { useLayoutEffect } from "react"; //for navigation
import IconButton from "../../components/ui/IconButton"; //for navigation

import HomeButton from "../../components/ui/HomeButton";
import Title from "../../components/ui/Title";
import Colors from "../../constants/Colors";

function UrduScreen(){
    const navigation = useNavigation();

    function urduAlphabetsHandler(){
        navigation.navigate("UrduAlphabetsScreen");
    }
    function urduPhonicsHandler(){
        navigation.navigate("UrduPhonicsScreen");
    }
    function urduSpellingsHandler(){
        navigation.navigate("UrduSpellingsScreen");
    }
    function urduTracingHandler(){
        navigation.navigate("UrduTracingScreen");
    }
    function urduMatchMakingHandler(){
        navigation.navigate("UrduMatchmakingScreen");
    }
    function urduTouchAlphabetHandler(){
        navigation.navigate("UrduTouchAlphabetScreen");
    }

    ///////////////////////////////////// Copy //////////////////////////////////////
  //header home Icon
  function headerHomeNavigationHandler() {
    navigation.navigate("Home");
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton
            onPress={headerHomeNavigationHandler}
            name={"home"}
            size={34}
            color={"black"}
          />
        );
      },
    });
  }, [navigation, headerHomeNavigationHandler]);
/////////////////////////////////////////////////////////////////////////////////

    

    return <View style = {styles.ViewConatiner} >
    
    <Text> </Text>
    <Title>Learn Urdu</Title>
    <HomeButton imageUri={require('../../assets/images/ABC.png')} onPress={urduAlphabetsHandler}>Alphabets</HomeButton>
    <HomeButton imageUri={require('../../assets/images/ABC.png')} onPress={urduPhonicsHandler}>Phonics</HomeButton>
    <HomeButton imageUri={require('../../assets/images/ABC.png')} onPress={urduSpellingsHandler}>Spellings</HomeButton>
    <HomeButton imageUri={require('../../assets/images/ABC.png')} onPress={urduTracingHandler}>Tracing</HomeButton>
    <HomeButton imageUri={require('../../assets/images/ABC.png')} onPress={urduMatchMakingHandler}>Matchmaking</HomeButton>
    <HomeButton imageUri={require('../../assets/images/ABC.png')} onPress={urduTouchAlphabetHandler}>Touch alphabet</HomeButton>
</View>
}
export default UrduScreen;

const styles = StyleSheet.create({
    ViewConatiner: {
        flex: 1,
        padding: 8,
        backgroundColor: Colors.primary
    }
})


