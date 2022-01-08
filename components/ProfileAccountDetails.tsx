import React, {useEffect, useState} from "react";
import { Text, View, TextInput } from "react-native";
import { ButtonGroup, Input } from 'react-native-elements'
import Icon from "./Icon";
import MultiSlider from "@ptomasroos/react-native-multi-slider";
import styles, { DARK_GRAY, WHITE } from "../assets/styles";
import { ProfilePreferencesDemo } from "../assets/data/profileDemo";

const MAX_SLIDER_VALUE = 2000;
const MIN_SLIDER_VALUE = 0;
const SIZES = ["XS", "S", "M", "L", "XL"]

const ProfileAccountDetails = ({navigation}: any) => {
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
        <Icon name="person-outline" size={13} color={DARK_GRAY}/>
          <Text>
            {'  Name '}
          </Text>
        </View>
        <Input
            placeholder="Johnita Stenbäck"
        />
      </View>
      <View style={styles.pressableProfileItem}>
        <View style={styles.profileText}>
        <Icon name="mail-outline" size={13} color={DARK_GRAY}/>
          <Text>
            {'  Email '}
          </Text>
        </View>
        <Input
            placeholder="gabriella.stenback@gmail.com"
        />
      </View>
      <View style={styles.pressableProfileItem}>
        <View style={styles.profileText}>
        <Icon name="call-outline" size={13} color={DARK_GRAY}/>
          <Text>
            {'  Phone number '}
          </Text>
        </View>
        <Input
            placeholder="+46739283619"
        />
      </View>
      <View style={styles.pressableProfileItem}>
        <View style={styles.profileText}>
        <Icon name="compass-outline" size={13} color={DARK_GRAY}/>
          <Text>
            {'  Password '}
          </Text>
        </View>
        <Input
            placeholder="*****************"
        />
      </View>
    </View>
  )
};

export default ProfileAccountDetails;
