import DisplayData from "../../components/DisplayData";
import UrduPhonicsData from "../../data/Urdu-data/UrduPhonicsData";

import { useNavigation } from "@react-navigation/native"; //for navigayion
import { useLayoutEffect } from "react"; //for navigation
import IconButton from "../../components/ui/IconButton"; //for navigation


function UrduPhonicsScreen(){

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
      <DisplayData data={UrduPhonicsData} maxLength = {37}/>
    )
        
    
}
export default UrduPhonicsScreen;