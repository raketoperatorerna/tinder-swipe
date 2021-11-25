import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  FlatList,
} from "react-native";
import { CardItem, Icon } from "../components";
import DEMO from "../assets/data/demo";
import styles, { DARK_GRAY } from "../assets/styles";

const Wishlist = () => (
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

      <FlatList
        numColumns={2}
        data={DEMO}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity>
            <CardItem
              name={item.name}
              description={item.description}
              images={item.images}
              price={item.price}
              sizes={item.sizes}
            />
          </TouchableOpacity>
        )}
      />
    </View>
  </ImageBackground>
);

export default Wishlist;
