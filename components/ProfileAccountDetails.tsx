import React, {useEffect, useState} from "react";
import { Text, View, TextInput } from "react-native";
import { ButtonGroup, Input } from 'react-native-elements'
import Icon from "./Icon";
import MultiSlider from "@ptomasroos/react-native-multi-slider";
import styles, { DARK_GRAY, WHITE } from "../assets/styles";
import { ProfileAccountDetailsDemo } from "../assets/data/profileDemo";

const ProfileAccountDetails = ({navigation}: any) => {
  const preferences = ProfileAccountDetailsDemo.filter(
    function(x){ return x.id == 1 }
  )[0];

  const [name, onChangeName] = useState(preferences.name)
  const [email, onChangeEmail] = useState(preferences.email)
  const [phoneNr, onChangePhoneNr] = useState(preferences.phoneNumber)
  const [password, onChangePassword] = useState("")

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
          value={name}
          textContentType="name"
          onChangeText={onChangeName}
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
            value={email}
            textContentType="emailAddress"
            onChangeText={onChangeEmail}
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
          value={phoneNr}
          textContentType="telephoneNumber"
          onChangeText={onChangePhoneNr}
          keyboardType="numeric"
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
          value={password}
          textContentType="password"
          onChangeText={onChangePassword}
          placeholder="*****************"
        />
      </View>
    </View>
  )
};

export default ProfileAccountDetails;