import { Text, View, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

import HomeButton from "../components/ui/HomeButton";
import Title from "../components/ui/Title";
import Colors from "../constants/Colors";

function HomeScreen(){
    const navigation = useNavigation();

    function learnEnglishHandler(){
        navigation.navigate("EnglishScreen");
    }
    function learnUrduHandler(){
        navigation.navigate("UrduScreen");
    }
    function learnMathsHandler(){
        navigation.navigate("MathsScreen");
    }
    function learnArtHandler(){
        navigation.navigate("ArtScreen");
    }
    function rhymesHandler(){
        navigation.navigate("RhymesScreen");
    }
    function ViewRecordsHandler(){
        navigation.navigate("ViewRecordsScreen");
    }

    return <View style = {styles.ViewConatiner} >
        
        <Title>Home screen</Title>
        <HomeButton imageUri={require('../assets/images/ABC.png')} onPress={learnEnglishHandler}>Learn English</HomeButton>
        <HomeButton imageUri={require('../assets/images/colorABC.png')} onPress={learnUrduHandler}>Learn Urdu</HomeButton>
        <HomeButton imageUri={require('../assets/images/Shapes.png')} onPress={learnMathsHandler}>Learn Maths</HomeButton>
        <HomeButton imageUri={require('../assets/images/ABC.png')} onPress={learnArtHandler}>Learn Art</HomeButton>
        <HomeButton imageUri={require('../assets/images/ABC.png')} onPress={rhymesHandler}>Rhymes</HomeButton>
        <HomeButton imageUri={require('../assets/images/ABC.png')} onPress={ViewRecordsHandler}>View Records</HomeButton>
    </View>
    
}
export default HomeScreen;

const styles = StyleSheet.create({
    ViewConatiner: {
        flex: 1,
        padding: 8,
        backgroundColor: Colors.primary
    }
})