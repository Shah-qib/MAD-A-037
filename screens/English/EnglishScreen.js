import { View, Text, StyleSheet, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useLayoutEffect } from "react";

import HomeButton from "../../components/ui/HomeButton";
import Title from "../../components/ui/Title";
import Colors from "../../constants/Colors";
import IconButton from "../../components/ui/IconButton";
function EnglishScreen() {
  const navigation = useNavigation();

  function englishAlphabetsHandler() {
    navigation.navigate("EnglishAlphabetsScreen");
  }
  function englishPhonicsHandler() {
    navigation.navigate("EnglishPhonicsScreen");
  }
  function englishSpellingsHandler() {
    navigation.navigate("EnglishSpellingsScreen");
  }
  function englishTracingHandler() {
    navigation.navigate("EnglishTracingScreen");
  }
  function englishMatchMakingHandler() {
    navigation.navigate("EnglishMatchmakingScreen");
  }
  function englishTouchAlphabetHandler() {
    navigation.navigate("EnglishTouchAphabetScreen");
  }

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

  return (
    <View style={styles.ViewConatiner}>
      
      <Title>Learn English</Title>
      <HomeButton
        imageUri={require("../../assets/images/ABC.png")}
        onPress={englishAlphabetsHandler}
      >
        Alphabets
      </HomeButton>
      <HomeButton
        imageUri={require("../../assets/images/colorABC.png")}
        onPress={englishPhonicsHandler}
      >
        Phonics
      </HomeButton>
      <HomeButton
        imageUri={require("../../assets/images/Shapes.png")}
        onPress={englishSpellingsHandler}
      >
        Spellings
      </HomeButton>
      <HomeButton
        imageUri={require("../../assets/images/ABC.png")}
        onPress={englishTracingHandler}
      >
        Tracing
      </HomeButton>
      <HomeButton
        imageUri={require("../../assets/images/ABC.png")}
        onPress={englishMatchMakingHandler}
      >
        Matchmaking
      </HomeButton>
      <HomeButton
        imageUri={require("../../assets/images/ABC.png")}
        onPress={englishTouchAlphabetHandler}
      >
        Touch alphabet
      </HomeButton>
    </View>
  );
}
export default EnglishScreen;

const styles = StyleSheet.create({
  ViewConatiner: {
    flex: 1,
    padding: 8,
    backgroundColor: Colors.primary,
  },
});
