import { View, Text, Pressable, StyleSheet, Image} from "react-native";

import Colors from "../../constants/Colors";

function HomeButton({ children, onPress, imageUri }) {  //we can name it(onPress) anthing
                     
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={styles.buttonInnerContainer}
        onPress={onPress}
        android_ripple={{ color: "#640233", opacity: 0.75 }}
      >
        <Image style={styles.ImageContainer} source={imageUri}/>
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
}
export default HomeButton;

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 28,
    borderWidth: 2,
    borderColor: Colors.color2,
    margin: 24,
    overflow: "hidden",
  },
  buttonInnerContainer: {
    backgroundColor: Colors.color4,
    flexDirection: "row",
    justifyContent: 'center',
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
  },
  buttonText: {
    //because we can not apply that to view or pressable
    color: 'white',
    textAlign: "center",
    fontSize: 28,
    fontWeight: 'bold'
  },
  ImageContainer:{
    borderRadius: 6,
    marginHorizontal: 10,
    height:40,
    width:40
  }
  
});
