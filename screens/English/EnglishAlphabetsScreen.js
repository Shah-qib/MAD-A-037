import EnglishAlphabetsData from "../../data/English-data/EnglishAlphabetsData";
import DisplayData from "../../components/DisplayData";

import { useNavigation } from "@react-navigation/native"; //for navigayion
import { useLayoutEffect } from "react"; //for navigation
import IconButton from "../../components/ui/IconButton"; //for navigation

function EnglishAlphabetsScreen() {

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

  return <DisplayData data={EnglishAlphabetsData} maxLength={25} />;
}
export default EnglishAlphabetsScreen;
