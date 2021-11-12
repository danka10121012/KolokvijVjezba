import React from "react";
import { View } from "react-native";

export function SettingsScreen({ route, navigation }) {
    function handleHomePress() {
      navigation.navigate("Home");
    }

    return(
<View style= {styles.screen}>
    <Text>This is Home!  </Text>
    <Button title="Move to the Home screen!" onPress={handleHomePress} />

  
</View>

    )
}

const styles = StyleSheet.create({
    screen: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    },
  });