import { Text, View, Image, StyleSheet } from "react-native";
import { FontAwesome } from '@expo/vector-icons';

import Colors from "../constants/Colors";
import PrimaryButton from "../components/ui/PrimaryButton";
import Title from "../components/ui/Title";
import { useNavigation } from "@react-navigation/native";

function WelcomeScreen(){
    const navigation = useNavigation();
    function startAppHandler(){
        navigation.navigate("Home");
    }

    return <View style = {styles.rootContainer}>
    <Title>Kids Learning</Title>
    <View style = {styles.imageContainer}>
    <Image style= {styles.image} source={require('../assets/images/welcome.jpg')} />
    </View>
    <Text style = {styles.summaryText}>Welcome to Kids learning. </Text>
    <PrimaryButton onPress={startAppHandler} >Let's go!  <FontAwesome name="long-arrow-right" size={32} color="white" /> </PrimaryButton>
</View>
}

export default WelcomeScreen;

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        padding: 24,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.primary,
    },
    imageContainer: {
        width: 300, //400
        height: 300, //400
        borderRadius: 150, //200 for circle, radius has to be half of width and height
        borderWidth: 3,
        borderColor: Colors.color2,
        overflow: "hidden",
        margin: 50,
    },
    image: {
        width: '100%',
        height: '100%',
    },
    summaryText: {
        fontSize: 30,
        textAlign: 'center',
        marginBottom: 24,
        color: Colors.secondary //'white'
    },

})