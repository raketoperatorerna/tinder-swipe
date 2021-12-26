import React from "react";
import {
  ScrollView,
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Pressable,
} from "react-native";
import { ButtonGroup } from 'react-native-elements';
import { Icon, ProfilePreferences } from "../components";
import styles, { DIMENSION_WIDTH, DIMENSION_HEIGHT, WHITE } from "../assets/styles";

const buttons = ['Preferences', 'Account details', 'Credit card information', 'Shipping address', 'Orders']

const Profile = () => {
  return (
    <ImageBackground
      source={require("../assets/images/bg.png")}
      style={styles.bg}
    >
      <View style={styles.containerProfileItem}>

        <Pressable style={styles.pressableProfileItem} onPress={ProfilePreferences}>
          <Text>
            Preferences
          </Text>
        </Pressable>
        <Pressable style={styles.pressableProfileItem}>
          <Text>
            Account details
          </Text>
        </Pressable>
        <Pressable style={styles.pressableProfileItem}>
          <Text>
            Credit card information
          </Text>
        </Pressable>
        <Pressable style={styles.pressableProfileItem}>
          <Text>
            Shipping address
          </Text>
        </Pressable>
        <Pressable style={styles.pressableProfileItem}>
          <Text>
            Orders
          </Text>
        </Pressable>
      </View>
      {/* <ButtonGroup
        buttons={buttons}
        containerStyle={{ flexDirection: 'column', height: {DIMENSION_HEIGHT- }}
        buttonContainerStyle={{ backgroundColor: '#ebebeb', borderColor: '#ffffff' }}
        textStyle={{ color: '#404040' }}
        selectedButtonStyle={{ backgroundColor: '#c5c5c5' }}
        selectedTextStyle={{ color: 'black' }}
        // onPress={(item) => {
        //     setSelectedIndex(item)
        // }}
        // selectedIndex={selectedIndex}
    /> */}
    </ImageBackground>
  );
};

export default Profile;
