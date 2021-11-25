import React, { useState } from "react";
import {
    Text,
    View,
    TouchableOpacity,
    Button,
    FlatList,
    ImageBackground,
} from "react-native";
import { ButtonGroup } from 'react-native-elements'
import { CardItem } from "../components";
import { ItemT } from "../types";
import styles from "../assets/styles";
import DEMO from "../assets/data/demo";

const ItemInfo = ({
    name,
    description,
    images,
    price,
    sizes,
    deliveryTime,
}: ItemT) => {
    var [selectedIndex, setSelectedIndex] = useState(1);

    return (
        <ImageBackground
            source={require("../assets/images/bg.png")}
            style={styles.bg}
        >
            <View style={styles.containerItemInfo}>

                <FlatList
                    numColumns={2}
                    data={DEMO}
                    keyExtractor={item => item.id.toString()}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item }) => (
                        <TouchableOpacity>
                            <CardItem
                                images={item.images}
                                name={item.name}
                                price={0}
                                sizes={item.sizes}
                            />
                            <View
                                style={{
                                    flex: 1,
                                    justifyContent: "center",
                                    alignItems: "center",
                                    alignSelf: "stretch",
                                    bottom: 0,
                                    backgroundColor: "#f5f5f5",
                                    paddingBottom: 170,
                                }}
                            >
                                <Text style={styles.descriptionCardItem}>
                                    {description}
                                </Text>
                                <ButtonGroup
                                    buttons={sizes}
                                    containerStyle={{ height: 40, width: '80%' }}
                                    buttonContainerStyle={{ backgroundColor: '#ebebeb', borderColor: '#ffffff' }}
                                    textStyle={{ color: '#404040' }}
                                    selectedButtonStyle={{ backgroundColor: '#c5c5c5' }}
                                    selectedTextStyle={{ color: 'black' }}
                                    onPress={(item) => {
                                        setSelectedIndex(item)
                                    }}
                                    selectedIndex={selectedIndex}
                                />
                                <Button
                                    style={styles.button}
                                    title={"Purchase " + price + " Kr"}
                                    onPress={() => { }}
                                ></Button>
                                <Text
                                    style={{
                                        textAlign: "left",
                                        marginHorizontal: 20,
                                        marginBottom: 30,
                                        paddingTop: 5,
                                        color: "#727171",
                                        fontSize: 11
                                    }}
                                >
                                    {deliveryTime + " delivery"}
                                </Text>
                            </View>
                        </TouchableOpacity>
                    )}
                />
            </View>
        </ImageBackground>
    );
};

export default ItemInfo;
