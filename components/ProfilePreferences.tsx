import React, {useEffect, useState} from "react";
import { Text, View, TextInput } from "react-native";
import { ButtonGroup } from 'react-native-elements'
import Icon from "./Icon";
import MultiSlider from "@ptomasroos/react-native-multi-slider";
import { ProfilePreferencesT } from "../types";
import styles, { DARK_GRAY, WHITE } from "../assets/styles";
import { ProfilePreferencesDemo } from "../assets/data/profileDemo";



const ProfilePreferences = () => {
  const preferences = ProfilePreferencesDemo.filter(
    function(ProfilePreferencesDemo){ return ProfilePreferencesDemo.id == 1 }
  )[0];

  var sustainabilityPreference = preferences.sustainabilityPreference

  const [inputPriceRange, onChangePriceRange] = useState(null);
  const [selectedSustainability, onChangeSustainability] = useState(preferences.sustainabilityPreference);

  return (
    <View style={styles.containerProfileItem}>
      <View style={styles.pressableProfileItem}>
        <View style={styles.profileText}>
          <Icon name="pricetags-outline" size={13} color={DARK_GRAY}/>
          <Text>
            {'  Item price range'}
          </Text>
        </View>
        <TextInput
          style={styles.profileTextInput}
          value={inputPriceRange}
          placeholder={String(preferences.itemPriceRange[0]) + "-" + String(preferences.itemPriceRange[1]) + " kr"}
          keyboardType="numeric"
        />
      </View>
      <View style={styles.pressableProfileItem}>
        <View style={styles.profileText}>
          <Icon name="earth-outline" size={13} color={DARK_GRAY}/>
          <Text>
            {'  Sustainability preference'}
          </Text>
        </View>
        <ButtonGroup
          buttons={["Low", "Med", "High"]}
          containerStyle={{ height: 40, width: '80%' }}
          buttonContainerStyle={{ backgroundColor: '#ebebeb', borderColor: '#ffffff' }}
          textStyle={{ color: '#404040' }}
          selectedButtonStyle={{ backgroundColor: '#c5c5c5' }}
          selectedTextStyle={{ color: 'black' }}
          onPress={onChangeSustainability}
          selectMultiple
          selectedIndexes={selectedSustainability}
      />
      </View>
      <View style={styles.pressableProfileItem}>
        <Text>
          Orders
        </Text>
      </View>
    </View>
  )
};

export default ProfilePreferences;