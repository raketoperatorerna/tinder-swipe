import React from "react";
import { Text, TouchableOpacity } from "react-native";
import Icon from "./Icon";
import styles, { DARK_GRAY } from "../assets/styles";

const Brand = () => (
  <TouchableOpacity style={styles.city}>
    <Text style={styles.cityText}>
      <Icon name="pricetag-outline" size={13} color={DARK_GRAY} /> H&M
    </Text>
  </TouchableOpacity>
);

export default Brand;
