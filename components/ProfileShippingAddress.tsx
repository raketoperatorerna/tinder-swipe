import React, {useEffect, useState} from "react";
import { Text, View, TextInput, Alert, ScrollView } from "react-native";
import { ButtonGroup, Input } from 'react-native-elements'
import Icon from "./Icon";
import styles, { DARK_GRAY, WHITE } from "../assets/styles";
import { ProfileShippingAddressDemo } from "../assets/data/profileDemo";

const ProfileShippingAddress = ({navigation}: any) => {
  const preferences = ProfileShippingAddressDemo.filter(
    function(ProfileShippingAddressDemo){ return ProfileShippingAddressDemo.id == 1 }
  )[0];

  const [country, onChangeCountry] = useState(preferences.country)
  const [city, onChangeCity] = useState(preferences.city)
  const [address, onChangeAddress] = useState(preferences.address)
  const [postalCode, onChangePostalCode] = useState(preferences.postalCode)

  const countryInput: any = React.createRef();

  useEffect(() => {
    navigation.addListener("beforeRemove", () => {
      // Add data API call to update preferences in database
    })
  })

  return (
    <View style={styles.containerProfileItem}>
      <View style={styles.pressableProfileItem}>
        <View style={styles.profileText}>
          <Icon name="map-outline" size={13} color={DARK_GRAY}/>
          <Text>
            {'  Country '}
          </Text>
        </View>
        <Input
          value={country}
          textContentType="countryName"
          ref={countryInput}
          onFocus={() => {countryInput.shake()}}
          disabled
        />
      </View>
      <View style={styles.pressableProfileItem}>
        <View style={styles.profileText}>
          <Icon name="compass-outline" size={13} color={DARK_GRAY}/>
          <Text>
            {' City '}
          </Text>
        </View>
        <Input
          value={city}
          textContentType="addressCity"
          onChangeText={onChangeCity}
          placeholder="Stockholm"
        />
      </View>
      <View style={styles.pressableProfileItem}>
        <View style={styles.profileText}>
          <Icon name="navigate-outline" size={13} color={DARK_GRAY}/>
          <Text>
            {'  Address '}
          </Text>
        </View>
        <Input
          value={address}
          textContentType="streetAddressLine1"
          onChangeText={onChangeAddress}
          placeholder="Sveavägen 23"
        />
      </View>
      <View style={styles.pressableProfileItem}>
        <View style={styles.profileText}>
          <Icon name="locate-outline" size={13} color={DARK_GRAY}/>
          <Text>
            {'  Postal Code '}
          </Text>
        </View>
        <Input
          value={postalCode}
          textContentType="postalCode"
          keyboardType="numeric"
          placeholder="112 37"
          maxLength={6}
          onChangeText={(code) => {
            onChangePostalCode(code.replace(/\W/gi, '').replace(/(.{3})/g, '$1 '))
          }}
        />
      </View>

    </View>
  )
};

export default ProfileShippingAddress;