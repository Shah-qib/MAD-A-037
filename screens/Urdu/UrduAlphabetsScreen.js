import UrduAlphabetsData from "../../data/Urdu-data/UrduAlphabetsData";
import DisplayData from "../../components/DisplayData";

import { useNavigation } from "@react-navigation/native"; //for navigayion
import { useLayoutEffect } from "react"; //for navigation
import IconButton from "../../components/ui/IconButton"; //for navigation

function UrduAlphabetsScreen() {
  
  ///////////////////////////////////// Copy //////////////////////////////////////
  const navigation = useNavigation();
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

  return (
      <DisplayData data = {UrduAlphabetsData} maxLength = {37}  />
    
  );
}
export default UrduAlphabetsScreen;

