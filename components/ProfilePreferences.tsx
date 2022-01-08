import React, {useEffect, useState} from "react";
import { Text, View, TextInput } from "react-native";
import { ButtonGroup } from 'react-native-elements'
import Icon from "./Icon";
import MultiSlider from "@ptomasroos/react-native-multi-slider";
import styles, { DARK_GRAY, WHITE } from "../assets/styles";
import { ProfilePreferencesDemo } from "../assets/data/profileDemo";

const MAX_SLIDER_VALUE = 2000;
const MIN_SLIDER_VALUE = 0;
const SIZES = ["XS", "S", "M", "L", "XL"]

const ProfilePreferences = ({navigation}: any) => {
  const preferences = ProfilePreferencesDemo.filter(
    function(ProfilePreferencesDemo){ return ProfilePreferencesDemo.id == 1 }
  )[0];

  var sustainabilityPreference = preferences.sustainabilityPreference

  const [inputPriceRange, onChangePriceRange] = useState(null);
  const [selectedSustainability, onChangeSustainability] = useState(preferences.sustainabilityPreference);
  const [selectedSizes, onChangeSizes] = useState(preferences.sizesPreference?.map((x: string) => SIZES.indexOf(x)));
  const [multiSliderValue, setMultiSliderValue] = useState(preferences.itemPriceRange)

  const multiSliderValuesChange = (values: any) => setMultiSliderValue(values)

  useEffect(() => {
    navigation.addListener("beforeRemove", () => {
      // Add data API call to update preferences in database
    })
  })

  return (
    <View style={styles.containerProfileItem}>
      <View style={styles.pressableProfileItem}>
        <View style={styles.profileText}>
          <Icon name="pricetags-outline" size={13} color={DARK_GRAY}/>
          <Text>
            {'  Item price range'}
          </Text>
        </View>
        <MultiSlider
          min={MIN_SLIDER_VALUE}
          max={MAX_SLIDER_VALUE}
          step={25}
          values={[multiSliderValue[0], multiSliderValue[1]]}
          onValuesChange={multiSliderValuesChange}
        />
        <View>
          <Text>{multiSliderValue[0]} - {multiSliderValue[1]}</Text>
        </View>
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
      <View style={styles.profileText}>
        <Icon name="pricetags-outline" size={13} color={DARK_GRAY}/>
        <Text>
          {'  Size preference'}
        </Text>
      </View>
        <ButtonGroup
          buttons={SIZES}
          containerStyle={{ height: 40, width: '80%' }}
          buttonContainerStyle={{ backgroundColor: '#ebebeb', borderColor: '#ffffff' }}
          textStyle={{ color: '#404040' }}
          selectedButtonStyle={{ backgroundColor: '#c5c5c5' }}
          selectedTextStyle={{ color: 'black' }}
          onPress={onChangeSizes}
          selectMultiple
          selectedIndexes={selectedSizes}
        />
    </View>
  )
};

export default ProfilePreferences;
