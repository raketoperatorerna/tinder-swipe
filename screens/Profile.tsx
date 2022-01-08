import React from "react";
import {
  ScrollView,
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Pressable,
} from "react-native";
import { Icon } from "../components";
import styles, { DIMENSION_WIDTH, DIMENSION_HEIGHT, WHITE } from "../assets/styles";

const Profile = ({navigation}: any) => {
  return (
    <ImageBackground
      source={require("../assets/images/bg.png")}
      style={styles.bg}
    >
      <View style={styles.containerProfileItem}>

        <Pressable style={styles.pressableProfileItem} onPress={() => {
          navigation.push("Preferences")
        }}>
          <Text>
            Preferences
          </Text>
        </Pressable>
        <Pressable style={styles.pressableProfileItem} onPress={() => {
          navigation.push("ProfileAccountDetails")
        }}>
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
    </ImageBackground>
  );
};

export default Profile;
