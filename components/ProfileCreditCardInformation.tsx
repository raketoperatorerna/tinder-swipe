import React, {useEffect, useState} from "react";
import { Text, View, TextInput } from "react-native";
import { CreditCardInput, LiteCreditCardInput } from "react-native-credit-card-input";
import { ButtonGroup, Input } from 'react-native-elements'
import Icon from "./Icon";
import styles, { DARK_GRAY, WHITE } from "../assets/styles";
import { ProfilePreferencesDemo } from "../assets/data/profileDemo";

const ProfileCreditCardInformation = ({navigation}: any) => {
  const preferences = ProfilePreferencesDemo.filter(
    function(ProfilePreferencesDemo){ return ProfilePreferencesDemo.id == 1 }
  )[0];

  useEffect(() => {
    navigation.addListener("beforeRemove", () => {
      // Add data API call to update preferences in database
    })
  })

  return (
    <View style={styles.containerProfileItem}>

    

      {/* <View style={styles.pressableProfileItem}>
        <View style={styles.profileText}>
        <Icon name="person-outline" size={13} color={DARK_GRAY}/>
          <Text>
            {'  Card Number '}
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
            {'  Exp date '}
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
            {'  CVV '}
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
      </View> */}
    </View>
  )
};

export default ProfileCreditCardInformation;
