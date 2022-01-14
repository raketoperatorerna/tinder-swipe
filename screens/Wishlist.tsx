import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  Image,
  ScrollView
} from "react-native";
import { CardItem, Icon } from "../components";
import DEMO from "../assets/data/demo";
import styles, { DARK_GRAY } from "../assets/styles";

const Wishlist = ({navigation}: any) => (
  <ImageBackground
    source={require("../assets/images/bg.png")}
    style={styles.bg}
  >
    <View style={styles.containerWhishlist}>
      <View style={styles.top}>
        <Text style={styles.title}>Wishlist</Text>
        <TouchableOpacity>
          <Icon name="ellipsis-vertical" color={DARK_GRAY} size={20} />
        </TouchableOpacity>
      </View>

      <ScrollView style={{flexDirection: "column", flex: 1}}>
        <View style={{flexDirection: "row", flex: 1}}>
          {DEMO.map((item) => (
              <CardItem
                height={300}
                width={360}
                name={item.name}
                description={item.description}
                images={item.images}
                price={item.price}
                sizes={item.sizes}
                deliveryTime={item.deliveryTime}
                navigation={navigation}
              />
          ))}
        </View>
        <View style={{flexDirection: "row", flex: 1}}>
          {DEMO.map((item) => (
              <CardItem
                height={300}
                width={360}
                name={item.name}
                description={item.description}
                images={item.images}
                price={item.price}
                sizes={item.sizes}
                deliveryTime={item.deliveryTime}
                navigation={navigation}
              />
          ))}
        </View>
        <View style={{flexDirection: "row", flex: 1}}>
          {DEMO.map((item) => (
              <CardItem
                height={300}
                width={360}
                name={item.name}
                description={item.description}
                images={item.images}
                price={item.price}
                sizes={item.sizes}
                deliveryTime={item.deliveryTime}
                navigation={navigation}
              />
          ))}
        </View>
      </ScrollView>
    </View>
  </ImageBackground>
);

export default Wishlist;
